import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  subject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  input = this.subject.asObservable();
  value: string;

  constructor() { }

  updateInput(value: string) {
    this.subject.next(value);
  }
}
