import { Component, OnInit, HostListener } from '@angular/core';
import { KweetService } from 'src/app/services/kweet.service';
import { SocketService } from 'src/app/services/socket.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public kweets;

  private resultPage = 1;
  private resultSize = 10;

  constructor(private kweetService : KweetService, private socketService : SocketService, private authService : AuthService) { }

  ngOnInit() {
    this.kweetService.getDashboard(this.resultPage, this.resultSize).then(data => {
      this.resultPage++;
      this.kweets = data;
    }).catch(error => {
      console.log(error);
    });

    this.socketService.createWebsocket(this.authService.getUsernameFromToken()).then(data => {
      data.onmessage = (event) => {
        this.kweets.unshift(JSON.parse(event.data));
        console.log(event.data);
        console.log(this.kweets);
        
      }
    });
  }

  @HostListener('scroll', ['$event'])
  public loadMoreKweets(event){
    const top = event.target.scrollTop;
    const height = event.target.scrollHeight;
    const offset = event.target.offsetHeight;

    if (top > height - offset - 1) {
      this.kweetService.getDashboard(this.resultPage, this.resultSize).then(data => {
        this.resultPage++;
        this.kweets = this.kweets.concat(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

};
