import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { HttpService } from "../http.service";
import { HttpMapService } from "../http-map.service";

@Component({
  selector: 'app-use-http-example',
  templateUrl: './use-http-example.component.html',
  styleUrls: ['./use-http-example.component.css'],
  providers: [HttpService]
})
export class UseHttpExampleComponent implements OnInit {
  users: User[];
  constructor(private httpServise: HttpService) { }

  ngOnInit(): void {
    this.httpServise.getData().subscribe(data => {
      this.users = data["userList"];
    })
  }
}