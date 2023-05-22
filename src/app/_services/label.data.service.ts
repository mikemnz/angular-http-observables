import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { LocalStorageService } from './localstorage.service';
@Injectable({ providedIn: 'root'})
export class LabelDataService {
    constructor(
        private httpService: HttpService,
        private localStorageService: LocalStorageService) { }

    getAndPersistLabels<T>(url: string, key: string): Observable<T> | null{
        if (!this.localStorageService.get(key)) {
            return this.httpService.get(url).pipe(
                map(
                    (response: HttpResponse<any>) => {
                        // object of all labels, only strings can be stored with localStorage,
                        // but you can use JSON.stringify to store more complex objects and JSON.parse to read them
                        this.localStorageService.set(key, JSON.stringify(response.body));
                        return response.body as T;
                    }
                )
            );
        } else {
            const labels = this.getLabels<T>(key);
            return labels == null ? null : of(labels);
        }
    }

    getLabels<T>(key: string): T | null{
        return this.localStorageService.getObj<T>(key);
    }

    removeLabels(key: string): void {
        return this.localStorageService.remove(key);
    }
}
