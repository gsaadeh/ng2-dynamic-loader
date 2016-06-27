import { Component, AfterViewInit, DynamicComponentLoader,
  ViewContainerRef, ViewChild, ComponentRef, Injector, ApplicationRef, OnDestroy } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { NewsListComponent } from './components/news-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('newsList', { read: ViewContainerRef }) newsComp: ViewContainerRef;

  constructor(
    private _dcl: DynamicComponentLoader,
    private _injector: Injector,
    private appRef: ApplicationRef) { }

  ngAfterViewInit() {
    // Workaround for issue with DynamicComponentLoader and Databinding
    // https://github.com/angular/angular/issues/6223
    this._dcl.loadAsRoot(HeaderComponent, '#header', this._injector)
      .then((compRef: ComponentRef<HeaderComponent>) => {
        // Include inputs to the dynamic component
        compRef.instance.text = 'Dynamically set header';

        // Manually load the component into our application
        (<any>this.appRef)._loadComponent(compRef);

        // Manually destroy the component
        compRef.onDestroy(() => {
          (<any>this.appRef)._unloadComponent(compRef);
        });

        // Return from the promise
        return compRef;

      });

    this._dcl.loadNextToLocation(NewsListComponent, this.newsComp)
      .then((compRef: ComponentRef<NewsListComponent>) => {
        // Include inputs to the dynamic component
        compRef.instance.newsItems = [
          'Dynamic news item 1',
          'Dynamic news item 2'
        ];

        // Return from the promise
        return compRef;
      });
  }
}