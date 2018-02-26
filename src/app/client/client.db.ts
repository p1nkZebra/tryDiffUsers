import {AddressDb} from "./address/address.db";
import {IAddress} from "./address/iAddress";
import {IClientAddresses} from "./iClientAddresses";
import {IClientName} from "./IClientName";

export class ClientDb implements IClientAddresses, IClientName {
    id: number;
    name: string;
    addresses: AddressDb[] | null = [];

    getCurrentAddress(): IAddress {
        if (this.addresses) {
            for (let addr of this.addresses) {
                if (addr.type === "current") {
                    return addr;
                }

            }
        }
        return new AddressDb();
    }

    getLegalAddress(): IAddress {
        if (this.addresses) {
            for (let addr of this.addresses) {
                if (addr.type === "legal") {
                    return addr;
                }

            }
        }
        return new AddressDb();
    }

    getClientName(): string {
        return this.name;
    }
}