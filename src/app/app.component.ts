import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'zanbnb';

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
   
      this.detectDevTools();
    }
  }

  detectDevTools(): void {
    let threshold = 160; 
 
    // const logout = () => {
    //   sessionStorage.clear(); 
    //   this.router.navigate(['/login']); 
    // };

    setInterval(() => {
      if (
        window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold
      ) {
        // logout(); 
        sessionStorage.clear(); 
        localStorage.clear();
      }
    }, 1000); 
  }
}
