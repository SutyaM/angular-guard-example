import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'guard-practice';

  constructor(public userService: UserService) { }

  subscription$: Subscription;
  input = this.userService.input;

  onInput(event) {
    const value = event.target.value;
    this.userService.updateInput(value);
  }

  ngOnInit() {
    this.subscription$ = this.userService.subject.subscribe(
      (value: string) => {
        this.userService.value = value;
      }, error => {
        console.log(error)
      }, () => {
        console.log("completed")
      }
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
