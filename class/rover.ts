import { Grid } from "./grid";
import { RoverPosition } from "./roverposition";

export class Rover {
    gridSize: Grid;
    currentPosition: RoverPosition;
    instructions: string;
    inBounds: boolean;

    constructor(gridSize: Grid, currentPosition: RoverPosition, instructions: string) {
        this.gridSize = gridSize;
        this.currentPosition = currentPosition;
        this.instructions = instructions;
        this.inBounds = true;
    }

    getInBounds() {
        return this.inBounds;
    }

    navigate() {
        for(var i = 0; i < this.instructions.length; i++){
            this.boundsCheck();
            switch(this.instructions[i]) {
                case "L":
                    this.rotateLeft();
                    break;
                case "R":
                    this.rotateRight();
                    break;
                case "M":
                    this.move();
                    break;
            }

            this.boundsCheck();
            if(!this.getInBounds()){
                break;
            }
        }

        if(this.getInBounds()) {
            console.log(this.currentPosition.printPosition());
        }
    }

    rotateLeft() {
        var currentDirection = this.currentPosition.getDirection();
        
        switch(currentDirection) {
            case "N":
                this.currentPosition.setDirection("W");
                break;
            case "E":
                this.currentPosition.setDirection("N");
                break;
            case "S":
                this.currentPosition.setDirection("E");
                break;
            case "W":
                this.currentPosition.setDirection("S");
                break;
        }
    }

    rotateRight() {
        var currentDirection = this.currentPosition.getDirection();
        
        switch(currentDirection) {
            case "N":
                this.currentPosition.setDirection("E");
                break;
            case "E":
                this.currentPosition.setDirection("S");
                break;
            case "S":
                this.currentPosition.setDirection("W");
                break;
            case "W":
                this.currentPosition.setDirection("N");
                break;
        }
    }

    move() {
        var currentDirection = this.currentPosition.getDirection();

        switch(currentDirection) {
            case "N":
                this.currentPosition.setY(this.currentPosition.getY() + 1);
                break;
            case "E":
                this.currentPosition.setX(this.currentPosition.getX() + 1);
                break;
            case "S":
                this.currentPosition.setY(this.currentPosition.getY() - 1);
                break;
            case "W":
                this.currentPosition.setX(this.currentPosition.getX() - 1);
                break;
        }
    }

    boundsCheck() {
        
        //Checks if rover is within grid
        if(((this.currentPosition.getX() || this.currentPosition.getY()) < 0) || (this.currentPosition.getX() > this.gridSize.getWidth()) || (this.currentPosition.getY() > this.gridSize.getHeight())) {
            this.inBounds = false;

            console.error("Out of Bounds Rover with Position " + 
            this.currentPosition.getX() + ", " + this.currentPosition.getY() +
            "\nGrid Size: " + this.gridSize.getWidth() + ", " + this.gridSize.getHeight());
        }
    }
}