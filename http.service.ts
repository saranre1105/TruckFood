import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  

  allTrucks(){
    return this._http.get('/api/trucks');
  };

  oneTruck(id){
    return this._http.get('/api/trucks/'+id);
  };

  newTruck(data){
    return this._http.post('/api/trucks/new', data);
  };

  updateTruck(data){
    return this._http.post('/api/trucks/edit/', data);
  }

  removeTruck(id){
    return this._http.get('/api/trucks/destroy/'+id)
  }

}