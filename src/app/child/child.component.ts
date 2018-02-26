import {Component, Input} from '@angular/core';
import {IAddress} from "../client/address/iAddress";
import {IClientName} from "../client/IClientName";

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    @Input() childClientDb: IClientName;
    @Input() childClientCif: IClientName;
    @Input() childClientDbAddr: IAddress;
    @Input() childClientCifAddr: IAddress;
}