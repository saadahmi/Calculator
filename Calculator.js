import inquirer from "inquirer";
let getCalculatorInput = async () => {
    let operation = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Choose an operation",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exit"],
        },
    ]);
    if (operation.operation === "Exit") {
        console.log("Exiting calculator. Goodbye!");
        process.exit(0);
    }
    let num1 = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter the first number:",
        },
    ]);
    let num2 = await inquirer.prompt([
        {
            name: "num2",
            type: "number",
            message: "Enter the second number:",
        },
    ]);
    performOperation(operation.operation, num1.num1, num2.num2);
};
let performOperation = (operation, num1, num2) => {
    let result;
    switch (operation) {
        case "Addition":
            result = num1 + num2;
            break;
        case "Subtraction":
            result = num1 - num2;
            break;
        case "Multiplication":
            result = num1 * num2;
            break;
        case "Division":
            if (num2 !== 0) {
                result = num1 / num2;
            }
            else {
                console.log("Error: Cannot divide by zero.");
                getCalculatorInput();
                return;
            }
            break;
        default:
            console.log("Invalid operation.");
            getCalculatorInput();
            return;
    }
    console.log(`Result of ${operation}: ${result}`);
    getCalculatorInput();
};
getCalculatorInput();
