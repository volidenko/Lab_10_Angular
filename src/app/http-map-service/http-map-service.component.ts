import { Component, OnInit } from '@angular/core';
import {HttpMapService} from "../http-map.service"
import { User } from '../user';


@Component({
  selector: 'app-http-map-service',
  templateUrl: './http-map-service.component.html',
  styleUrls: ['./http-map-service.component.css'],
  providers: [HttpMapService]
})
export class HttpMapServiceComponent implements OnInit {

  constructor(private httpService:HttpMapService ) { }
  users: User[]
  ngOnInit(): void {
    this.httpService.getData().subscribe(data=>{
      this.users = data;
    })
  }


 
}
