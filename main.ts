import * as readline from "readline";
import * as fs from "fs";
import {Rover} from "./class/rover";
import { Grid } from "./class/grid";
import { RoverPosition } from "./class/roverposition";

//Set up variable that will contain text from input file
let inputFile = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ask user for name of input file
rl.question("Enter input file: ", (answer) => {

    //Place content of file into variable
    inputFile = fs.readFileSync(answer,"utf-8");

    //Split input by line
    const inputFileArray = inputFile.split(/\r?\n/);

    //Get grid size from input and convert it to tuple
    const gridStringArray = inputFileArray[0].split(" ");
    const grid = new Grid(parseInt(gridStringArray[0]), parseInt(gridStringArray[1]));

    //Create Rover objects
    for(var i = 1; i < inputFileArray.length; i++) {
        if( i % 2 != 0) {

            //Get starting position from input and convert it to tuple
            const positionStringArray = inputFileArray[i].split(" ");

            //Check if inputted direction is valid
            if(positionStringArray[2] != undefined) {
                const roverPosition = new RoverPosition(parseInt(positionStringArray[0]), parseInt(positionStringArray[1]), positionStringArray[2]);

                //Create rover object
                const rover = new Rover(grid, roverPosition, inputFileArray[i+1]);
                rover.navigate();
            } else {
                console.error("Invalid Rover Direction. Direction: " + positionStringArray[2]);
            }
        }
    }

    rl.close();
});