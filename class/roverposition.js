"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoverPosition = void 0;
var RoverPosition = /** @class */ (function () {
    function RoverPosition(x, y, direction) {
        this.x = x || 0;
        this.y = y || 0;
        this.direction = direction || "N";
    }
    RoverPosition.prototype.getX = function () {
        return this.x;
    };
    RoverPosition.prototype.getY = function () {
        return this.y;
    };
    RoverPosition.prototype.getDirection = function () {
        return this.direction;
    };
    RoverPosition.prototype.setX = function (newX) {
        this.x = newX;
    };
    RoverPosition.prototype.setY = function (newY) {
        this.y = newY;
    };
    RoverPosition.prototype.setDirection = function (newDirection) {
        this.direction = newDirection;
    };
    RoverPosition.prototype.printPosition = function () {
        return this.getX() + " " + this.getY() + " " + this.getDirection();
    };
    return RoverPosition;
}());
exports.RoverPosition = RoverPosition;
