const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().replace("\\r", "").trim().split('\n');

function calculatePosition(submarineCommands) {

    let horizontalPosition = 0, depth = 0;

    for (let command of submarineCommands) {
        let position = command.split(" ")[0];
        let units = parseInt(command.split(" ")[1]);

        switch (position) {
            case "forward":
                horizontalPosition = horizontalPosition + units
                break;
            case "up":
                depth = depth - units
                break;
            case "down":
                depth = depth + units
                break;
        }
    }

    return horizontalPosition * depth
}

function calculateNewInterpretation(submarineCommands) {

    let horizontalPosition = 0, depth = 0, aim = 0;

    for (let command of submarineCommands) {
        let position = command.split(" ")[0];
        let units = parseInt(command.split(" ")[1]);

        switch (position) {
            case "forward":
                horizontalPosition = horizontalPosition + units
                depth = depth + (units * aim)
                break;
            case "up":
                aim = aim - units
                break;
            case "down":
                aim = aim + units
                break;
        }
    }

    return horizontalPosition * depth

}