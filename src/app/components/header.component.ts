import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
    text: string = 'Application Header';
    constructor() {}

    ngOnInit() { }
}