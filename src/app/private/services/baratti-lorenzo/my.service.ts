import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MyService {
  skillsArray = [
    {
      id: 1,
      name: 'Angular',
      url: 'https://www.svgrepo.com/show/373427/angular.svg',
      description: "Durante il corso 24 Ore Business School ho scoperto Angular e ora ho una solida base. Non vedo l'ora di approfondire le mie conoscenze e diventare un professionista nel campo dello sviluppo web."
    },
    {
      id: 2,
      name: 'HTML',
      url: 'https://www.svgrepo.com/show/452228/html-5.svg',
      description: "Ho incontrato HTML diverse volte, ma solo nel 2023 ho iniziato a studiarlo seriamente. Ho utilizzato un'app per apprendere le basi del web dev e ho approfondito durante il corso 24 Ore Business School."
    },
    {
      id: 3,
      name: 'JavaScript',
      url: 'https://www.svgrepo.com/show/452045/js.svg',
      description: "Ho studiato JavaScript per un anno a scuola, ma non l'ho mai approfondito. Durante il corso 24 Ore Business School, abbiamo ripassato le basi del linguaggio, aprendo nuove prospettive per il mio sviluppo professionale."
    },
    {
      id: 4,
      name: 'TypeScript',
      url: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
      description: "Prima del corso 24 Ore Business School, non ero a conoscenza di TypeScript. Durante il corso, ho avuto l'opportunità di scoprire e apprendere le sue basi, aprendo nuove prospettive per il mio sviluppo professionale."
    },
    {
      id: 5,
      name: 'Electron Framework',
      url: 'https://www.svgrepo.com/show/353689/electron.svg',
      description: "Durante il corso 24 Ore Business School, abbiamo trattato l'argomento del testing e convertito le web app in app desktop con Electron. Inoltre, abbiamo esplorato le basi di questo framework, ampliando così le nostre competenze nello sviluppo di applicazioni cross-platform."
    },
    {
      id: 6,
      name: 'Ionic',
      url: 'https://www.svgrepo.com/show/373687/ionic.svg',
      description: "Durante il corso 24 Ore Business School, abbiamo sperimentato Ionic, un framework specifico per la produzione di web app mobile. È stato un'esperienza molto interessante e piacevole, che ha arricchito le nostre competenze nello sviluppo di applicazioni mobile."
    },
    {
      id: 7,
      name: 'CSS',
      url: 'https://www.svgrepo.com/show/452185/css-3.svg',
      description: "CSS è un linguaggio che ho scoperto nel 2023, iniziando a utilizzare un'app per apprendere le basi dello sviluppo web. Spero di migliorare la mia conoscenza del linguaggio per creare progetti sempre più unici e di successo."
    },
    {
      id: 8,
      name: 'GitHub',
      url: 'https://www.svgrepo.com/show/450156/github.svg',
      description: "GitHub è una piattaforma di hosting per il controllo delle versioni e la collaborazione nello sviluppo di software. Ho scoperto GitHub nel 2023 durante un corso su Coursera e ho apprezzato il suo potere nel versioning. Durante il corso 24 Ore Business School, abbiamo fatto ampio uso di GitHub per il controllo delle versioni e la collaborazione."
    },
    {
      id: 9,
      name: 'Figma',
      url: 'https://www.svgrepo.com/show/452202/figma.svg',
      description: "Ho partecipato a un workshop con BSD Design per imparare le basi di Figma. Insieme a un collega del corso, abbiamo progettato un wireframe per una web app ipotetica."
    },
    {
      id: 10,
      name: 'Nest.js',
      url: 'https://www.svgrepo.com/show/373863/nest-middleware-js.svg',
      description: "Durante il corso 24 Ore Business School, abbiamo affrontato una parte di back-end utilizzando Nest.js per creare un progetto base di REST API."
    },
    {
      id: 11,
      name: 'NgRx',
      url: 'https://cdn.worldvectorlogo.com/logos/ngrx.svg',
      description: "Durante il corso 24 Ore Business School, abbiamo discusso dello stato nell'ambito dello sviluppo di applicazioni web e abbiamo approfondito Ngrx, un framework per la gestione dello stato in Angular basato sul pattern Redux. Abbiamo implementato i reducer, le actions e i selectors per gestire lo stato in modo efficiente e scalabile."
    },
    {
      id: 12,
      name: 'PrimeNG',
      url: 'https://www.primefaces.org/presskit/primeng-logo.png',
      description: "Alla fine del corso 24 Ore Business School, abbiamo completato il nostro progetto creando un portfolio utilizzando PrimeNG, una libreria di componenti UI per Angular. Abbiamo inoltre rifattorizzato i vari progetti creati durante il corso in un'unica applicazione, dimostrando le nostre competenze nello sviluppo web."
    },
    {
      id: 13,
      name: 'Bootstrap',
      url: 'assets/home/bootstrap-logo.png',
      description: "Durante il corso, abbiamo ampiamente utilizzato la libreria di Bootstrap per acquisire familiarità con le librerie UI. Inoltre, abbiamo utilizzato anche ngBootstrap per implementare componenti che migliorano l'esperienza utente e l'interfaccia delle nostre applicazioni."
    },
    {
      id: 14,
      name: 'Postman',
      url: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      description: "Durante il workshop sul backend, abbiamo utilizzato Postman, un'applicazione che simula chiamate API. Ho trovato Postman molto utile per testare e sviluppare le API, poiché consente di eseguire richieste, visualizzare le risposte e testare vari scenari senza dover scrivere codice."
    },
  ];

}
