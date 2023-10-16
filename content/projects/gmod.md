# Garry's Mod servers

## Meta Construct
I joined Meta Construct's development team in 2018.

### Design work
![televator](/images/televator.jpg)

todo: insert more photos

### Artboard
I have made "Artboard" for Meta Construct. It allows players to draw
on the screen in-game. It was inspired by [pxls.space](https://pxls.space/)
and [r/place](https://reddit.com/r/place). It resets both the image and the
palette every 1st and 15th day of the month. You can view the current state
of the board here: https://artboard.metastruct.net/.

The API was made with Node.JS and initially was in plain JavaScript. Then I
rewrote it in TypeScript. Currently it is open-source and you can view the
source code here: https://github.com/Metastruct/artboard-api/.

![artboard](/images/artboard.jpg)

### Metaluvit
::alert{type="warning"}
Despite the fact that some of the code may not be clean, this was one of
my starting points as a developer, and I have been improving ever since.
::

Metaluvit was an application that utilized a Discord bot and an IRC
connection to relay chat communication from in-game and said platforms. It
is open source and you can view the source code here:
https://github.com/Metastruct/metaluvit/tree/master-preneutering.

```
Discord <-> IRC <-> In-Game
   ↑                   |
   ╰-------------------╯
```

Before I was given the developer rank, it did not have the core features, so
[I kickstarted it](https://github.com/Metastruct/metaluvit/pull/1).

## CrossChat
CrossChat is an addon that allows the servers to communicate, giving the
players ability to see what the other players in the other servers are
talking.

Although the support was dropped because we do not work on it anymore, I
am sure that it still can work (with or without modifications.) That is
because, instead of handling the communication ourselves, like some of
the other addons with the same idea, we decided that it would be the best
to use the luasocket library and implement both the server protocol and
the clients for it. This way it is:
- more private;
- less hassle for customers, who are going to use this addon even if the
support for CrossChat was dropped;
- less hassle for us, since in case of server migration we wouldn't have
to set something up for CrossChat and update it to make it work again.

https://www.gmodstore.com/market/view/crosschat-communicate-with-players-on-another-server

## Re-Dream
::alert{type="warning"}
Despite the fact that some of the code may not be clean, this was one of
my starting points as a developer, and I have been improving ever since.
::
Re-Dream was an alternative to Meta Construct. I was involved in its
development from 2017. It is open source: https://github.com/Re-Dream/.