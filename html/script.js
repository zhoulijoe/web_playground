var equationResult = (10 + 2) / 2 + 4 * 3;
console.log("equation result is: " + equationResult);

var i = 0;
while (i < 10) {
    console.log("while loop iteration: " + i);
    i++;
}

for (var i = 0; i < 10; i++) {
   console.log("for loop iteration: " + i);
}

var add = function (a, b) {
    return a + b;
}
console.log("add function returns: " + add(1, 2));

// Object is a collection of named properties and methods; it's a function
var aPerson = {
    name: "Joe",
    age: 5,
    move: function (direction) {
        return "moving " + direction;
    }
};
console.log("a person with name " + aPerson.name + " and age " + aPerson.age + " is " + aPerson.move("east"));

var names = ["Joe", "James", "Jane"];
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

var jsonStr = JSON.stringify({
    name: "Joe",
    age: 20,
    interests: ["programming", "food", "sleep"]
});
console.log(jsonStr);
console.log(JSON.parse(jsonStr));

// AJAX request
var req = new XMLHttpRequest();
req.onload = function (event) {
    var responseJson = JSON.parse(req.responseText);
    console.log("Response from server: " + responseJson);
};
req.open("GET", "http://localhost:8080/v1/projects", true);
req.send();
