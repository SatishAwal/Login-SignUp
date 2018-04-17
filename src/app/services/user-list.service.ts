import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import * as jwt from "jsonwebtoken";
import { HttpClient } from "../services/index";

@Injectable()
export class UserListService {
  private databaseUrl = "http://localhost:3000/users"
  public token: string;
  constructor(private httpClient: HttpClient) { }
  
  getUserList() {
    return this.httpClient.get(this.databaseUrl).map((response: Response) =>
      response.json()
    )
  }
}