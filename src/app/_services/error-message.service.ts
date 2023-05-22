import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export class ErrorMessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

  onMessage(): Observable<any> {
      return this.subject.asObservable();
  }
  }
