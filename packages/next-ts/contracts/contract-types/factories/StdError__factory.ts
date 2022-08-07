/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StdError, StdErrorInterface } from "../StdError";

const _abi = [
  {
    inputs: [],
    name: "arithmeticError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assertionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "divisionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "encodeStorageError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enumConversionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "indexOOBError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowLevelError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "memOverflowError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "popError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroVarError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61027761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100a85760003560e01c8063ac3d92c611610070578063ac3d92c6146100eb578063b22dc54d14610101578063b67689da14610109578063d160e4de14610111578063fa784a441461011957600080fd5b806305ee8612146100ad57806310332977146100cb5780631de45560146100d35780638995290f146100db578063986c5f68146100e3575b600080fd5b6100b5610121565b6040516100c291906101ec565b60405180910390f35b6100b561015c565b6100b561016e565b6100b5610180565b6100b5610192565b6100b56040518060200160405280600081525081565b6100b56101a4565b6100b56101b6565b6100b56101c8565b6100b56101da565b604051603260248201526044015b60408051601f198184030181529190526020810180516001600160e01b0316634e487b7160e01b17905281565b6040516001602482015260440161012f565b6040516021602482015260440161012f565b6040516011602482015260440161012f565b6040516041602482015260440161012f565b6040516031602482015260440161012f565b6040516051602482015260440161012f565b6040516022602482015260440161012f565b6040516012602482015260440161012f565b600060208083528351808285015260005b81811015610219578581018301518582016040015282016101fd565b8181111561022b576000604083870101525b50601f01601f191692909201604001939250505056fea26469706673582212202f6103492d96b14cf234c4be0e660739cd9af4c2384bae1b5b378b6b49358be164736f6c634300080f0033";

type StdErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError__factory extends ContractFactory {
  constructor(...args: StdErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StdError";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StdError> {
    return super.deploy(overrides || {}) as Promise<StdError>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StdError {
    return super.attach(address) as StdError;
  }
  connect(signer: Signer): StdError__factory {
    return super.connect(signer) as StdError__factory;
  }
  static readonly contractName: "StdError";
  public readonly contractName: "StdError";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdErrorInterface {
    return new utils.Interface(_abi) as StdErrorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdError {
    return new Contract(address, _abi, signerOrProvider) as StdError;
  }
}
