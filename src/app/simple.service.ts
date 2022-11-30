import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  readonly url = 'http://localhost:4200'
}
