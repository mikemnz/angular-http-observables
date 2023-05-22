import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    get(key: string): string | null {
        return localStorage.getItem(key);
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

    getObj<T>(key: string): T | null{
        const result = this.get(key);
        return result === null ? null : JSON.parse(result) as T;
    }
}
