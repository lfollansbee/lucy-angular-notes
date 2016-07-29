app.filter('kebab', function () {
  return function (input){
    if(input){
      return input.replace(/_/g, "-");
    }
  };
});

app.filter('camel', function(){
  return function(input){
    if(input){
      return input.replace(/(\-\w|\_\w)/g, function(match){
    		return match[1].toUpperCase();
    	});
    }
  }
})

// Write a pigLatin filter which converts a given string to Pig Latin.

// Create a filter called redact which will remove all instances of a provided word from a string and replace it with "REDACTED". `{{"My dog Rusty is adorable" | redact: "Rusty"}} should return "My dog REDACTED is adorable". You will need to research creating custom filters that take parameters.
