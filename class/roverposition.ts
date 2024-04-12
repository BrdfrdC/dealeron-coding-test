export class RoverPosition {
    x: number;
    y: number;
    direction: string;

    constructor(x: number, y: number, direction: string) {
        this.x = x || 0;
        this.y = y || 0;
        this.direction = direction || "N";
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getDirection() {
        return this.direction;
    }

    setX(newX) {
        this.x = newX;
    }

    setY(newY) {
        this.y = newY;
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    printPosition() {
        return this.getX() + " " + this.getY() + " " + this.getDirection();
    }
}