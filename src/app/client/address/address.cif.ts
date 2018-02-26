import {IAddress} from "./iAddress";

export class AddressCif implements IAddress{
    town: string;
    street: string;
    house: string;
    type: string;

    getCityTown(): string {
        return this.town;
    }
}