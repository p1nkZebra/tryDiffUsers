import {IAddress} from "./address/iAddress";

export interface IClientAddresses {
    getLegalAddress(): IAddress;
    getCurrentAddress(): IAddress;
}