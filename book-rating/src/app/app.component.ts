import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(private auth: AuthService, @Inject(LOCALE_ID) private locale: string) {

    console.log(this.locale);

    // ----------------
    // setTimeout(() => this.title = 'HALLO', 2000);


    function producer(obs) {
      obs.next(1);
      obs.next(2);
      obs.complete(3);
      obs.next(3);

      setTimeout(() => obs.next(4), 2000);
    }


    const observer = {
      next: value => console.log(value),
      // error: err => console.log('ERROR', err),
      // complete: () => console.log('Complete')
    }

    // producer(observer);
    // producer(observer);


    const myObservable = new Observable(producer);
    myObservable.subscribe(observer);


  }


  login() {
    this.auth.authorize();
  }
}
