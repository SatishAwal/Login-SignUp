import { Injectable } from '@angular/core';
import { Http,Headers, Response} from '@angular/http'
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthenticationService {
  private databaseUrl = "http://localhost:3000/users"
  public token:string;
  constructor(private http:Http) { }
login(user){
  return this.http.post(`${this.databaseUrl}/login`,user).map((response:Response)=>{
    let token=response.json() && response.json().token;
    if(token){
      this.token=token;
      //Returns the decoded payload without verifying if the signature is valid.
      var decoded = jwt.decode(token, { complete: true });
      let userId = decoded.payload.id;
      //console.log(decoded.payload);
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('loggedInUser', JSON.stringify({ token: token, user: decoded.payload }));
      //console.log(localStorage.getItem("loggedInUser"));
      return response.json();
    }
  })
}

}
