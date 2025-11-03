import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { SkillSection } from './skill-section/skill-section';
import { ProjectSection } from './project-section/project-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeroSection, SkillSection, ProjectSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
