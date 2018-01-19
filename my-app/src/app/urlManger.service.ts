import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
 export class urlManagerService {
	constructor(private http: HttpClient){}
	httpHandler = (url, req) => {
		return this.http.post(url, req);
	}
	createSheet = (payLoad) => {
		return this.httpHandler('http://localhost:3000/api/createSheet', payLoad);
	}
	
 }