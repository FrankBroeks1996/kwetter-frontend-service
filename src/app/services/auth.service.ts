import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthorised(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  public getUsernameFromToken () {
    var base64Url = localStorage.getItem("token").split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var data = JSON.parse(window.atob(base64));
    console.log(data);
    return data.sub;
  }

  public logout(){
    localStorage.removeItem("token");
  }

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
  
  public async register(username, password){
    var requestData = {
      username: username,
      password: password,
    };

    return await new Promise((resolve, reject) => {
      this.http.post("http://localhost:8080/Kwetter/api/v1/authentication/register", requestData, {
        responseType: "json",
        observe: "response",        
      }).subscribe((response) => {
        localStorage.setItem('token', response.headers.get("Authorization"));
        resolve();
      }, (error) => {
        reject(error);
      })
    })
  }
}
