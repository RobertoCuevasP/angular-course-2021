import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  message: string = '';
  constructor() {}

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
  }
}
