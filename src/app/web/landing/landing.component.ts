import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  selectedContent: string | null = null;

  selectContent(content: string) {
    this.selectedContent = content;
  }

  showShoppingContent = false;

  toggleShoppingContent() {
    this.showShoppingContent = !this.showShoppingContent;
  }

  showRentContent = false;

  toggleRentContent() {
    this.showRentContent = !this.showRentContent;
  }

  showLocationContent = false;

  toggleLocationContent() {
    this.showLocationContent = !this.showLocationContent;
  }

  showTripsContent = false;

  toggleTripsContent() {
    this.showTripsContent = !this.showTripsContent;
  }

  showSpeciesContent = false;

  toggleSpeciesContent() {
    this.showSpeciesContent = !this.showSpeciesContent;
  }

  showSportContent = false;

  toggleSportContent() {
    this.showSportContent = !this.showSportContent;
  }

  showHotelsContent = false;

  toggleHotelsContent() {
    this.showHotelsContent = !this.showHotelsContent;
  }

  showRestaurantsContent = false;

  toggleRestaurantsContent() {
    this.showRestaurantsContent = !this.showRestaurantsContent;
  }

  showHistoricalContent = false;

  toggleHistoricalContent() {
    this.showHistoricalContent = !this.showHistoricalContent;
  }

  showTransportContent = false;

  toggleTransportContent() {
    this.showTransportContent = !this.showTransportContent;
  }

  showForestContent = false;

  toggleForestContent() {
    this.showForestContent = !this.showForestContent;
  }

  showBeachContent = false;

  toggleBeachContent() {
    this.showBeachContent = !this.showBeachContent;
  }

}
