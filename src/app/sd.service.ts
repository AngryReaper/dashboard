import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SdService {

  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getSD() {
    return this.http.get(`${this.url}/sd`);
  }
}
