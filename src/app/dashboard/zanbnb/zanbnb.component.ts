import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserServiceService } from '../../services/user-service.service';



@Component({
  selector: 'app-zanbnb',
  templateUrl: './zanbnb.component.html',
  styleUrl: './zanbnb.component.css'
})
export class ZanbnbComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // constructor(private userServiceService: UserServiceService) {}

   
}
