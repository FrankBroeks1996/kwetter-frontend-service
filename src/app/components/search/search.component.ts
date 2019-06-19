import { Component, OnInit, HostListener } from '@angular/core';
import { KweetService } from 'src/app/services/kweet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public navIndex = 0;

  constructor(private kweetService: KweetService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public setNavIndex(index){
    this.navIndex = index;
    console.log(index);
  }
}