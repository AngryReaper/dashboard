import { Component, enableProdMode } from '@angular/core';
import { Tab } from './Tab';
import { AppService } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppService]
})

export class AppComponent {
  title = 'Dashboard';
  tabs: Tab[];


  constructor(private appService: AppService) { }

  ngOnInit() {
    this
      .appService
      .getTabs()
      .subscribe((data: Tab[]) => {
        this.tabs = data;
      });

  }
}