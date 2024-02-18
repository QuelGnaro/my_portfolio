import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MyService {
  skillsArray = [
    {
      skillId: 1,
      name: 'Angular',
      url: 'https://www.svgrepo.com/show/373427/angular.svg',
      description: ''
    },
    {
      skillId: 2,
      name: 'HTML',
      url: 'https://www.svgrepo.com/show/452228/html-5.svg',
      description: ''
    },
    {
      skillId: 3,
      name: 'JavaScript',
      url: 'https://www.svgrepo.com/show/452045/js.svg',
      description: ''
    },
    {
      skillId: 4,
      name: 'TypeScript',
      url: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
      description: ''
    },
    {
      skillId: 5,
      name: 'Electron Framework',
      url: 'https://www.svgrepo.com/show/353689/electron.svg',
      description: ''
    },
    {
      skillId: 6,
      name: 'Ionic',
      url: 'https://www.svgrepo.com/show/373687/ionic.svg',
      description: ''
    },
    {
      skillId: 7,
      name: 'CSS',
      url: 'https://www.svgrepo.com/show/452185/css-3.svg',
      description: ''
    },
    {
      skillId: 8,
      name: 'GitHub',
      url: 'https://www.svgrepo.com/show/450156/github.svg',
      description: ''
    },
    {
      skillId: 9,
      name: 'Figma',
      url: 'https://www.svgrepo.com/show/452202/figma.svg',
      description: ''
    },
    {
      skillId: 10,
      name: 'Nest.js',
      url: 'https://www.svgrepo.com/show/373863/nest-middleware-js.svg',
      description: ''
    },
  ];
}
