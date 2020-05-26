import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  subject: BehaviorSubject<string> = null;

  constructor() {

   }
}
