# RPS Challenge

Instructions
-------
To install and run this project on your machine, please follow these steps:
* Install node modules.
* Install nodemon.
* Install mocha.
* To run the tests, please use `npm test`.
* To see the project on the browser, please run `npm start` and open localhost:3000.





Challenge approach
-------
### Domain model and TDD
I started this project by doing an initial set-up of the folders and files I thought I was going to need. 
I then set-up a basic server that would send a string, just to check it was running correctly. 

Next, I worked on the domain model (it can be seen below). I identified I would need two classes, with a series of properties and methods each. As I've been developing my code, I have revisited the DM as I realised some things needed adjusting. 
I then TDDed the _player_ class. 

When I moved onto the _game_ class and started working on it, I realised I could go for the extended criteria (2 players) straightaway, so I modified my DM and TDDed with this approach in mind instead. 
While working on the _game_ tests, I realised I should make use of spies, so I did some research on chai spies and managed to get it to work. At this point, I hadn't realised yet I would need a _finalWinner()_ method in my _game_ class. 

To implement encapsulation, I wrote the properties as private on both classes. In _game_ I didn't write the _player_ properties to be private. My reasoning behind it is that the _player_ properties are private in the object, so it wouldn't be necessary for the property in _game_ to be private as well, although I'm not sure this is the right approach. 

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

### Routes TDD
Next, I moved onto my routes. I set-up the separate environments for testing and developing and wrote tests for each of the routes. I had to ask for help here as my tests were failing, even after writing the code and rendering on the browser. 

For this part of the project I wrote tests and ejs files before writing the route's js files. I took this approach so I could write into the test part of the text that would be rendered from the view file. 

On the _serverTest_ file I'm currently skipping one test as it fails and I can't figure out why. I'm almost certain the problem is in the test I wrote and not on the code, as the app works correctly on the browser. 

When I got to _finalResult_ route I realised I needed the extra method in game, so I test-drove it and then moved onto this route. 
I then tested and added a _not found_ route. I had to do some research on how to make it work with any unknown route. 

### Style
My next step was to add some style to my project. I did it using bootstrap as I'm not that confident with it and this seemed like a good opportunity to practice. 

### Extended criteria
Finally, I added the lizard and spock options to the game. I didn't add any further testing at this point as I didn't add any methods.

To include these two options, I extended the property _options_ in game by adding a lizard and spock keys. 
I then changed each option's object to have an array as each key's value, so I could add the extra winning and losing options. 
Then I changed the conditions in the method _round_ so they would match the new shape of _options_. Where before it checked if the values matched: 
```
comparator.winsTo === choiceP2
```
it now checks if the array includes the value:
```
comparator.winsTo.includes(choice2)
```
and the same logic for _losesTo_.
Lastly, I added the two new options in the _play_ view.

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9:30am Monday morning

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

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

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )
