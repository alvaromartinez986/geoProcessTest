import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Laboratory } from '../interfaces/laboratory.interface';
import "rxjs/Rx";

@Injectable()
export class FirebaseService {

  laboratoriesUrl: string = "https://geoprocess-cbe2d.firebaseio.com/laboratories.json";
  laboratoryUrl: string = "https://geoprocess-cbe2d.firebaseio.com/laboratories/";


  constructor(private http: Http) { }

  newLaboratory(laboratory: Laboratory) {

    let body = JSON.stringify(laboratory);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.laboratoriesUrl, body, { headers })
      .map(res => {
        return res.json();
      });

  }

  updateLaboratory(laboratory: Laboratory, key$: string) {

    let body = JSON.stringify(laboratory);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.laboratoryUrl}${key$}.json`;

    return this.http.put(url, body, { headers })
      .map(res => {
        return res.json();
      });

  }

  deleteLaboratory(key$:string) {
    let url = `${this.laboratoryUrl}${key$}.json`;
    return this.http.delete(url)
      .map(res => res.json());
  }

  getLaboratories() {
    return this.http.get(this.laboratoriesUrl)
      .map(res => res.json());
  }

  getLaboratory(key$:string) {
    let url = `${this.laboratoryUrl}${key$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

}
