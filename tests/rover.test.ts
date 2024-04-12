import { Grid } from "../class/grid";
import { Rover } from "../class/rover";
import { RoverPosition } from "../class/roverposition";

const testGrid = new Grid(2, 2);

describe("Testing Rover Class", () => {
    test.each`
        x | y | direction
        ${0} | ${0} | ${"S"}
        ${0} | ${0} | ${"W"}
        ${2} | ${2} | ${"N"}
        ${2} | ${2} | ${"E"}`
    ("Rover.getInbounds() returns false when rover moves out of bounds.", ({x, y, direction}) => {
        const testPosition = new RoverPosition(x, y, direction);
        const testRover = new Rover(testGrid, testPosition, "M");
        testRover.navigate();
        expect(testRover.getInBounds()).toBeFalsy;
    });

    test.each`
        x | y | direction
        ${0} | ${0} | ${"S"}
        ${0} | ${0} | ${"W"}
        ${2} | ${2} | ${"N"}
        ${2} | ${2} | ${"E"}`
    ("Rover.getInbounds() remains false when out of bounds rover tries to move back to the grid.", ({x, y, direction}) => {
        const testPosition = new RoverPosition(x, y, direction);
        const testRover = new Rover(testGrid, testPosition, "MRRM");
        testRover.navigate();
        expect(testRover.getInBounds()).toBeFalsy;
    });

    test.each`
        x | y 
        ${0} | ${-1}
        ${-1} | ${0}
        ${2} | ${3}
        ${3} | ${2}`
    ("Rover.getInbounds() returns false when rover placed out of bounds.", ({x, y}) => {
        const testPosition = new RoverPosition(x, y, "N");
        const testRover = new Rover(testGrid, testPosition, "R");
        testRover.navigate();
        expect(testRover.getInBounds()).toBeFalsy;
    });

    test.each`
        x | y | direction
        ${0} | ${-1} | ${"N"}
        ${-1} | ${0} | ${"E"}
        ${2} | ${3} | ${"S"}
        ${3} | ${2} | ${"W"}`
    ("Rover.getInbounds() remains false when rover placed out of bounds tries to move back to the grid.", ({x, y, direction}) => {
            const testPosition = new RoverPosition(x, y, direction);
            const testRover = new Rover(testGrid, testPosition, "M");
            testRover.navigate();
            expect(testRover.getInBounds()).toBeFalsy;
    });
  });