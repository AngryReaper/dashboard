import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Server } from './Server'
import 'devextreme/data/odata/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getServerInfo() {
    return this.http.get(`${this.url}/servers`);
  }

  getServers() {
    return new DataSource({
      store: {
        type: "odata",
        url: `${this.url}/servers`
      }
    })
  }

  updateItem(server: Server): Promise<any> {
    return this.http.put(`${this.url}/servers/${server.id}`, server, httpOptions).toPromise().catch(this.handleErrorPromise);;
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
