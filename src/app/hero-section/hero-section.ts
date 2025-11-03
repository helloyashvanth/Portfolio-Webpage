import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  openResume(): void {
    window.open('https://drive.google.com/file/d/1hzNY4kVVlgxZizSOwJPSr6xEblRCm99v/view?usp=sharing', '_blank');
  }
}