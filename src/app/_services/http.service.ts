
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class HttpService {
    constructor(
        @Inject(HttpClient) private httpClient: HttpClient
    ) { }

    get(url: string, params?: any): Observable<any> {
        return this.httpClient.get(url, this.GetHttpOptions(params));
    }

    getStrongTyped(url: string): Observable<any> {
        return this.httpClient.get(url, this.GetHttpOptions())
        .pipe(map((res: any) => {
            return res.json().results.map((item: any) => {
            });
        }));
    }

    post(url: string, model: any, includeFullResponse?: boolean): Observable<any> {
        return this.httpClient.post(url, model, this.GetHttpOptions()).pipe(
            map((resp: any) => {
                return includeFullResponse ? resp : resp.body;
            })
        );
    }

    put(url: string, id: number, model: any): Observable<any> {
        const body = JSON.stringify(model);

        return this.httpClient.put(`${url}${id}`, body, this.GetHttpOptions());
    }

    delete(url: string, id: number): Observable<any> {
        return this.httpClient.delete(`${url}${id}`, this.GetHttpOptions());
    }

    private GetHttpOptions(params?: any): any {
        return {
            params,
            observe: 'response' as 'response'
        };
    }

}
