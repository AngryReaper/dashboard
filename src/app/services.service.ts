import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  url = 'http://localhost:4000';
  
  constructor() { }

  getDataSource() {
    return new DataSource({
      store: {
        type: "odata",
        url: `${this.url}/services`
      }
    }) 
  }
}
