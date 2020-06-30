import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) {}

  buscarDadosNoServidor(route: string) {
    const url = environment.server_url + route;
    return this.http.get(url);
  }
}
