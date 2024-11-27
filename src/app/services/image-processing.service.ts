import { Injectable } from '@angular/core';
import { RentPackage } from '../model/rent-package';
import { RentFileHandle } from '../model/rentFile_handle';
import { FileHandle } from 'fs/promises';
import { DomSanitizer } from '@angular/platform-browser';
import { ShoppingPackage } from '../model/shopp-package';
import { SpiciesPackage } from '../model/spicies-package';
import { RestaurantPackage } from '../model/restaurant-package';
import { HotelPackage } from '../model/hotel-package';
import { HistoricalPackage } from '../model/historical-package';
import { SportPackage } from '../model/sport-package';
import { TransportPackage } from '../model/transport-package';
import { TripPackage } from '../model/trip-package';
import { BeachPackage } from '../model/beach-package';
import { ForestPackage } from '../model/forest-package';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }
// rent
  public createRentImages(rentPackage:RentPackage){
    const rentImages: any = rentPackage.rentImages;

    const rentImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < rentImages.length; i++){
      const imageFileData = rentImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      rentImagesToFileHandle.push(finalFileHndle);
    }

    rentPackage.rentImages = rentImagesToFileHandle;
    return rentPackage;
  }

  // shopp
  public createShoppImages(shoppingPackage:ShoppingPackage){
    const shoppImages: any = shoppingPackage.shoppingImages;

    const shoppImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < shoppImages.length; i++){
      const imageFileData = shoppImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      shoppImagesToFileHandle.push(finalFileHndle);
    }

    shoppingPackage.shoppingImages = shoppImagesToFileHandle;
    return shoppingPackage;
  }

  // spicies
  public createSpiciesImages(spiciesPackage:SpiciesPackage){
    const spiceImages: any = spiciesPackage.spiciesImages;

    const spiceImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < spiceImages.length; i++){
      const imageFileData = spiceImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      spiceImagesToFileHandle.push(finalFileHndle);
    }

    spiciesPackage.spiciesImages = spiceImagesToFileHandle;
    return spiciesPackage;
  }

  // restaurant
  public createRestaurantImages(restaurantPackage:RestaurantPackage){
    const restaurantImages: any = restaurantPackage.restaurantImages;

    const restaurantImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < restaurantImages.length; i++){
      const imageFileData = restaurantImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      restaurantImagesToFileHandle.push(finalFileHndle);
    }

    restaurantPackage.restaurantImages = restaurantImagesToFileHandle;
    return restaurantPackage;
  }

  // hotells
  public createHotellImages(hotelPackage:HotelPackage){
    const hotelImages: any = hotelPackage.hotelImages;

    const hotelImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < hotelImages.length; i++){
      const imageFileData = hotelImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      hotelImagesToFileHandle.push(finalFileHndle);
    }

    hotelPackage.hotelImages = hotelImagesToFileHandle;
    return hotelPackage;
  }

  // historical
  public createHistoricalImages(historicalPackage:HistoricalPackage){
    const historicalImages: any = historicalPackage.historicalImages;

    const historicalImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < historicalImages.length; i++){
      const imageFileData = historicalImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      historicalImagesToFileHandle.push(finalFileHndle);
    }

    historicalPackage.historicalImages = historicalImagesToFileHandle;
    return historicalPackage;
  }

  // sport
  public createSportImages(sportPackage:SportPackage){
    const sportImages: any = sportPackage.sportImages;

    const sportImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < sportImages.length; i++){
      const imageFileData = sportImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      sportImagesToFileHandle.push(finalFileHndle);
    }

    sportPackage.sportImages = sportImagesToFileHandle;
    return sportPackage;
  }

  // transport
  public createTransportImages(transportPackage:TransportPackage){
    const transportImages: any = transportPackage.transportImages;

    const transportImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < transportImages.length; i++){
      const imageFileData = transportImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      transportImagesToFileHandle.push(finalFileHndle);
    }

    transportPackage.transportImages = transportImagesToFileHandle;
    return transportPackage;
  }

  // forest
  public createForestImages(forestPackage:ForestPackage){
    const forestImages: any = forestPackage.forestImages;

    const forestImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < forestImages.length; i++){
      const imageFileData = forestImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      forestImagesToFileHandle.push(finalFileHndle);
    }

    forestPackage.forestImages = forestImagesToFileHandle;
    return forestPackage;
  }

  // beach
  public createBeachImages(beachPackage:BeachPackage){
    const beachImages: any = beachPackage.beachImages;

    const beachImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < beachImages.length; i++){
      const imageFileData = beachImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      beachImagesToFileHandle.push(finalFileHndle);
    }

    beachPackage.beachImages = beachImagesToFileHandle;
    return beachPackage;
  }

  // trip
  public createTripImages(tripPackage:TripPackage){
    const tripImages: any = tripPackage.tripImages;

    const tripImagesToFileHandle: RentFileHandle[] = [];

    for(let i = 0; i < tripImages.length; i++){
      const imageFileData = tripImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const finalFileHndle :RentFileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      tripImagesToFileHandle.push(finalFileHndle);
    }

    tripPackage.tripImages = tripImagesToFileHandle;
    return tripPackage;
  }

    // news
    public createNewsImages(news:News){
      const images: any = news.images;
  
      const newsImagesToFileHandle: RentFileHandle[] = [];
  
      for(let i = 0; i < images.length; i++){
        const imageFileData = images[i];
  
        const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
        const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
        const finalFileHndle :RentFileHandle = {
          file: imageFile,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
        };
  
        newsImagesToFileHandle.push(finalFileHndle);
      }
  
      news.images = newsImagesToFileHandle;
      return news;
    }


  public dataURItoBlob(picBytes:any,imageType:any){
      const byteString =  window.atob(picBytes);

      const arrayBuffer = new ArrayBuffer(byteString.length);

      const int8Array = new Uint8Array(arrayBuffer);

      for(let i = 0; i < byteString.length; i++){
          int8Array[i] = byteString.charCodeAt(i);
      }

      const blob = new Blob([int8Array],{type:imageType});
      return blob;
  }
}
