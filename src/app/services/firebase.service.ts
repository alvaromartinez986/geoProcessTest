import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Laboratory } from '../interfaces/laboratory.interface';
import "rxjs/Rx";

@Injectable()
export class FirebaseService {

  laboratoriesUrl:string = "https://geoprocess-cbe2d.firebaseio.com/laboratories.json";

  constructor(private http:Http) { }

  newLaboratory(laboratory:Laboratory){

    let body = JSON.stringify( laboratory );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.laboratoriesUrl, body, {headers})
            .map(res=>{
              return res.json();
            });

  }

  getLaboratories(){
    return this.http.get(this.laboratoriesUrl)
              .map(res=>res.json());
  }

}
