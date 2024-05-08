import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;

  constructor(
    private titleService: Title,
    private projectService: ProjectService
  ) {
    this.titleService.setTitle('Stephanie Lakin - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }
}
