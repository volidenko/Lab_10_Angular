import { from, Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { User } from './user';
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable()
export class HttpMapService{
    constructor(private http: HttpClient){}
    getData ():Observable<User[]>
    {
        return this.http.get("assets/users.json").pipe(map(data=>{
            let users = data["userList"];
            return users.map((user:any)=>{
                return {name: user["userName"], age: user["userAge"]};
            })
        }
        ));
    }
}