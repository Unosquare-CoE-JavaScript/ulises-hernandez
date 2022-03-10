# ProductionAngular

This is a monorepo project using Angular and Nest built with [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Project Structure

The project is conformed by the following apps and libs:

 - Apps
    - __api__: Backend application built with [Nest](https://nestjs.com)
    - __dashboard__: Frontend application built with  [Angular](https://angular.io)

 - Libs
    - __api-interfaces__: Here is defined all the typescript data model that is used by all the applications.
    - __core-data__: Angular module in charge of connecting with the server via service.
    - __core-state__: Angular module in charge of handling state management of frontend applications usgin [NGRX](https://ngrx.io)
    - __material__: Angular module that wraps used [Angular Material](https://material.angular.io) modules
    - __ui-toolbar__:

## Testing

This project uses [Jest](https://jestjs.io) for unit testing and [Cypress](https://www.cypress.io) for e2e testing.