const movesrps = ["rock", "paper", "scissors"]
const movesrpsls = ["rock", "paper", "scissors", "lizard", "spock"]
export function rps(shot) {
    let opponent = movesrps[Math.floor(Math.random() * movesrps.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opponent};
    }
    
    let player = shot.toLowerCase();

    if (!movesrps.includes(player)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opponent === player) {
        result = "tie"
    }
    else if (player === "rock" && opponent === "scissors" ||
             user === "scissors" && opponent === "paper" || 
             user === "paper" && opponent === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: player,
            opponent: opponent,
            result: result };
}

export function rpsls(shot) {
    let opponent = movesrpsls[Math.floor(Math.random() * movesrpsls.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opponent};
    }
    
    let player = shot.toLowerCase();

    if (!movesrpsls.includes(player)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opponent === player) {
        result = "tie"
    }
    else if (player === "rock" && opponent === "scissors" || user === "scissors" && opponent === "paper" || user === "paper" && opponent === "rock") {
        result = "win"
    }
    else if (player === "rock" && opponent === "lizard" || 
            player === "lizard" && opponent === "spock" ||
            player === "spock" && opponent === "scissors" || user === "scissors" && opponent === "lizard" || user === "lizard" && opponent === "paper" || user === "paper" && opponent === "spock" || user === "spock" && opponent === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: user,
            opponent: opponent,
            result: result };
}