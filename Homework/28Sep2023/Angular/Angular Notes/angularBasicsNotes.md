#  $$ ** Angular ** $$
 A Javascript framework that allows you to create reactive Single-Page-Applications
 
## Setting up a new project
- "npm -v to check your version
- npm install -g @angular/cli to install Angular's cli
- Use "ng new plus name" to create a new folder.
- use "cd plus file name" to make sure you're in the correct directory.
- use "ng serve" to use the local host to view your site.
	>note - localhost: 4200 (default) will use your terminal 		 and you won't be able to type in it anymore. Open up a new 	 terminal that will accept commands.

## Setting up Bootstrap
- type "npm install --save bootstrap@3" into the terminal to install Bootstrap into your project locally.
- In the angular.json file, you need to add the Bootstrap style sheet under styles. You type "node_modules/bootstrap/dist/css/bootstrap.min.css"
	- don't forget the comma at the end	

## Files in Angular
 ### package.json
 ### src/app -
 
	 - app.component.css -
		 - Here you add your css for styling
	 - app.component.html -
		 - This is the root component
		 - Here you will all all of your components you want on your page
	 - app.component.ts -
		 - This is the main file you will use to type out your code.
	 - app.module.ts -
		 - main.ts is use to boot the angular application. 
		 - The main.ts file points to the app.module.ts file.
		 - Inside is the module for the app component
		 - You will add new components in the declarations array, import them at the top of the page, 
		 
- app-root in the index.html file points to the app.component files, allowing our code in those files to be shown.




## Components
A component is a typescript class.

A component is a feature of your app with a template, style, and logic. It is reusable and controllable.

Angular uses components to build web pages and uses modules to bundle different pieces/components into packages.
#### Adding a Component:
- "ng g c (generate component) plus component name" to create a new component
	- You can also right click on app and add new folder.
	- Then right click and add two new files.
	- End the files names with .ts and .html 
	- It's good practice to have a new folder for each new component
	- You should also name your folder your component name.
	- 
- export a class by typing " export class plus class name {}"
	- Name it the same as the component name
	- You export it so you can use it in other files
- add the component decorated
- add a class decorator - @Component()
	- Needs to be capitalized
	- Used to enhance the class and tell 
- **import the decorator ** - in the TS file type " import { component } from '@angular/core';
	- You need to import it so angular can understand it
- **add a selector:** -
	- You can name the selector any unique name
- **add templateUrl:** -
	- This points to the new components .html file
-  **add styleUrls:** -
	-  .
## Databinding
Communication between Typescript code and the HTML

- Output data with String Interpolation and Property Binding
- React to user event with Event Binding

### String Interpolation
- Use double curly braces to one way data bind data from the .ts file to the .html file
- you can bind strings, variables, methods
### Property Binding
- Use to assign a value to HTML elements or directives
- use []=''
### Event Binding
- Used to listen and respond to user actions
- use (event such as click)="method()
### Two Way Binding
- use to exchange data between the component and template and update simultaneously
- use [()]

## Directives

Instructions to modify the DOM
- ngIf
- ngFor
- ngStyle