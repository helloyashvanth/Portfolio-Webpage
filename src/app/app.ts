import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { SkillSection } from './skill-section/skill-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeroSection, SkillSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
