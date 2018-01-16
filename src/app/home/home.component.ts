import { Component, OnInit, Input } from '@angular/core';
import {trigger,state,style,animate,transition  } from '@angular/animations';
// import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./style.css']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
}
