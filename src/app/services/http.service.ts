import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
    //token: string='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImZpcnN0TmFtZSI6IlJhaiIsImxhc3ROYW1lIjoiTWFoYXJqYW4iLCJlbWFpbCI6InJhakBub3ZlbHR5dGVjaG5vbG9neS5jb20iLCJ1c2VyUm9sZSI6IkFkbWluIiwiaWF0IjoxNTExNDIxNjE3LCJleHAiOjE1MTQwMTM2MTd9.V6E-9ZhBNFFLpy9xZWLRj0og6xHoWXZ1yWNoGIiDumg';
    constructor(private http: Http) { }

    createHeader(headers: Headers) {
        var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            
            //headers.append('Content-Type', 'application/json');
           // headers.append('Accept', 'application/json');
            
            var token = loggedInUser.token;
           // console.log("Token:", token)
            let tokenValue='bearer ' + token;
           // console.log("Token value:",tokenValue)
            
            headers.append('Authorization',tokenValue)
            
            //headers.append('x-access-token', token);
        }
    }

    get(url) {
        let headers = new Headers();
        this.createHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

    put(url, data) {
        let headers = new Headers();
        this.createHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    }

    delete(url) {
        let headers = new Headers();
        this.createHeader(headers);
        return this.http.delete(url,{
            headers: headers
        });
    }
}