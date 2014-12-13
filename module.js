var module = angular.module("PersonApp",["ngRoute"]);

module.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider
            .when("/home",
            {
                templateUrl:"templates/home.html",
                controller: "homeController"
            })
            .when("/person/:id",
            {
                templateUrl:"templates/person.html",
                controller: "personController"
            })
            .when("/person",
            {
                templateUrl:"templates/index.html",
                controller: "listPerson"
            })
            .when("/service",{
                templateUrl:"templates/service.html",
                controller: "serviceController"
            })
            .when("/about",{
                templateUrl:"templates/aboutUs.html",
                controller:"aboutUsController"
            })
            .when("/contact",{
                templateUrl:"templates/contactUs.html",
                controller:"contactUsController"
            })
            .otherwise({
                redirectTo:"/home"
            })
    }
]);


module.service("PersonService",function(){

    var uid = 3;


    var person1 = new Object();
    person1.id = 1;
    person1.name = "Rahul";
    person1.email = "rahul@gmail.com";
    person1.city = "Surat";



    var person2 = new Object();
    person2.id = 2;
    person2.name = "rj";
    person2.email="rj@gmail.com";
    person2.city = "Vapi";


    var persons = [];
    persons.push(person1);
    persons.push(person2);

    //localStorage.personArr = persons;
    localStorage.setItem("person", JSON.stringify(persons));
    this.addPerson = function(person){
        person.id = uid++;
        persons.push(person);
        localStorage.setItem("person", JSON.stringify(persons));
    }

    this.savePerson = function(person){
        var personArr = JSON.parse(localStorage.person);
        for(i in personArr){
            if(personArr[i].id == person.id){
                personArr[i] = person;
            }
        }
        localStorage.setItem("person", JSON.stringify(personArr));
    }

    this.list = function(){
        //console.log(persons);
        var personArr = JSON.parse(localStorage.person);
        return persons;
    }


    this.get = function(id){
        var personArr = JSON.parse(localStorage.person);
        for(i in personArr){
            if(personArr[i].id == id){
                return personArr[i];
            }
        }
    }

    this.deletePerson = function(id){
        var personArr = JSON.parse(localStorage.person);
        for(i in personArr){
            if(personArr[i].id == id){
                personArr.splice(i,1);
            }
        }
        localStorage.setItem("person", JSON.stringify(personArr));
    }

});
//var uid = 1;

/*
var uid = 3;
var personArr = new Array();

var person1 = new Object();
    person1.id = 1;
    person1.name = "Rahul";
    person1.email = "rahul@gmail.com";
    person1.city = "Surat";



var person2 = new Object();
    person2.id = 2;
    person2.name = "rj";
    person2.email="rj@gmail.com";
    person2.city = "Vapi";


personArr.push(person1);
personArr.push(person2);
*/



/*
document.getElementById("btnAdd").style.display = "block";
document.getElementById("btnSave").style.display = "none";*/
