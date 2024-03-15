import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/property-list/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertiesApiService {

  constructor(private http: HttpClient) { }

  getAllProperties(sellRent:number): Observable<IProperty[]>{
    return this.http.get<IProperty[]>('/data/properties.json').pipe(
      map(data =>{
        const propertiesArray :Array<IProperty>=[];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === sellRent) {
            propertiesArray.push(data[id]);    
          }
        }
        return propertiesArray;
      })
    )
  }  
}
