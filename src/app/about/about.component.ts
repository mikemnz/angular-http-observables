import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loading: boolean = false;
  results: [];
  constructor(public itunes: SearchService) {}

  ngOnInit(): void {
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
  }
}
