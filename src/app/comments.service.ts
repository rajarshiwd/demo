import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentsService {

    constructor(private http:HttpClient) {
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.

    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get('http://localhost:3000/api/food');
    }


   

    // send a POST request to the API to create a new data object
    createComment(comment) {
        let body = JSON.stringify(comment);
        console.log(body);
        return this.http.post('http://localhost:3000/api/comments', body, httpOptions);
    }

   

}
