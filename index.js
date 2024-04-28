import inquirer from "inquirer";
//Asking question from users through inquirer
const answer = await inquirer.prompt([
    { message: "Enter firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter secondNumber", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
//conditional statement If-Else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtractions") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
