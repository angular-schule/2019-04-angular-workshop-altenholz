import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: ActivatedRoute) {
    this.handleAuth();
  }

  private settings = {
    authServer: 'https://angular-schule.eu.auth0.com',
    clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
    redirectUri: 'http://localhost:4200',
    audience: 'https://api.angular.schule'
  };

  authorize() {
    const url = `${this.settings.authServer}/authorize?` +
      'response_type=token&' +
      `redirect_uri=${this.settings.redirectUri}&` +
      `client_id=${this.settings.clientId}&` +
      `audience=${this.settings.audience}`;

    location.href = url;
  }

  handleAuth() {
    this.route.fragment.pipe(
      filter(e => !!e),
      map(fragment => new URLSearchParams(fragment).get('access_token'))
    ).subscribe(token => {
      sessionStorage.setItem('access_token', token);
      window.location.hash = ''; // Token aus der URL entfernen
    });
  }

}
