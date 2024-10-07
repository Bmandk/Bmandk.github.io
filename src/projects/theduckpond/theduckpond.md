![The Duck Pond Screenshot](/projects/theduckpond/theduckpond-screenshot.jpg)

**Roles:**
* Project Manager
* Game Designer
* Programmer

**Game Description**  
The Duck Pond is a condensed and relaxing idle game, focused on creating a short handcrafted experience with an ending. Throw food to attract different types of duck, read about them in the duckopedia, and maybe you'll discover the epic giga duck! 

**Project Description**  

This was a small project between me and [Miro Brodlova](https://chonkyplonki.github.io/ChonkyPlonki.Website/) while working at Unity. Together we call ourselves Quack People. It started as a small prototype at Nordic Game Jam 2024.
We had a couple of goals when we initially set out to develop the game
* Finish a game
* Finish within a month
* Publish to Steam
We ended up succeeding in 2 out of 3 of the goals, and as an added bonus, the game was played by many more people than we anticipated.
We initially set out to finish within a month, but due to playtesting feedback, we decided to push our internal deadline a month. So we spent two months creating the game, while we both tended to our fulltime jobs.
We felt the game would improve vastly from that extra month, and we did not have any external pressure to release (no published release date, no publishers etc).
I learned a lot about everything related to game development, since we were only two people. That meant I had to wear a lot of different hats, including project management, quality assurance, marketing etc.
Going through the process of taking a game from start to finish and even beyond taught me what it takes to release a game.

**Design Process**  
Since we had a goal of finishing within a month, managing scope was key in reaching that goal.
That was why it was perfect to kick off at Nordic Game Jam, since it allowed us a very constrained and focused timeframe to prototype.
We had already previously talked about making an idle game, and that was one of the initial prototypes I made during the gamejam.
As we decided on an idle game, we wanted to create an idle game that ended. It should respect the player's time by not being a grindy game, and you should be able to finish it within 3-6 hours of active gameplay (which is generally very short for an idle game).
We would rather focus on the experience of playing the game than being one of those that kept on going forever.

One thing I learned during the project, is that it takes a lot of time to get to the fun of an idle game. While we did have an initial concept that made the game unique as an idle game, that is only the hook.
It did not reflect the full player experience. That's because the experience of an idle game is tied heavily to the numbers. This is something that very specific to idle games, and if I had realized that earlier, I would also have focused more of my time on this earlier to be able to have more time to iterate on the player experience.

Once I realized the fact that the numbers were the essence, I got to work on creating the different duck types we wanted to have, and balancing them.
Since the scope was so small, we decided to design a very simple system. We limited ourselves to max 10 ducks. 
Creating and balancing the ducks was a iterative process, and involved a lot of math. I dived deep into exponential, potential, and logarithmic functions (among others). My main design tool here was a giant excel sheet ([available here](https://docs.google.com/spreadsheets/d/1lRAfwtQLSYt_UCSqE3LSxn9o-eWCVu3uxCVVqahvsc4/edit?usp=sharing&gid=847094992#gid=847094992)).
Since we wanted to keep the gametime fairly short, it was possible to map out the whole play experience based on how much time it should take to get various types of ducks. The sheet even has estimates for every single duck that the player buys through the game.
This was an essential balancing tool. Everything was calculated off of the stats for the ducks, so changing a single number for one of the ducks would update the sheet, and I'd be able to see the effects on the player experience instantly.
This allowed me to very quickly iterate on the whole game experience without even playing the game.
We ended up with 6 ducks, that had some interactions in their numbers to make the game interesting, rather than all of them simply increasing your money by more.
Usually you would develop tools in engine to help you test an idle game (such as save states or fast forwards), but due to the extreme constraints of time we prioritized other tasks, which is why the balancing sheet was so integral to the success of the game.

This did not come without drawbacks however:

1. There is a term that is sometimes thrown around for some games called "spreadsheet design" or "spreadsheet balancing". The meaning is that when playing the game, it can often feel like everything is the same, and there is little variety in the game.
This is true to some extent for The Duck Pond. Each duck essentially did the same thing, so buying one did not engage the player a lot.
I tried mitigating this by introducing interactions between different ducks, so that there was something more interesting going on when you get new ducks. The timing of unlocking a new duck was then the defining factor for creating a good player experience.
2. The overall game system was very simple. There weren't any interesting gameplay choices, and the majority of ducks was simply "give more money".
3. Due to the very simple system, most players would just buy the cheapest duck whenever they could. It would not really set you back anything to buy a duck, so there was no consequence to doing so. It was close to optimal to do this as well.

While these are some very valid critiques of the design of the game design, these were very deliberate choices to constrain the scope of development, both to reduce sprites needed, and to spend less time balancing the game.
Looking back, I would not change much about the game taking into account the learnings and time constraints we had.
The main thing I would do differently would be to start much earlier on defining the ducks and at least start with some good-enough values for the balance.

We did three rounds of playtesting. The first playtest was focused on usability and gameplay. We let people play the first 5 minutes of the game, and then went into asking questions.
We got some great feedback, and we validated that the game was actually fun (for the first 5 minutes at least). There weren't any glaring issues, so most of the feedback were smaller things that were fixable without completely changing the design.
This was somewhat lucky, as we didn't have much time to address fundamental issues with the game.
The second playtest was also in-person, and was mostly about validating the changes we had made based on the feedback from the first playtest. We found new players, as we wanted the initial reaction of someone playing the game for the first time.
The main piece of feedback this time was about communicating what the different ducks did. People were somewhat confused, since it was not really clear what they did.
While players get shown a popup when they get a new duck that explains it, players quickly forgot that. So we made the "Duckopedia" that allowed players to always check what any duck did whenever they wanted.
We did the final playtest, which was a take-home test. We had the whole game in there, with all the ducks and the end of the game as well. The purpose here was to test the whole game loop, and especially the balancing. We had both new players and players from the previous playtests.
We again validated most things, and made some small tweaks. People were still slightly confused about the ducks, but it was much better this time. Our general philosophy with UI here was to keep it as minimal as possible, and only add whenever needed.
So it was very understandable that players were confused at first, but we ended up being very explicit with this. This approach really helped us to keep the screen clean of clutter, and only add what is absolutely necessary.

This whole design process was an excellent iterative process. We learned things throughout the whole the whole process about the game design, which constantly fueled the next steps of the game. 
Below is a quick video we also released on TikTok to show the process of making the game in broad strokes.

<iframe type="text/html" src="https://www.youtube.com/embed/IYPJw65LvwI" frameborder="0" style="width: 100%; aspect-ratio: 16 / 9; margin: 10px;"></iframe>

**How To Get It**  
<iframe src="https://store.steampowered.com/widget/3067180/" frameborder="0" width="90%" height="190" style="display: block; margin: auto;"></iframe>

<iframe type="text/html" src="https://www.youtube.com/embed/nVnoU3N7h_I" frameborder="0" style="width: 100%; aspect-ratio: 16 / 9; margin: 10px;"></iframe>