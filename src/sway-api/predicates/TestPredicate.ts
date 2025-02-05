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
  decompressBytecode,
  InputValue,
  Predicate,
  PredicateParams,
  Provider,
} from 'fuels';

export type TestPredicateConfigurables = Partial<{
    MAIN_ADDRESS: string;
    BURNER_ADDRESS: string;
}>;

export type TestPredicateInputs = [signature: string, message: string];

export type TestPredicateParameters = Omit<
  PredicateParams<TestPredicateInputs, TestPredicateConfigurables>,
  'abi' | 'bytecode'
>;

const abi = {
  "programType": "predicate",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "b256",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "struct std::b512::B512",
      "concreteTypeId": "745e252e80bec590efc3999ae943f07ccea4d5b45b00bb6575499b64abdd3322",
      "metadataTypeId": 1
    }
  ],
  "metadataTypes": [
    {
      "type": "[_; 2]",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "__array_element",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::b512::B512",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "signature",
          "concreteTypeId": "745e252e80bec590efc3999ae943f07ccea4d5b45b00bb6575499b64abdd3322"
        },
        {
          "name": "message",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ],
      "name": "main",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "MAIN_ADDRESS",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
      "offset": 4144
    },
    {
      "name": "BURNER_ADDRESS",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
      "offset": 4112
    }
  ]
};

const bytecode = decompressBytecode('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');

export class TestPredicate extends Predicate<
  TestPredicateInputs,
  TestPredicateConfigurables
> {
  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(params: TestPredicateParameters) {
    super({ abi, bytecode, ...params });
  }
}
