import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../_models/product';
import { DataService } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  products = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit() {

    // this.dataService.sendGetRequest()
    //   .pipe(takeUntil(this.destroy$))
    //     .subscribe((res: HttpResponse<any>)=>{
    //     console.log(res);
    //     this.products = res.body;
    // });

    this.renderer.listen(window, 'resize', (event) => {
      // Do something with 'event'
      console.log(window.innerWidth);
   });

    this.dataService.sendGetTypedRequest()
      .pipe(takeUntil(this.destroy$))
        .subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
    })
  }

  onEvent(event) { 
    //do something ... 
    console.log('herer');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  public firstPage() {
    this.products = [];
    this.dataService.sendGetRequestToUrl(this.dataService.first)
      .pipe(takeUntil(this.destroy$))
        .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
    })
  }
  public previousPage() {

    if (this.dataService.prev !== undefined && this.dataService.prev !== '') {
      this.products = [];
      this.dataService.sendGetRequestToUrl(this.dataService.prev)
        .pipe(takeUntil(this.destroy$))
          .subscribe((res: HttpResponse<any>) => {
          console.log(res);
          this.products = res.body;
      })
    }

  }
  public nextPage() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.products = [];
      this.dataService.sendGetRequestToUrl(this.dataService.next)
        .pipe(takeUntil(this.destroy$))
          .subscribe((res: HttpResponse<any>) => {
          console.log(res);
          this.products = res.body;
      })
    }
  }
  public lastPage() {
    this.products = [];
    this.dataService.sendGetRequestToUrl(this.dataService.last)
      .pipe(takeUntil(this.destroy$))
        .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
    })
  }

}