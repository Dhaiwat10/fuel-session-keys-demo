/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.98.0
  Forc version: 0.66.5
  Fuel-Core version: 0.40.2
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
} from 'fuels';

export type TestScriptLoaderInputs = [input: BigNumberish];
export type TestScriptLoaderOutput = BN;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [],
  "functions": [
    {
      "inputs": [
        {
          "name": "input",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "main",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const bytecode = decompressBytecode('H4sIAAAAAAAAA5NyMGAIcGRQkHIJYNjlycBg5MDSqOAqzBDkKsDi5cLA0P7/Qop61Xcztw4vtn0axqU3fr5zMj9jVnvswXP55zxcewAD9ZRhQAAAAA==');

export class TestScriptLoader extends Script<TestScriptLoaderInputs, TestScriptLoaderOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
