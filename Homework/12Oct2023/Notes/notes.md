
# Directives
A directive is how we give instructions to the DOM to control certain elements in Angular

- Attribute Directives 
	-  ngClass, ngStyle, ngModel
	- Sit on elements
- Structural Directives 
	-  ngIf, ngFor, ngSwitch
	- Change the structure of the DOM
	- You can't have more than one structural directives on the same element
- Services - 
- Dependency Injection - 
- D.R.Y. Code - Don't Repeat Yourself
# Building a directive
- use ng g d name
### or
- create a new folder
- create a new folder with follows name.directive.ts
- export the class
- add a constructor
	- add an injector inside the constructor
- add @directive (instead of @component
- import the directive
- create the selector
- add the directive to the app.module.ts under declarations (don't forget to import it as well)

## Example:
@Directive({
selector: '[appDropdown]'
})

export class DropdownDirective {
	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

@HostBinding('class.show') isOpen = false
@HostBinding('click') toggleOpen() {
this.isOpen = !this.isOpen

let dropdownList = this.elementRef.nativeElement.querySelector('.dropdown-menu');

if (this.isOpen( {
this.renderer.addClass(dropdownList, 'show');
} else {
this.renderer.removeClass(dropdownList, 'show');
}
}
}

# Services
Services replace inputs and outputs for leaning code. It is a class to store classes that multiple components can communicate with.

# Building a Service
- create a new file name.service.ts
- export a ts class
- A service is a normal ts class - you don't need @service
- Add a constructor to the component class that you want to use the service with type equal to the service name
- Add the providers property to the @Component decorator

#### Hierarchical Injector

 1. AppModule
 2. AppComponent
 3. Any other Component


Add @Injectable to the service you want to inject another service in