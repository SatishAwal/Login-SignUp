import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import * as jwt from "jsonwebtoken";
import { HttpClient } from "../services/http.service"


@Injectable()
export class UserListService {
  private databaseUrl = "http://localhost:3000/users"
  public token: string;
  constructor(private httpClient: HttpClient,private http:Http
  ) { }
  
  getUserList() {
    //console.log(" get Services userList:")
        return this.httpClient.get(this.databaseUrl).map((response: Response) =>
      response.json()
    )
  }

  delet(userId){
    console.log("Delete userList:", userId)
    return this.httpClient.delete(`${this.databaseUrl}/${userId}`).map((response:Response)=>response.json())

  }
}