import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sugarmeter'
})
export class SugarMeterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  
  transform(rating: number): SafeHtml  {
    const fullStarCount = Math.floor(rating); // Number of full stars
    const partialStarWidth = rating - fullStarCount; // Width of the partial star
    const logo = "waffle"
    let stars = '';
    let i = 0;
    // Print full stars
    /*for (i; i < fullStarCount && i < 4; i++) {
      stars += `<div class="${logo}-svg-blue"></div>`; // Replace with your SVG code for a full star
    }

    for (i; i < fullStarCount && i < 8; i++) {
      stars += `<div class="${logo}-svg-orange"></div>`; // Replace with your SVG code for a full star
    }

    // Print partial star if there is any
    if (partialStarWidth > 0) {
      stars += `<div class="${logo}-yolo" style="--yolo: ${100 - (partialStarWidth*100)}%"></div>`; // Replace with your SVG code for a partial star
    }*/

    for (i; i < 16;i++) {
      if (i < 4 && i < fullStarCount) {
        stars += `<div class="${logo}-svg-blue"></div>`; // Replace with your SVG code for a full star
      } else if (i < 8 && i < fullStarCount) {
        stars += `<div class="${logo}-svg-orange"></div>`; // Replace with your SVG code for a full star
      } else if (i < 12 && i < fullStarCount) {
        stars += `<div class="${logo}-svg-blue sport-background"></div>`; // Replace with your SVG code for a full star
      } else if (i < 16 && i < fullStarCount) {
        stars += `<div class="${logo}-svg-blue fun-background"></div>`; // Replace with your SVG code for a full star
      } else {
        stars += `<div class="${logo}-svg-black"></div>`; // Replace with your SVG code for a full star
      }
    }


    const sanitizedStars = this.sanitizer.bypassSecurityTrustHtml(stars);

    return sanitizedStars;

  }

}
