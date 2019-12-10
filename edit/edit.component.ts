import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { TrucksComponent } from '../trucks/trucks.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  update: FormGroup;
  truck: Object;
  id: any;
  constructor(private _httpService: HttpService, private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _parent: TrucksComponent) {
    this._route.paramMap.subscribe(data => {
      this.id = data.get('id');
      this.getTruck(data.get('id'));
    })
    this.update = fb.group({
      title: '',
      price: '',
      url: '',
      date:'',
      _id: ''
    })
  }

  ngOnInit() {
    this.truck = {
      title: '',
      price: '',
      url: '',
      date:'',
      _id: ''
    }
  }

  getTruck(id){
    let truck = this._httpService.oneTruck(id);
    truck.subscribe(data => {
      this.truck = data;
      console.log(this.truck); 
      return this.truck;
    });
  }

  updateTruck(data){
    console.log(data);
    let updateTruck = this._httpService.updateTruck(data);
    updateTruck.subscribe(data => {
      console.log(data);
      this._parent.ngOnInit();
    });
  }

}