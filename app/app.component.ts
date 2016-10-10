import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'ng2-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  
  constructor(public authService: AuthService, public router: Router) {
  }
  
  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
         let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
         this.router.navigate([redirect]);
        }
      });
    }
    
  logout() {
      this.authService.logout();
      this.router.navigate(['/home']);
    }
}
