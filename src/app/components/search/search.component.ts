import { Component, OnInit, HostListener } from '@angular/core';
import { KweetService } from 'src/app/services/kweet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private kweets;

  private searchQuery;
  private resultPage = 1;
  private resultSize = 10;

  constructor(private kweetService: KweetService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchQuery = this.route.snapshot.paramMap.get("searchQuery");
    this.kweetService.getSearchResult(this.searchQuery, this.resultPage, this.resultSize).then(data => {
      console.log(data);
      this.resultPage++;
      this.kweets = data;
    }).catch(error => {
      console.log(error);
    });
  }

  @HostListener('scroll', ['$event'])
  private loadMoreResults(event){
    const top = event.target.scrollTop;
    const height = event.target.scrollHeight;
    const offset = event.target.offsetHeight;

    if (top > height - offset - 1) {
      this.kweetService.getSearchResult(this.searchQuery, this.resultPage, this.resultSize).then(data => {
        this.resultPage++;
        this.kweets = this.kweets.concat(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

}
