import { Component, OnInit } from '@angular/core';
import { PropertiesApiService } from 'src/app/service/properties-api.service';
import { IProperty } from './IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>=[];
  sellRent = 1;
  
  constructor(private route: ActivatedRoute,private propertiesService: PropertiesApiService){}
  
  ngOnInit(): void {
      if(this.route.snapshot.url.toString()){
        this.sellRent = 2;
      }
      this.propertiesService.getAllProperties(this.sellRent).subscribe(
        data => {
          this.properties = data;
          console.log('Properties',data);
          console.log('This is route ===>',this.route.snapshot.url.toString());
          
        }
      )
  }

}
