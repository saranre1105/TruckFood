import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {

  trucks: Object[];
  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getTrucks();
  };

  getTrucks(){
    this.trucks = []

    let allTrucks = this._httpService.allTrucks();
    allTrucks.subscribe(data =>{
      for (var i in data){
        this.trucks.push(data[i])
      }
      console.log(this.trucks);
      return this.trucks;
    });
  };

  destroy(id){
    let destroy = this._httpService.removeTruck(id);
    destroy.subscribe(data => {
      console.log(data);
      this.getTrucks();
    });
  }

}