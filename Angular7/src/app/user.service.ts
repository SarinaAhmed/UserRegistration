import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formModel: any;
  subscribe;
  register() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
