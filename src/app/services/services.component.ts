import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less'],
  providers: [ServicesService]
})
export class ServicesComponent implements OnInit {

  servicesSource: DataSource;

  constructor(private service: ServicesService) {
    this.servicesSource = service.getDataSource();
  }

  ngOnInit() {
  }

}
