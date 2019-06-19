import { Component, OnInit, HostListener } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public users;

  private searchQuery;
  private resultPage = 1;
  private resultSize = 10;

  constructor(private profileService : ProfileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchQuery = this.route.snapshot.paramMap.get("searchQuery");
    this.profileService.getSearchResult(this.searchQuery, this.resultPage, this.resultSize).then(data => {
      console.log(data);
      this.resultPage++;
      this.users = data;
    }).catch(error => {
      console.log(error);
    });
  }

  @HostListener('scroll', ['$event'])
  public loadMoreResults(event){
    const top = event.target.scrollTop;
    const height = event.target.scrollHeight;
    const offset = event.target.offsetHeight;

    if (top > height - offset - 1) {
      this.profileService.getSearchResult(this.searchQuery, this.resultPage, this.resultSize).then(data => {
        this.resultPage++;
        this.users = this.users.concat(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
