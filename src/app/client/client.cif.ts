import {AddressCif} from "./address/address.cif";
import {IClientAddresses} from "./iClientAddresses";
import {IAddress} from "./address/iAddress";
import {IClientName} from "./IClientName";

export class ClientCif implements IClientAddresses, IClientName{
    name: string;
    legalAddress: AddressCif;
    currentAddress: AddressCif;


    getCurrentAddress(): IAddress {
        return this.currentAddress;
    }

    getLegalAddress(): IAddress {
        return this.legalAddress;
    }

    getClientName(): string {
        return this.name;
    }


}