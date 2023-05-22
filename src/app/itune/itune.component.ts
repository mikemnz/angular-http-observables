import { Component, OnInit } from '@angular/core';
import { ItuneSearchService } from '../_services/itune-search.service';

@Component({
  selector: 'app-itune',
  templateUrl: './itune.component.html',
  styleUrls: ['./itune.component.css']
})
export class ItuneComponent implements OnInit {

  constructor(public itunes: ItuneSearchService) { }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.itunes.search(term);
  }
}
