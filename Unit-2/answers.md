### Section One
* What are possible issues with this new file structure?
Forgetting to include all the files in their own script in index. Not being able to access some files from other files.
* When thinking about extending the single responsibility principle to the app structure, what are some other ways that the app could be structured?
Putting stylesheets in their own folder. Creating a data.js file for a large object.
* What are the differences between serving files from an http server and from the file system? It seemed to work fine with just `open index.html` in the browser...

* Reflecting on the new structure and thinking back to lesson 1 - is Angular an MVC framework? How does the app structure support/disprove that?
No
Two way binding

### Section Two
* What is the difference between `$scope.apply` and `$scope.digest`?
`$scope.digest` is the method constantly called to update data in the digest cycle.
`$scope.apply` forcefully fires a digest cycle when we are not getting updated data and is recommended to be used infrequently.
* What is the digest cycle?
The digest cycle is similar to an event loop, but all of the callbacks relevant to angular have the `$apply` function in them. They are sent to the JS context and JS starts processing it. There are also subloops within this process.
* What is the scope life cycle? (this will require some additional reading)

* What does "bootstrapping an angular app" mean?

### Section three
* Single Responsibility Principle:
This is when each file has a single responsibility. Instead of having one app.js file with all the controllers and directives, you can split them up, creating a directive file and a controller file. Each file has a single responsibility.
* Interface (you can start here):
The interface is exactly the set of functions that the code uses (and the return values from those functions)
* Duck Typing:
Duck typing is the idea that in JS, if something walks like a duck and quacks like a duck, then as far as JS cares, it is a duck.
* Law of Demeter:
Principle of least knowledge. The idea that a given object should assume as little as possible about the structure or properties of anything else.
* Tight Coupling (in contrast with Loose Coupling):
When a group of classes are highly dependent on one another. Loose coupling is when components in a system are dependent upon each other to the least extent practicable.
* Separation of Concerns (in your own words :P ):


* What is dependency injection?
A software design system that deals with how functions/components get hold of their dependencies
* How does angular implement dependency injection?

* What are the three ways to annotate our code with service names (dependencies)? Write three code examples with each one of these options.
1. Implicit annotation: This assumes that the function parameter names are the names of the dependencies.
`someModule.controller('Controller', function($scope, greeter){
  //...
})`
1. Inline array annotation: Here, you pass an array whose elements consist of a list of strings (the names of the dependencies) followed by the function itself.
`someModule.controller('MyController', ['$scope', 'greeter', function($scope, greeter) {
  // ...
}]);`
1. $inject property annotation: This is used in order to allow the minifiers to rename the function parameters and still be able to inject the right services.  The `$inject` property is an array of service names to inject.
`var MyController = function($scope, greeter) {
  // ...
}
MyController.$inject = ['$scope', 'greeter'];
someModule.controller('MyController', MyController);`

### Section Four
* Come up with a situation where you would want to create a custom filter.
If you want to run a custom function on an input.

### Section Routing - Unit 3 section 5
* What is ui-router?
`ui-router` is an alternative to ng-route which allows us to make Single Page Apps. With SPAs we
* What are some differences between ui-router and ngRoute?
`ui-router` provides more functionality than `ngRoute`. `ui-router` also uses the concept of state
* What is state?
State is a place in your application and that is how parts of your application should be defined, not by a URL (like `ngRoute`), but by a state.
* What does the resolve property let us do?
Resolve gives us the ability to resolve promises before we render a view. This ensures that all data necessary is loaded before the view renders and it also allows us to change the state if a certain condition is not met
* What is a nested view? Give an example of when you would use one:
A nested view is when you can see an original view, then click one object and see more while still seeing the original view.  One example is when you have a list of things and can click one item to see details, but the list is still displayed.
* What Do Child States Inherit From Parent States?
The parent parameters
* What does the "@" symbol do in regards to multiple named views?
The `@` symbol is used to find a specific ui-view with a that view-name. So if you need to find the content view-name in subscribers.html it would be:
`content@app.subscribers`

### Section Six
* What is a service? Is there a Ruby or JavaScript equivalent to Angular services?
Objects that contain code that can be shared across your app. Also, a service is a constructor function.
* Explain in as much detail as possible what happens under the hood of $http.get()
It is Angular's wrapper for AJAX calls
* What is $q and how does it relate to $http?
A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing.

### Section Eight
* What is a service? What problem do they solve for us?
A service is a constructor function that allows us to share data, properties, and methods between controllers.
* What is a singleton? Why would we use them?

* What is the difference between a factory, service and provider?
A service is a constructor function while a factory is not. A factory function is really just a function that gets called which is why it has to return an object implicitly. A factory is also a type of service. A provider is a factory that can be configured before the application starts.
* Name at least 3 angular built in services that we have used so far.
