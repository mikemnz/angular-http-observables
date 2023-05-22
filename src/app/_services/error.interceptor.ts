import { Injectable } from '@angular/core';
import { HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorLogService } from './error-log.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private errorLogService: ErrorLogService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            return next.handle(req).pipe(
                catchError(error => {
                    let model = {
                        Name: error.name,
                        StatusText: error.statusText,
                        Url: error.url,
                        Message: (error.error instanceof ErrorEvent) ? error.error.message : error.message,
                        ErrorType: error.error.type
                    };
                    if (error.statusText !== 'Unknown Error') {
                        this.errorLogService.LogError(model);
                    }
                    if (error.status === 401) {
                        return throwError(error.statusText);
                    }
                    if (error instanceof HttpErrorResponse)
                    {
                        const applicationError = error.headers.get('Application-Error');
                        if (applicationError) {
                            return throwError(applicationError);
                        }
                        const serverError = error.error;
                        let modalStateErrors = '';
                        if (serverError.errors && typeof serverError.errors === 'object')
                        {
                            for (const key in serverError.errors) {
                                if (serverError.errors[key]) {
                                    modalStateErrors += serverError.errors[key] + '\n';
                                }
                            }
                        }
                        return throwError(modalStateErrors || serverError || 'Server Error');
                    }
                }
            )
        );
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};