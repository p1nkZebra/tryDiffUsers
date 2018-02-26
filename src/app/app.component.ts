import { Component } from '@angular/core';
import {ClientDb} from "./client/client.db";
import {AddressDb} from "./client/address/address.db";
import {ClientCif} from "./client/client.cif";
import {AddressCif} from "./client/address/address.cif";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    parentClientDb: ClientDb;
    parentClientCif: ClientCif;

    constructor() {
        let tmpClientDb = new ClientDb();
        tmpClientDb.name = "Alice";
        tmpClientDb.id = 1;

        let addr = new AddressDb();
        addr.type = "legal";
        addr.city = "London";
        addr.street = "BakerStreet";
        addr.house = "12b";

        let addr2 = new AddressDb();
        addr2.type = "current";
        addr2.city = "Moscow";
        addr2.street = "Solne4naya";
        addr2.house = "45";

        tmpClientDb.addresses.push(addr,addr2);

        this.parentClientDb = tmpClientDb;


        let tmpClientCif = new ClientCif();
        tmpClientCif.name = "Mike";

        let addr3 = new AddressCif();
        addr3.type = "legal";
        addr3.town = "Paris";
        addr3.street = "Eiphel";
        addr3.house = "56";

        let addr4 = new AddressCif();
        addr4.type = "current";
        addr4.town = "Dubai";
        addr4.street = "SolarCube";
        addr4.house = "11";

        tmpClientCif.currentAddress = addr4;
        tmpClientCif.legalAddress = addr3;

        this.parentClientCif = tmpClientCif;
    }


}