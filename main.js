"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var fs = require("fs");
var rover_1 = require("./class/rover");
var grid_1 = require("./class/grid");
var roverposition_1 = require("./class/roverposition");
//Set up variable that will contain text from input file
var inputFile = "";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Ask user for name of input file
rl.question("Enter input file: ", function (answer) {
    //Place content of file into variable
    inputFile = fs.readFileSync(answer, "utf-8");
    //Split input by line
    var inputFileArray = inputFile.split(/\r?\n/);
    //Get grid size from input and convert it to tuple
    var gridStringArray = inputFileArray[0].split(" ");
    var grid = new grid_1.Grid(parseInt(gridStringArray[0]), parseInt(gridStringArray[1]));
    //Create Rover objects
    for (var i = 1; i < inputFileArray.length; i++) {
        if (i % 2 != 0) {
            //Get starting position from input and convert it to tuple
            var positionStringArray = inputFileArray[i].split(" ");
            //Check if inputted direction is valid
            if (positionStringArray[2] != undefined) {
                var roverPosition = new roverposition_1.RoverPosition(parseInt(positionStringArray[0]), parseInt(positionStringArray[1]), positionStringArray[2]);
                //Create rover object
                var rover = new rover_1.Rover(grid, roverPosition, inputFileArray[i + 1]);
                rover.navigate();
            }
            else {
                console.error("Invalid Rover Direction. Direction: " + positionStringArray[2]);
            }
        }
    }
    rl.close();
});
