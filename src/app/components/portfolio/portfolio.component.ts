import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../models/project.model';
import { Tag } from '../../models/tag.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed: boolean = true;
  filtering: boolean = false;
 
  languageTags: Tag[] = [];
  frameworkTags: Tag[] = [];

  tags: Tag[] = [
    Tag.ANGULAR,
    Tag.TYPESCRIPT,
    Tag.REACT,
    Tag.CSHARP,
    Tag.ASPNET,
    Tag.JAVASCRIPT,
    Tag.NODEJS,
    Tag.DOTNETCORE,
  ];

  constructor(
    private titleService: Title,
    private projectService: ProjectService
  ) {
    this.titleService.setTitle('Stephanie Lakin - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
     // Populate language and framework tag arrays
     this.tags.forEach(tag => {
      if (tag.category === 'Language') {
        this.languageTags.push(tag);
      } else if (tag.category === 'Framework') {
        this.frameworkTags.push(tag);
      }
    });
  }

 filterProjects() {
  // Combine selected language and framework tags for filtering
  let filterTags: Tag[] = [...this.languageTags, ...this.frameworkTags].filter(tag => tag.selected);
  this.projects = this.projectService.getProjectsByFilter(filterTags);
  if (filterTags){
    this.filtering = true;
  }
}

resetFilters(){
  this.languageTags.forEach(tag => tag.selected = false);
  this.frameworkTags.forEach(tag => tag.selected = false);
  this.filtering = false;
  this.projects = this.projectService.getProjects();
}

}
