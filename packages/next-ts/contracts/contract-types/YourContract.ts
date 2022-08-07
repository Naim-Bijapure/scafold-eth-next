/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface YourContractInterface extends utils.Interface {
  contractName: "YourContract";
  functions: {
    "arr(uint256)": FunctionFragment;
    "getArray(string)": FunctionFragment;
    "mappedData(address)": FunctionFragment;
    "newPuprpose()": FunctionFragment;
    "purpose()": FunctionFragment;
    "setAddresses(address,address,address)": FunctionFragment;
    "setEnumStatus(uint8,string)": FunctionFragment;
    "setMappings(address,string)": FunctionFragment;
    "setNewPurpose(string,uint256,uint256)": FunctionFragment;
    "setPayableFunction(string)": FunctionFragment;
    "setPupshArray(uint256)": FunctionFragment;
    "setPureFunction(string)": FunctionFragment;
    "setPurpose(string)": FunctionFragment;
    "status()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "arr", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "getArray", values: [string]): string;
  encodeFunctionData(functionFragment: "mappedData", values: [string]): string;
  encodeFunctionData(
    functionFragment: "newPuprpose",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "purpose", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAddresses",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnumStatus",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMappings",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setNewPurpose",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPayableFunction",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPupshArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPureFunction",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setPurpose", values: [string]): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;

  decodeFunctionResult(functionFragment: "arr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getArray", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mappedData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newPuprpose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "purpose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEnumStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMappings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewPurpose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPayableFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPupshArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPureFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPurpose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;

  events: {
    "SetPurpose(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetPurpose"): EventFragment;
}

export type SetPurposeEvent = TypedEvent<
  [string, string],
  { sender: string; purpose: string }
>;

export type SetPurposeEventFilter = TypedEventFilter<SetPurposeEvent>;

export interface YourContract extends BaseContract {
  contractName: "YourContract";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YourContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    getArray(data: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    mappedData(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    newPuprpose(overrides?: CallOverrides): Promise<[string]>;

    purpose(overrides?: CallOverrides): Promise<[string]>;

    setAddresses(
      ownerAddress: string,
      yourAddress: string,
      diffAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEnumStatus(
      _status: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMappings(
      _address: string,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNewPurpose(
      _newPurpose: string,
      data2: BigNumberish,
      data3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPayableFunction(
      data: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPupshArray(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPureFunction(data: string, overrides?: CallOverrides): Promise<[string]>;

    setPurpose(
      _newPurpose: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    status(overrides?: CallOverrides): Promise<[number]>;
  };

  arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getArray(data: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  mappedData(arg0: string, overrides?: CallOverrides): Promise<string>;

  newPuprpose(overrides?: CallOverrides): Promise<string>;

  purpose(overrides?: CallOverrides): Promise<string>;

  setAddresses(
    ownerAddress: string,
    yourAddress: string,
    diffAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEnumStatus(
    _status: BigNumberish,
    data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMappings(
    _address: string,
    data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNewPurpose(
    _newPurpose: string,
    data2: BigNumberish,
    data3: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPayableFunction(
    data: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPupshArray(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPureFunction(data: string, overrides?: CallOverrides): Promise<string>;

  setPurpose(
    _newPurpose: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  status(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getArray(data: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    mappedData(arg0: string, overrides?: CallOverrides): Promise<string>;

    newPuprpose(overrides?: CallOverrides): Promise<string>;

    purpose(overrides?: CallOverrides): Promise<string>;

    setAddresses(
      ownerAddress: string,
      yourAddress: string,
      diffAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setEnumStatus(
      _status: BigNumberish,
      data: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setMappings(
      _address: string,
      data: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setNewPurpose(
      _newPurpose: string,
      data2: BigNumberish,
      data3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPayableFunction(
      data: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setPupshArray(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPureFunction(data: string, overrides?: CallOverrides): Promise<string>;

    setPurpose(_newPurpose: string, overrides?: CallOverrides): Promise<void>;

    status(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "SetPurpose(address,string)"(
      sender?: null,
      purpose?: null
    ): SetPurposeEventFilter;
    SetPurpose(sender?: null, purpose?: null): SetPurposeEventFilter;
  };

  estimateGas: {
    arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getArray(data: string, overrides?: CallOverrides): Promise<BigNumber>;

    mappedData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    newPuprpose(overrides?: CallOverrides): Promise<BigNumber>;

    purpose(overrides?: CallOverrides): Promise<BigNumber>;

    setAddresses(
      ownerAddress: string,
      yourAddress: string,
      diffAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEnumStatus(
      _status: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMappings(
      _address: string,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNewPurpose(
      _newPurpose: string,
      data2: BigNumberish,
      data3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPayableFunction(
      data: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPupshArray(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPureFunction(
      data: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPurpose(
      _newPurpose: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    status(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    arr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArray(
      data: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mappedData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newPuprpose(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purpose(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAddresses(
      ownerAddress: string,
      yourAddress: string,
      diffAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEnumStatus(
      _status: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMappings(
      _address: string,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNewPurpose(
      _newPurpose: string,
      data2: BigNumberish,
      data3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPayableFunction(
      data: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPupshArray(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPureFunction(
      data: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPurpose(
      _newPurpose: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    status(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
