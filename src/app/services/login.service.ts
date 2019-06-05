import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) {}

	public async login(username, password){
		var requestData = {
			username: username,
			password: password,
		};

		return await new Promise((resolve, reject) =>
			this.http.post("http://localhost:8080/Kwetter/api/v1/authentication/login", requestData, {
					responseType: "json",
					observe: "response"
			}).subscribe((response) => {
				localStorage.setItem('token', response.headers.get("Authorization"));
				resolve();
			}, (error) => {
				reject(error);
			})
		);
	}
}
