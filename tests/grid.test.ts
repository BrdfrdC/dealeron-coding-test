import { Grid } from "../class/grid";

describe("Testing Grid Class", () => {
    test("Width = 0 when empty string is passed", () => {
        const testGrid = new Grid(NaN, NaN);
        expect(testGrid.getWidth()).toBe(0);
    });
    test("Height = 0 when empty string is passed", () => {
        const testGrid = new Grid(NaN, NaN);
        expect(testGrid.getHeight()).toBe(0);
    });
});