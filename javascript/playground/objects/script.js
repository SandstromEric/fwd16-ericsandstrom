//QUESTION 1;
function questionOne() {
    'use strict';

    var car = {
        color: "red",
        type: "suv",
        size: "small"
    };

    car.doors = "3";

    console.log(car);
}

//Question 2;
function questionTwo() {
    'use strict';
    var myArray = ["matches", "knife", "accelerant", "cedar wood", "stick", "tinder plug"];
    var myObj = {};
    var i;
    for (i = 0; i < myArray.length; i = i + 1) {
        myObj[myArray[i]] = 0;
    }
    console.log(myObj);
}

//Question 3;
function questionThree() {
    'use strict';
    var person = {
        name: "Olof Svensson",
        weight: 86,
        eatDoritos: function (times) {
            var changeWeight = this.weight + (0.5 * times);
            this.weight = changeWeight;
            return changeWeight;
        }
    };
    person.eatDoritos(2);
    console.log(person);
}

//Question 4;
function questionFour() {
    'use strict';
    var contact = [];
    var persons = {
        person1: {
            name: "Stefan",
            address: "abc",
            phone: "123"
        },
        person2: {
            name: "Lisa",
            address: "def",
            phone: "456"
        },
        person3: {
            name: "Adolf",
            address: "ghi",
            phone: "789"
        }
    };
    var i, j;
    var objSize = 0;
    var objProp = [];
    Object.keys(persons).forEach(function (prop) {
        objSize = objSize + 1;
        objProp.push(prop);
    });
    for (i = 0; i < objSize; i = i + 1) {
        contact.push(persons[objProp[i]]);
    }
    for (j = 0; j < contact.length; j = j + 1) {
        console.log("");
        console.log("Contact " + j);
        console.log("Name: " + contact[j].name);
        console.log("Address: " + contact[j].address);
        console.log("Phone: " + contact[j].phone);
    }
}

//Question 5;
function questionFive() {
    'use strict';
    var addProp;
    var cart = {};
    while (true) {
        addProp = prompt('Add a product. Seperate the name and price with a ","');
        if (addProp === null) {
            break;
        }
        addProp = addProp.split(",");
        cart[addProp[0]] = addProp[1];
        console.log(cart);
    }
}


console.log("Question 1");
questionOne();

console.log("");

console.log("Question 2");
questionTwo();

console.log("");

console.log("Question 3");
questionThree();

console.log("");

console.log("Question 4");
questionFour();

console.log("Question 5");
questionFive();

