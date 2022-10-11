# RPS Challenge
## About the project
The goal of this project is to create a Rock-Paper-Scissors game that takes two players. It is to be done using NodeJS for the server side, and EJS for the views. 
For this project I used a TDD approach. 
</br></br>

## Built with
NodeJS and EJS, Mocha for testing and Bootstrap and some CSS for styling. 
</br></br>

## Getting started
- First clone this project to your local machine.
- Run this command to install all the dependecies:
```
npm install
```
- To run the tests, use this command:
```
npm test
```
- To view and interact with project on your browser, use the following command and open localhost:3000:
```
npm start
```
</br>

## Problem Statement
Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

### Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )

### Domain model

| Object | Property    | Message             | Output  |
| ------ | --------    | -------             | ------  |
| Game   | player1     |                     |         |
|        | player2     |                     |         |
|        | result      | getResult()         | @string |
|        |             | round()             |         | 
|        | finalResult | getFinalResult()    | @string |
|        |             | finalWinner()       |         |
|        | options     |                     |         |
| Player | name        | getName()           | @string |
|        | score       | addScore()          |         |
|        |             | getScore()          | @number |
|        | choice      | playerChoice(choice)|         |
|        |             | getChoice()         | @string |

</br>

## Review
This was such a fun project to work on! It was my first contact with the server side of an app and I truly enjoyed it.\
If I was to do it again, I would spend more energy on the domain model, as I kept going back to modify it as I was producing my code, because I hadn't realised I would be needing something. 




