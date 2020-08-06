# PairupFe


## Description
This is an application that automatically pairs students. An administrator adds cohorts, technical mentors and students. A technical mentor generates the weekly pairs and a student views their pair for the week.

### BDD Specifications Table
|        User Requirements                 |           Input                           |           Output                         |
|------------------------------------------|-------------------------------------------|------------------------------------------|
| Sign In                                  | Input email and password and click the    | If login is successful, the user is      |
|                                          | sign in button                            | redirected to their respective dashboard |
|                                          |                                           |                                          |
|     ADMINISTRATOR                        |                                           |                                          |
| Add a cohort                             | Click on the add a cohort on the sidenav  | You will be navigated to a page that     |
|                                          | and submit cohort details                 | has a form to register the cohort        |
|                                          |                                           |                                          |
| Add a User                               | Click on add User                         |                                          |
|                                          |                                           |                                          |
|                                          | Click on technical mentor                 | You will be navigated to a page which    |
|                                          |                                           | has a form to register the mentor        |
|                                          |                                           |                                          |
|                                          | Click on student                          | You will be navigated to a page which    |
|                                          |                                           | has a form to register the student       |
|                                          |                                           |                                          |
| View Cohorts                             |  Click on cohorts                         | You will be navigated to a page that has |
|                                          |                                           | all available cohorts displayed          |
|                                          |                                           |                                          |
| View technical mentors                   |  Click on technical mentors               | You will be navigated to a page that has |
|                                          |                                           | a table with all available technical     |
|                                          |                                           | mentors displayed                        |
|                                          |                                           |                                          |
| View students                            |  Click on students                        | You will be navigated to a page that has |
|                                          |                                           | a table with all available students      |
|                                          |                                           | displayed                                |
|    TECHNICAL MENTOR                      |                                           |                                          |
| Generate pairs                           | Click on the Generate pairs button        | You will be navigated to a page which    |
|                                          |                                           | same page in cards                       |
|                                          |                                           |                                          |
| View pair history                        |  Click on the history on the sidenav      | You will be navigated to a page which    |
|                                          |                                           | has a table on previous student pairing  |
|                                          |                                           | then click on the project you want       |
|                                          |                                           |                                          |
| View students                            |  Click on students                        | You will be navigated to a page that has |
|                                          |                                           | a table with all available students in   |
|                                          |                                           | your cohort displayed                    |
|                                          |                                           |                                          |
|    STUDENT                               |                                           |                                          |
| View pair                                |  Click sign in                            | You will be navigated to the dashboard   |
|                                          |                                           | where your student pair will be displayed|
|                                          |                                           |                                          |
|                                          |                                           |                                          |
|                                          |                                           |                                          |
|                                          |                                           |                                          |
| Edit profile                             | Click on my profile on the sidenav        | You will be navigated to edit profile    |
|                                          |                                           | page                                     |
|                                          |                                           |                                          |
| Log out                                  | Click on the logout button                | You will be logged out                   |
|                                          |                                           |                                          |
|                                          |                                           |                                          |


## Setup/Installation Requirements
To setup this project, you will need to access it from github then :
- Run `git clone https://github.com/Omwakwe/pairup-fe` on your terminal.
- Navigate to the directory
- Run `npm install --save-dev @angular-devkit/build-angular`
- Run `ng serve`
- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
