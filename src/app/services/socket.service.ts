import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  private socket;

  public async createWebsocket(username){
    this.socket = await new WebSocket(`ws://localhost:8080/Kwetter/kweets/${username}`);

    return this.socket;
  }

  public async postKweet(kweet){
    this.socket.send(JSON.stringify(kweet));
  }
}