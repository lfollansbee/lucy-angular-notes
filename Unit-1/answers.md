###Part One
* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
There is a larger community of Angular users. With a larger community, there are more resources out on the web, including answered questions on stackoverflow and youtube videos.  Angular is also backed and promoted by Google.
* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
The basics are easy to learn, but there is a steep learning curve as you get past the basics.
Scopes can be difficult to handle and debug.
The directives api is powerful, but difficult to use.
* Is Angular an MVC framework?
Yes
* Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
`ng-app` designates the root element of the application, so everything inside this element is part of an Angular app.
`ng` stands for Angular. All of the built in directives for Angular use the prefix `ng`.

###Part Two
* What does ng-model do?
The `ngModel` directive binds an `input`, `select`, `textarea` (or custom form control) to a property. The ngModel directive wtaches the model by reference, not value.
* What is "dirty checking"?
"Dirty checking" is when you explicitly tell Angular to monitor the changes on a variable in each digest loop.
* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
* What are those {{ }} expressions? Are they Handlebars?
This is called markup used, to bind expressions to elements is built-in Angular markup.
* Explain what two-way data binding is.
Two-way data binding is when changes to the model or the view are automatically reflected in the view because in the compilation step, a live view is produced. Any changes to the view are immediately reflected in the model, and changes in teh model are shown in the view. This way, the developer doesn't have to write code that constantly syncs the view with the model and vice versa.
* BONUS: Research the $digest loop

###Part Four
* What are Angular expressions? How do they compare to tags from templating engines you've used before?
Angular expressions are code snippets that bind data to the HTML.  They are different than templating engines because you can't write conditionals or loops inside an Angular expression like you can in Handlebars.
* What happens when you write invalid code in an expression? What type of error do you get?
All of the curly brackets show on the HTML as though they are part of the text.
* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
Angular filters can be added to an expression to format data for display to the user.
Built-in filters include: currency, lowercase, uppercase, and date.
* What's the syntax for filters?
{{expression | filter : argument}}
* Can you use more than one filter?
Yes
* We'll soon see how to create custom filters. What is a use case for a custom filter?
Reversing a string.

###Part Five
* What is the purpose of `ng-init`?
It allows you to evaluate an expression in the current scope.
* Why use `ng-src` and `ng-href`?
The browser will initially fetch from the URL with the literal text {{hash}}
* What are directives?
Directives add functionality to HTML elements and attributes. Directives create dynamic components that re-render whenever the  data changes.
* Does `ng-class` require an object to be passed in?
No
* What order does an ng-repeat display items in?
It displays items in the order they're given unless otherwise defined by a filter.
* How does `ng-repeat` handle duplicate data?
It doesn't show any of the items if there is duplicate data because it is not possible to maintain a one-to-one mapping between collection items and DOM elements. You can work around this by using the `track by` expression.

###Part Six
* What is `$scope`?
`$scope` is an object. It refers to the application model and is an execution for expressions.
* What are Angular modules? What's the syntax for defining a module? Why should we use them?
A module is basically a container for the different parts of an app. Modules specify how an application should be bootstrapped.
`<div ng-app="myApp">`
* Why do we pass in `$scope` as an argument to controller functions?
The function that includes `$scope` defines the functionality of the controller.
* In Express, what are Angular controllers most analogous to?
A view.

###Part Seven
* What is $rootScope?
Every application has a single root scope which all other scopes descend from.
* Explain how $scope is passed from a parent to child controller
Scopes are all created with protypal inheritance, meaning they have access to each of their parent scopes.
* List five built in directives that create their own scope
`ng-if`, `ng-repeat`, `ng-view`, `ng-controller`, `ng-include`
* "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope"  what does this mean?
When you directly bind to a primitive, it no longer accesses the parent scope, but creates a new child scope because primitives are incapable of being changed.

###Part Nine
* When does a form/input have a property of $valid? What class accompanies this property?
`$valid`: is a boolean property that is applied when an item is valid based on rules placed. Accompanied by `ng-valid`
* When does a form/input have a property of $invalid? What class accompanies this property?
`$invalid`: is a boolean that indicates whether an item is currently invalid based on the rules placed. `ng-invalid`
* When does a form/input have a property of $pristine? What class accompanies this property?
`$pristine`: boolean that's true if the form/input has not been used yet. `ng-pristine`
* When does a form/input have a property of $dirty? What class accompanies this property?
`$dirty`: boolean that's true if the form/input has been used. `ng-dirtys`
* When does a form/input have a property of $touched? What class accompanies this property?
`$touched`: Boolean that's true if the input has been blurred. `ng-touched`
* What does blurred mean? (research the `blur` event)
The blur event fires when an element has lost focus.
