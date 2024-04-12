"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
var Rover = /** @class */ (function () {
    function Rover(gridSize, currentPosition, instructions) {
        this.gridSize = gridSize;
        this.currentPosition = currentPosition;
        this.instructions = instructions;
        this.inBounds = true;
    }
    Rover.prototype.getInBounds = function () {
        return this.inBounds;
    };
    Rover.prototype.navigate = function () {
        for (var i = 0; i < this.instructions.length; i++) {
            this.boundsCheck();
            switch (this.instructions[i]) {
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
            if (!this.getInBounds()) {
                break;
            }
        }
        if (this.getInBounds()) {
            console.log(this.currentPosition.printPosition());
        }
    };
    Rover.prototype.rotateLeft = function () {
        var currentDirection = this.currentPosition.getDirection();
        switch (currentDirection) {
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
    };
    Rover.prototype.rotateRight = function () {
        var currentDirection = this.currentPosition.getDirection();
        switch (currentDirection) {
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
    };
    Rover.prototype.move = function () {
        var currentDirection = this.currentPosition.getDirection();
        switch (currentDirection) {
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
    };
    Rover.prototype.boundsCheck = function () {
        //Checks if rover is within grid
        if (((this.currentPosition.getX() || this.currentPosition.getY()) < 0) || (this.currentPosition.getX() > this.gridSize.getWidth()) || (this.currentPosition.getY() > this.gridSize.getHeight())) {
            this.inBounds = false;
            console.error("Out of Bounds Rover with Position " +
                this.currentPosition.getX() + ", " + this.currentPosition.getY() +
                "\nGrid Size: " + this.gridSize.getWidth() + ", " + this.gridSize.getHeight());
        }
    };
    return Rover;
}());
exports.Rover = Rover;
