import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Inspection Task Web',
      pictures: [
        "../assets/img/InspectionTaskUi_01.PNG",
        "../assets/img/InspectionTaskUi_02.PNG",
        // '../assets/img/img_03.png',
      ],
      projectLink: 'https://github.com/StephanieLakin/InspectionTaskWeb',
      summary:
        'Angular front end for Inspection Task APi',
      description:
        'On the Angular UI, users can view a list of inspections, each formatted in a clear and organized manner. For each inspection listed, there is a button that, when clicked, triggers the API endpoint to copy the inspection data. After the API call is made, a toast notification appears on the UI, informing the user whether the operation was successful or not. Overall, this app simplifies the process of managing inspections by providing a seamless user experience and ensuring that data is accurately stored and processed in the backend.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: 'Inspection Task API',
      pictures: [
        "../assets/img/InspTaskApi_02.png",
        "../assets/img/swaggerInspApp.PNG",
        '../assets/img/DbQuery.PNG',
      ],
      projectLink: 'https://github.com/StephanieLakin/InspectionTaskApi',
      summary: 'A Simple .Net Core Api for the Inspection Task App',
      description:
        'This application allows users to manage inspections via a user-friendly interface. On the back end, it utilizes a C#, .NET API endpoint named "Inspection" with a method called "Copy" to handle requests. When users trigger a specific action on the Angular UI, the app sends a request to the API with specific data about the inspection. The API then saves this data to a SQL Server Express database, created using EF code first.',
      tags: [Tag.CSHARP, Tag.DOTNETCORE],
    },
    {
      id: 2,
      name: 'Paws Connect API',
      pictures: [
        '../assets/img/pawsApi_01.png',
        '../assets/img/pawsApi_02.png',
        // '../assets/img/img_03.png',
      ],
      projectLink: 'https://github.com/StephanieLakin/PawsConnect/tree/master/PawsConnect',
      summary: 'Fullstack web app developed using Angular and .NET Core Web API',
      description:
        'Building an API for a Dog Care and Community App that provides a comprehensive platform for dog owners to track health records, connect with other owners, and access pet services. A work in progress.',
      tags: [Tag.DOTNETCORE, Tag.CSHARP, Tag.ASPNET],
    },
    {
      id: 3,
      name: 'Paws Connect UI',
      pictures: [
        '../assets/img/img_01.png',
        '../assets/img/img_02.png',
        '../assets/img/img_03.png',
      ],
      projectLink: 'https://github.com/StephanieLakin/PawsConnectWeb',
      summary: 'Fullstack web app developed using Angular and .NET Core Web API.',
      description:
        'Building an Angular front end for a Dog Care and Community App that provides a comprehensive platform for dog owners to track health records, connect with other owners, and access pet services. A work in progress.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    // {
    //   id: 4,
    //   name: 'Test App',
    //   pictures: [
    //     '../assets/img/img_01.png',
    //     '../assets/img/img_02.png',
    //     '../assets/img/img_03.png',
    //   ],
    //   projectLink: '//www.github.com',
    //   summary:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   tags: [Tag.JAVASCRIPT],
    // },
    {
      id: 5,
      name: 'Gallery App',
      pictures: [
        '../assets/img/gallery_01.png',
        '../assets/img/gallery_02.png',
        '../assets/img/gallery_04.png',
      ],
      projectLink: 'https://github.com/StephanieLakin/GalleryApp',
      summary:
        'Angular Project for viewing my art.',
      description:
        'My very first angular project built several years back. It was created more for learning about filtering than it was for diplaying my art.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error(`Project with id ${id} not found.`);
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach((project) => {
      let foundAll = true;

      filterTags.forEach((filterTag) => {
        if (!project.tags.includes(filterTag)) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
