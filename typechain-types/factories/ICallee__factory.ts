/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICallee, ICalleeInterface } from "../ICallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Callee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICallee__factory {
  static readonly abi = _abi;
  static createInterface(): ICalleeInterface {
    return new utils.Interface(_abi) as ICalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICallee {
    return new Contract(address, _abi, signerOrProvider) as ICallee;
  }
}
