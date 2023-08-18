const CHOICE = {
    Rock: 0,
    Paper: 1,
    Scissor: 2
}

function getComputerChoice() {
    let compChoice = Math.round(Math.random() * 2);
    return compChoice;
}

function getUserChoice() {
    let userInput = prompt("Choose: rock, paper, scissors?");
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case "rock":
            return CHOICE.Rock;
            break;
        case "paper":
            return CHOICE.Paper;
            break;
        case "scissors":
            return CHOICE.Scissor;
            break;
        default:
            return "Invalid choice. Please reload.";
            break;
    }
}

function displayChoice(choice) {
    switch (choice) {
        case CHOICE.Rock:
            return "Rock";
            break;
        case CHOICE.Paper:
            return "Paper";
            break;
        case CHOICE.Scissor:
            return "Scissor";
            break;
        default:
            return "Something went wrong."
            break;
    }
}

function getResult(compChoice, userChoice) {
    if (compChoice == CHOICE.Rock) {
        switch (userChoice) {
            case CHOICE.Rock:
                return "Tie";
                break;
            case CHOICE.Paper:
                return "User wins!"
                break;
            case CHOICE.Scissor:
                return "Computer wins!";
                break;
            default:
                return "Something went wrong."
                break;
        }
    }
    else if (compChoice == CHOICE.Paper) {
        switch (userChoice) {
            case CHOICE.Rock:
                return "User wins!";
                break;
            case CHOICE.Paper:
                return "Tie"
                break;
            case CHOICE.Scissor:
                return "Computer wins!";
                break;
            default:
                return "Something went wrong."
                break;
        }
    }
    else if (compChoice == CHOICE.Scissor) {
        switch (userChoice) {
            case CHOICE.Rock:
                return "User wins!";
                break;
            case CHOICE.Paper:
                return "Computer wins!"
                break;
            case CHOICE.Scissor:
                return "Tie";
                break;
            default:
                return "Something went wrong."
                break;
        }
    }
    else {
        return "Something went wrong."
    }
}

function playRound() {
    let compChoice = getComputerChoice();
    console.log("Computer chose: " + displayChoice(compChoice));
    let userChoice = getUserChoice();
    console.log("User choice: " + displayChoice(userChoice));
    console.log(getResult(compChoice, userChoice));
}