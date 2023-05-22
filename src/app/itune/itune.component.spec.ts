/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItuneComponent } from './itune.component';

describe('ItuneComponent', () => {
  let component: ItuneComponent;
  let fixture: ComponentFixture<ItuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
