import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Etl } from './Etl';
import 'devextreme/data/odata/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class EtlService {

  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  updateEtl(etl: Etl): Promise<any> {
    return this.http.put(`${this.url}/etl/${etl.id}`, etl, httpOptions).toPromise().catch(this.handleErrorPromise);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  getDataSource() {
    return new DataSource({
      store: {
        type: "odata",
        url: `${this.url}/etl`
      }
    });
  }

}
