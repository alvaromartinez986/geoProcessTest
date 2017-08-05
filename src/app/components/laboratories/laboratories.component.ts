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
          this.laboratories = data;
        })

  }

  ngOnInit() {
  }


  deleteLaboratory(key$:string){
    this._firebaseService.deleteLaboratory(key$)
              .subscribe(response=>{
                if(response){
                  console.log(response);
                }else{
                  delete this.laboratories[key$];
                }
              });
  }

}
