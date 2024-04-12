# Explanation:
I chose to create four classes. A main class, a class for the grid that represents the plateau, a class that keeps track of the rover's position, and a class to move the rover and check if it's within the grid. The code takes in input from a text file, which the user inputs the name of when the code runs. This project uses readline and fs for reading input, as well as jest for unit testing.

# Assumptions:
- The grid size is the full size of the plateau.
- If the rover moves out of the grid, it falls off the plateau and can't recover.
- If the rover's direction is blank, it is considered invalid input and an error will be thrown.
- The input file should be within the root directory of the project.

# How to run:
Once cloned, run the command `node main.js` in the terminal.