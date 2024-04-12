export class Grid {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width || 0;
        this.height = height || 0;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}