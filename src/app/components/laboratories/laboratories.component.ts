import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {

  laboratories:any=[];

  constructor(private _firebaseService:FirebaseService) {

    this._firebaseService.getLaboratories()
        .subscribe(data =>{

          for(let key$ in data){
            let h = data[key$];
            h.key$ = key$;
            this.laboratories.push(data[key$]);
          }
        })

  }

  ngOnInit() {
  }

}
