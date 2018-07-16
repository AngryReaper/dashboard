import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    url = 'http://localhost:4000';
    constructor(private http: HttpClient) { }

    getTabs() {
      return this.http.get(`${this.url}/tabs`);
    }
}



