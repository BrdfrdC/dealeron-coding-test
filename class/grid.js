"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(width, height) {
        this.width = width || 0;
        this.height = height || 0;
    }
    Grid.prototype.getWidth = function () {
        return this.width;
    };
    Grid.prototype.getHeight = function () {
        return this.height;
    };
    return Grid;
}());
exports.Grid = Grid;
