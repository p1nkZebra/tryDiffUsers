import {IAddress} from "./iAddress";

export class AddressDb implements IAddress {
    city: string;
    street: string;
    house: string;
    type: string;

    getCityTown(): string {
        return this.city;
    }
}