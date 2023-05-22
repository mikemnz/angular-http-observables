import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CountryService } from './shared/county.service';
import { Country } from './shared/country';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-http-observables';
  @Output() newWidthOut: EventEmitter<number> = new EventEmitter<300>();
  
  constructor() { }


  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.newWidthOut.emit(event.target.innerWidth);
    } 

}
