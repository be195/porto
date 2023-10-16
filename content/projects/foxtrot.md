# foxtrot
foxtrot started as a personal alternative to other Discord applications that
utilize "bots" to play audio in the voice channels. It was originally called
"glowing memory", but got rebranded twice in 2022-2023. The bot was made to be
free for everyone, hence it's open source, too.

- Website: https://foxtrot.litterbin.dev/
- GitHub: https://github.com/LitterbinCollective/foxtrot.ts

## Complexity
Reasons why this project is complex.

### Lack of a voice helper
One of the things that makes this project complex is the unavailability of a
proper voice module (or helper) for
[Detritus.js](https://github.com/detritusjs/client/) library. Although it was
absent, it actually helped the development of this bot. Altering of the audio
in real time was one of the wanted things that was implemented mostly because
of foxtrot's own voice module.

### Audio mixer
Audio mixer is used for mixing short audio clips and either silence or
the currently playing audio. 2 or more versions were made, and the current
one is written in C++, because it's much faster in comparison to a mixer
made with JavaScript.

## Branding
I started off having a robot as the face of the project ("glowing memory" at that
time). I then rebranded it to "catvox" in 2022, but, because of biased thoughts
and personal favoring of the new name, I rebranded it again in the same year to
"foxtrot" and started using a fox as the icon.
:vuevideo{src="/videos/haikuproj..mp4"}
![foxtrot](/images/abstract.png)