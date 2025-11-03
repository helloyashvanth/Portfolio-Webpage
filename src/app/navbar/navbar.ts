import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isDarkMode = false;
  currentMode = 'Light';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'Dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
      this.currentMode = 'Dark';
    } else {
      this.currentMode = 'Light';
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'Dark');
      this.currentMode = 'Dark';
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'Light');
      this.currentMode = 'Light';
    }
  }
}