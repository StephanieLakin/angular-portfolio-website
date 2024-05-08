import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isWEOpen: boolean = false;
  isSkillsOpen: boolean = false;
  isEdOpen: boolean = false;
  isExOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2, private router: Router){
    this.titleService.setTitle('Stephanie Lakin - Resume')
  }

  navigateToSection(sectionId: string) {
    this.router.navigate([], { fragment: sectionId }).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  downloadFile() {
   const link = this.renderer.createElement('a');
   link.setAttribute('target', '_blank');
  link.setAttribute('href', '../assets/docs/Resume2024.pdf');
  link.setAttribute('download', 'Resume2024.pdf');
  link.click();
  link.remove();
    }
}
