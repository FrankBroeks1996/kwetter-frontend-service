import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KweetService {

  constructor(private http: HttpClient) { }

  public async getDashboard(resultPage, resultSize){
		return await new Promise((resolve, reject) =>
			this.http.get(`http://localhost:8080/kwetter-kweet-service/api/v1/kweet/getDashboard?resultPage=${resultPage}&resultSize=${resultSize}`, {
					responseType: "json",
					observe: "response",
					headers: new HttpHeaders({
						'Authorization': localStorage.getItem('token')
					})
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		);
	}

	public async getSearchResult(searchQuery, resultPage, resultSize){
		return await new Promise((resolve, reject) => {
			this.http.get(`http://localhost:8080/kwetter-kweet-service/api/v1/kweet/search/${searchQuery}?resultPage=${resultPage}&resultSize=${resultSize}`, {
				responseType: "json",
				observe: "response"
			}).subscribe((response) => {
				resolve(response.body);
			}, (error) => {
				reject(error);
			})
		});
	}
}
