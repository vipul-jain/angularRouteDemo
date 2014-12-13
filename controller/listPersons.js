module.controller("listPerson",function($scope, $routeParams, PersonService ){

    document.getElementById("btnAdd").style.display = "block";
    document.getElementById("btnSave").style.display = "none";

    $scope.persons = PersonService.list();//JSON.parse(localStorage.person)////personArr;

    $scope.editPerson = function(id){

        document.getElementById("btnAdd").style.display = "none";
        document.getElementById("btnSave").style.display = "block";

        $scope.newPerson = angular.copy(PersonService.get(id))
        /*for(i in $scope.persons){
            if($scope.persons[i].id == id || $scope.persons[i].id == $routeParams.id){
                $scope.newPerson = angular.copy($scope.persons[i]);

            }
        }*/

    }

    $scope.addPerson = function(person){

        PersonService.addPerson(person);
        /*$scope.newPerson.id = uid++;
        $scope.newPerson.isSelected = "";
        $scope.persons.push($scope.newPerson);*/
        $scope.newPerson = {};
    }

    $scope.savePerson = function(person){
        /*for(i in $scope.persons){
            if($scope.persons[i].id == id){
                $scope.persons[i] = $scope.newPerson;

            }
        }*/
        PersonService.savePerson(person);

        document.getElementById("btnAdd").style.display = "block";
        document.getElementById("btnSave").style.display = "none";
        $scope.newPerson = {};
        $scope.persons;
    }

    $scope.deletePerson = function(id){


        PersonService.deletePerson(id);
        /*for(i in $scope.persons){
            if($scope.persons[i].id == id){
                var toDelete = confirm("Do you really want to delete this record ?");
                if(toDelete){
                    $scope.persons.splice(i,1);
                }

            }
        }*/
    }
});
