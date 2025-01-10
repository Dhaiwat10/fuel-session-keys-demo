import { launchTestNode } from "fuels/test-utils";

import { describe, test, expect } from "vitest";

import {
  TestPredicate,
  TestPredicateInputs,
} from "../../src/sway-api/predicates/TestPredicate";

describe("Predicate", () => {
  test("Transaction", async () => {
    using launched = await launchTestNode();
    const {
      wallets: [walletA, walletB],
      provider,
    } = launched;

    const signedMessage = await walletA.signMessage("gFUEL");

    const predicateData: TestPredicateInputs = [signedMessage, "gFUEL"];

    const predicate = new TestPredicate({
      provider,
      data: predicateData,
      configurableConstants: {
        MAIN_ADDRESS: walletA.address.toB256(),
        BURNER_ADDRESS: walletB.address.toB256(),
      },
    });

    const amountToPredicate = 250_000;
    const amountToReceiver = 50_000;

    const initialReceiverBalance = await walletB.getBalance();

    const setupTx = await walletA.transfer(
      predicate.address,
      amountToPredicate
    );
    await setupTx.waitForResult();

    const predicateBalance = await predicate.getBalance();
    expect(predicateBalance.toNumber()).toBe(amountToPredicate);

    const tx = await predicate.transfer(walletB.address, amountToReceiver);
    const { isStatusSuccess } = await tx.waitForResult();
    expect(isStatusSuccess).toBe(true);

    const finalReceiverBalance = await walletB.getBalance();

    expect(finalReceiverBalance.toNumber()).toBe(
      initialReceiverBalance.add(amountToReceiver).toNumber()
    );
  });
});
