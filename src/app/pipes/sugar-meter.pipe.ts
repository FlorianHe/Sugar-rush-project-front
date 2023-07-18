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

    // Print full stars
    for (let i = 0; i < fullStarCount && i < 2; i++) {
      stars += `<div class="${logo}-svg-blue"></div>`; // Replace with your SVG code for a full star
    }

    for (let i = 2; i < fullStarCount && i < 4; i++) {
      stars += `<div class="${logo}-svg-orange"></div>`; // Replace with your SVG code for a full star
    }

    // Print partial star if there is any
    if (partialStarWidth > 0) {
      stars += `<div class="${logo}-yolo" style="--yolo: ${partialStarWidth*60}px"></div>`; // Replace with your SVG code for a partial star
    }

    const sanitizedStars = this.sanitizer.bypassSecurityTrustHtml(stars);

    return sanitizedStars;

  }

}
