import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

	signin(username: string, password: string) {
		return this.http.post(environment.backendUrl + "/users/signin", {
			username, password
		})
	}

	signup (formdata: any) {
		return this.http.post(environment.backendUrl + '/users/signup', formdata);
	}
}
