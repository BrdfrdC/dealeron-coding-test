import { Grid } from "../class/grid";
import { Rover } from "../class/rover";
import { RoverPosition } from "../class/roverposition";

const testGrid = new Grid(2, 2);

describe("Testing RoverPosition Class", () => {
    test("X = 0 when empty string is passed", () => {
        const testPosition = new RoverPosition(NaN, NaN, "");
        expect(testPosition.getX()).toBe(0);
    });
    test("Y = 0 when empty string is passed", () => {
        const testPosition = new RoverPosition(NaN, NaN, "");
        expect(testPosition.getY()).toBe(0);
    });
    test("Direction = N when empty string is passed", () => {
        const testPosition = new RoverPosition(NaN, NaN, "");
        expect(testPosition.getDirection()).toBe("N");
    });
    test("Position should change when given valid commands", () => {
        const testPosition = new RoverPosition(0, 0, "N");
        const testRover = new Rover(testGrid, testPosition, "MRMLM");
        testRover.navigate();
        expect(testPosition.printPosition()).toBe("1 2 N");
    });
    test("Position shouldn't change when given no commands", () => {
        const testPosition = new RoverPosition(0, 0, "N");
        const testRover = new Rover(testGrid, testPosition, "");
        testRover.navigate();
        expect(testPosition.printPosition()).toBe("0 0 N");
    });
    test("Position shouldn't change when given invalid commands", () => {
        const testPosition = new RoverPosition(0, 0, "N");
        const testRover = new Rover(testGrid, testPosition, "ABC");
        testRover.navigate();
        expect(testPosition.printPosition()).toBe("0 0 N");
    });
    test("Position shouldn't change when given invalid direction", () => {
        const testPosition = new RoverPosition(0, 0, "X");
        const testRover = new Rover(testGrid, testPosition, "MMRMMLM");
        testRover.navigate();
        expect(testPosition.printPosition()).toBe("0 0 X");
    });
});