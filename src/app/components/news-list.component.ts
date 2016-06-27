import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-news-list',
    templateUrl: 'news-list.component.html',
    styleUrls: ['news-list.component.css']
})
export class NewsListComponent implements OnInit {
    newsItems: string[] = [
        'News item 1',
        'News item 2',
        'News item 3'
    ];
    constructor() { }

    ngOnInit() { }
}