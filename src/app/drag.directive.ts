import { Directive, HostBinding, HostListener, Output } from '@angular/core';
import { RentFileHandle } from './model/rentFile_handle';
import { DomSanitizer } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() files: EventEmitter<RentFileHandle> = new EventEmitter();

  rentFileHandle!:null;

  @HostBinding("style.background") private background = "#eee"

  constructor(private domSanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt:DragEvent){
    evt.preventDefault();
    evt.stopPropagation();

    this.background = "#999";
  }

  @HostListener("dragleave",["$event"])
  public onDragLeave(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";

    let rentFileHandle: RentFileHandle;

    const file = evt.dataTransfer!.files[0];
    const url =  this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));

    rentFileHandle = {file, url};
    this.files.emit(rentFileHandle);
  }

}
