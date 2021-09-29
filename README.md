# Instagram

Mit `ng new instagram` erstellen sie ein neues Projekt mit dem Name Instagram
In diese Projekt, geht es um ein Progressive web Application.
um alle Punkten, die wir in der Aufgabe bekommen haben zu bearbeiten habe ich mich entschieden eine Instagram seite zu entwickeln.
Mein Projekt besteht aus eine Frontend "Intagram" und ein Backend "Instagram-server"
In der Projekt habe ich für die Frontend Entwicklung Angular benutzt und für die Backend nest.js
In dieser App kann der User eine 
    -Konto anlegen (Component register)
    -sich Anmelden(component login)
    -ein Profil erstellen (component profil)
    -Sein Profil Bearbeiten (component profil-edit)

## Installation

-  Zum Ausführen des Projektes wird [Node.js](https://nodejs.org) verendet. Sie müssen es auf Ihren Rechner installieren. 
- Mit dem Commamdo Zeile `npm install -g @angular/cli` um Angular zu installieren 
-  make sure that Node.js (>= 10.13.0, except for v13) is installed on your operating system.
- Mit `npm i -g @nestjs/cli` 
- Das Projekt ist mit eine Datenbank verbunden dafür müssen Mysql unter ` https://dev.mysql.com/downloads/installer/`
installieren.
- In der File `Database.Provider.ts` finden sie meine Anmaldungsinformationen. Der Name der Datenbank ist `instagram` der Benutzer ist `root` und kein Passwort. Nachdem sie mysql Intallieren haben, können sie entscheiden, entweder eine Datenbenk mit dem Name instagram ohne passwort oder ein neues Datenbank mit eine von Ihnen ausgewählte Name mit oder ohne passwort.


## Projekt installieren

- Laden sie das Projekt in Ihr Computer herunter, danach öffenen sie in iherer Tool und füllen sie die Kommamdo Zeile `npm install` 

- 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Dokumentation

- https://material.angular.io/components/tabs/overview
- https://nestjs.com/
- https://angular.io/docs


## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
- http-server -p 8080 -c-1 dist/Instagram

