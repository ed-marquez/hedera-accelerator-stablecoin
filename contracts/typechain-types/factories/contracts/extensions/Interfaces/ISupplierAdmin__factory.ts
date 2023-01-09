/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISupplierAdmin,
  ISupplierAdminInterface,
} from "../../../../contracts/extensions/Interfaces/ISupplierAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseSupplierAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "grantSupplierRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "grantUnlimitedSupplierRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseSupplierAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "isUnlimitedSupplierAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "resetSupplierAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "revokeSupplierRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "supplierAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISupplierAdmin__factory {
  static readonly abi = _abi;
  static createInterface(): ISupplierAdminInterface {
    return new utils.Interface(_abi) as ISupplierAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISupplierAdmin {
    return new Contract(address, _abi, signerOrProvider) as ISupplierAdmin;
  }
}