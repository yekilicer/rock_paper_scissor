// global variables
const choices = ["rock", "paper", "scissors"];
let player_wins = 0;
let computer_wins = 0;
let rounds_played = 0;

let player_selection = "";
let computer_selection = "";

const selection_highlight_duration = 600;


function play(e) {
    // multiple selections in a short period of time causes highlight bug.
    if (player_selection !== "") return;

    // get element references
    player_selection = e.target.parentNode;

    computer_selection = document.querySelector(`.computer-container .${choices[Math.floor(Math.random() * choices.length)]}`).parentNode;

    
    evalRound(player_selection, computer_selection);
    updateScores();
    highlightSelections();
    setTimeout(resetSelections, selection_highlight_duration);
}

function highlightSelections(){
    player_selection.id = 'player-selected';
    computer_selection.classList.add('computer-selected');
    setTimeout(() => player_selection.removeAttribute('id'), selection_highlight_duration);
    setTimeout(() => computer_selection.classList.remove('computer-selected'), selection_highlight_duration);
}

function resetSelections() {
    player_selection = "";
    computer_selection = "";
}

function evalRound(player_selection, computer_selection)
{
    player_selection = player_selection.lastElementChild.className;
    computer_selection = computer_selection.lastElementChild.className;

    if (player_selection === "rock")
    {
        if (computer_selection === "scissors") player_wins++;
        else if (computer_selection === "paper") computer_wins++;
    }
    
    else if (player_selection === "paper")
    {
        if (computer_selection === "rock") player_wins++;
        else if (computer_selection === "scissors") computer_wins++;
    }
    
    else if (player_selection === "scissors")
    {
        if (computer_selection === "rock") player_wins++;
        else if (computer_selection === "paper") computer_wins++;
    }

}

function updateScores() {
    const score_board = document.querySelector('.scoreboard');
    const round_result = document.querySelector('round-result');
    score_board.textContent = `${player_wins} : ${computer_wins}`;
}

const player_selections = document.querySelectorAll('.player-container .selection');

player_selections.forEach(selection => { selection.addEventListener('click', play)});
