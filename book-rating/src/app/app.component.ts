import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {
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
}
