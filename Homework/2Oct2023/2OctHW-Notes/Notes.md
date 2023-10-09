@output is sending information out/up to a parent components
@input is inputting information to a child component

(click)
.emit() - method that emits an event
($event) gives us access to the event data


### View Encapsulation
View Encapsulation is a way to keep styles for a component separate to prevent them from affecting other components.
 - can be overidden with encapsulation: ViewEncapsulation (need to import it) 
 - .None - does not use view encapsulation
 - .ShadowDom - uses the ShadowDom technology (not all browsers support
 - .Emulated - is the default
 
 ### Lifecycle Hooks
 
 - ngOnChanges - called after a bound input property changes
 - ngOnInit - called once the component is initialized - after the constructor
 - ngDoCheck - will run every change detected
 - ngAfterContentInit - runs after ng-content has been projected into view
 - ngAfterContentChecked - runs after the component's view has been intialized
 - ngAfterViewChecked - runs every time the view has been checked
 - ngOnDestroy - runs once the component is about to be destroyed

 # Event Listener Output Steps
 1. create a listener event in your html doc such as (click)
 2. add a function to the listener such as (click)="listener()"
 3. create the function in the export class in the ts doc
		- add a variable = to new EventEmitter<type>()
		- Use .emit() in your function to emit an event in the function to be listened to by other components
		-	this.myEvent.emit(someData);
		- add EventEmitter in the imports
 4. Make the event listenable from outside the component by using the @Output() method in the app.component.html
	 - add Output to the imports in the ts file your function is in
	 -
 5. Listen to the event from the outside component 
		- use your Output() method name that is assigned to a new EventEmitter in the component that you want to be able to listen
		- Set the method = to a new function you want to execute
		- For example, you could have in your app.component.html file, where your outside component is linked,
		-  <app-game-control  (gameCounter)="logCount($event)"></app-game-control>
		- add ($event) inside the method to gain access to the data
			- implement this method in your .ts file under exports

# Input Steps 
- You have a child component that needs information from a parent component to fill in data in {{ string interpolation }} in the html file.
- In the child component.ts file you will have variable in export class. It won't be initialized in this file.
- Put @Input() in front of the variable to get the initialization from the parent component
- Add Input to the imports
- Add your child component in the parent.component.html
- Use *ngFor="let item of items" [item]="variable" to cycle through the array inside of the app-child tag that is inside of the parent component.html
- Create an empty array in the parent.component.ts file to hold the data
- Create a function inside of the export class inside of the parent.component.ts file that using this.item.push(variable); to push the data from the array to the page