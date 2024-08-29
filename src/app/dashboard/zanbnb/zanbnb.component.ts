import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserServiceService  } from '../../services/user-service.service';
import { AuthService } from '../../services/Auth/auth.service';



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

    userRole: any;
    constructor(private userServiceService: UserServiceService,
      private authService: AuthService
    ) {}

    ngOnInit(): void {
      
      // Retrieve the role value from session storage and parse it
      const role = sessionStorage.getItem('userRole');
      if (role !== null) {
        this.userRole = JSON.parse(role);
      } else {
        this.userRole = {}; // Handle the null case as needed
      }
      console.log('User role:', this.userRole);
    }

  hasRole(role: string): boolean {
    return this.authService.hasRole(role);
  }

   
    }
  
   

  
