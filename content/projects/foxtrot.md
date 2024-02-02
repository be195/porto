---
thumb: 'foxtrot.png'
---

# foxtrot
foxtrot started as a personal alternative to other Discord applications that
utilize a bot user to play audio in the voice channels. It was originally called
"glowing memory", but got rebranded twice in 2022-2023. The bot was made to be
free for everyone, hence it's open source, too.

- Website: https://foxtrot.litterbin.dev/
- Source code: https://github.com/LitterbinCollective/foxtrot.ts

## Complexity
Reasons why this project is complex.

### Lack of a voice helper
The library that I've used, [Detritus.js](https://github.com/detritusjs/client/),
is pretty barebones when it comes specifically to voice. The only thing that it
can do is encode PCM samples to Opus (if specified), create packets out of them
and send them through the Discord voice server connection. However, its lack of
helpers that can play the audio for you (see [discord.js/voice](https://github.com/discordjs/discord.js/tree/main/packages/voice))
actually helped the development of this bot. Altering of the audio in real time was
one of the things that I wanted to implement.

### Audio mixer
Audio mixer is used for mixing short audio clips and either silence or
the currently playing audio. 2 or more versions were made, and the current
one is written in C++, because it's much faster in comparison to a mixer
made in JavaScript.

## Branding
I started off having a robot as the face of the project ("glowing memory" at that
time). I then rebranded it to "catvox" in 2022, but, because of biased thoughts
and personal favoring of the new name, I rebranded it again in the same year to
"foxtrot" and started using a fox as the icon.
:vuevideo{src="/videos/haikuproj..mp4"}
![abstract design showing foxtrot in the middle](/images/abstract.png)