# foxtrot
foxtrot started as an alternative to other Discord applications that utilize bots
to play audio in the voice channels. It was originally called "glowing memory",
but got rebranded twice in 2022-2023. The bot was made to be free for everyone,
hence it's open source, too.

See more: https://foxtrot.litterbin.dev/

## Complexity
One of the things that makes this project complex is unavailability of a proper
voice module (or helper) for [Detritus.js](https://github.com/detritusjs/client/)
library. Though it was absent, it actually helped the development of this bot.
Changing audio in real time was one of the wanted things that was implemented
mostly because of foxtrot's own voice module.

Audio mixer that is used for mixing short audio clips and either silence or playing
audio. 2 or more versions were made, and the current one is written in C++, because
it's much faster in comparison to a mixer made with JavaScript.

## Branding
:vuevideo{src="/videos/haikuproj..mp4"}
![foxtrot](/images/abstract.png)