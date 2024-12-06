import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserServiceService  } from '../../services/user-service.service';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-zanbnb',
  templateUrl: './zanbnb.component.html',
  styleUrl: './zanbnb.component.css'
})
export class ZanbnbComponent implements OnInit{ 
  

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // constructor(private userServiceService: UserServiceService) {}

    userRole: string = '';
    constructor(private userServiceService: UserServiceService,
      private authService: AuthService,
      private router:Router,
    ) {}

    ngOnInit(): void {
      // Retrieve the logged-in user from session storage
      const storedUser = sessionStorage.getItem('logged user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.userRole = user.roles[0]; 
      }
    }

  hasRole(role: string): boolean {
    return this.authService.hasRole(role);
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    if ('caches' in window) {
      caches.keys().then(function (names) {
        for (let name of names) caches.delete(name);
      });
    }
    this.router.navigate(['/login'])
    }
}
   

  
