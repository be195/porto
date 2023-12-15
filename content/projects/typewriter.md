---
thumb: 'typewriter.png'
---

# Typewriting games
Starting from 2021, I have been working on typewriting games
out of my own volition.

## 2021 version
This was quickly abandoned in the same year, as I forgot about
it.

I recycled my helper/engine from [filerecv-game](/projects/misc#filerecv-game)
and started making my game from that. There is only one level, and
it does not go anywhere beyond that.

I drew all assets using Krita and recorded myself hitting keycaps
on my keyboard using Audacity.

Live preview: https://nahuy.life/typewriter/

![typewriter splash screen](/images/thumbs/typewriter.png)

## 2022 version
I began working on it in 2022 and is still in development. I wish
not to disclose any close details.

I am drawing assets using Aseprite, designing sound effects and
making music using FL Studio and/or Tenacity.

### Engine
I decided to create another helper/engine, which would utilize
parent-child system of states/components.

Every component can have its own events for both the mouse and the
keyboard, as well as its own bounding box. Components can be used as
"entities", "enemies" and "hitboxes", as well as buttons, text, or
other GUI elements.

A state is based on the component object. It can be utilized by the
"container" to render the viewport. The "container" can render only
one state at a time.

Before I knew that I would be actually dedicating my time towards
this game, I have released it to the public. It can be accessed
here: https://github.com/be195/eng.ts.
