# SAUCER - Create it, Share it, Play it !

## What is it
SAUCER stands for "__S____A__ucer is the __U__ltimate musi__C__ cr__E__ato__R__"
SAUCER is a tool to create, edit, and share music together.

## Goal
The goal of this project is to allow the users to create, edit and share sheet
musics easly and in a collaboratively way by using a simple drag and drop system. 
The music can be shared by mail and other social network, be played using the player and exported in various format.
Friends can comment parts of the music and give feedbacks.

## Developpement stage
My developpement is focusing on one music instrument, bagpipe, because I master
it. I'm working that for guys can implement easly your favourite instrument.

The steps are the following:

Stage 0 - Prerequisites
  - Create a workflow using the technlogies listed bellow.

Stage 1 - The basics
  - Create a basic interface using real time collaboration.
  - Simple creator to create  small sheet musics.
  - Save and load the music in the storage API.

Stage 2 - Deepen the main goals.
  - Much more complexe music and a more robust editor (let's focus and the main point, the editor)
  - Comment on music.
  - Invite friend.

Stage 3 - Let's make it attractive
  - Review the design.
  - Add a music player.
  - Basic exportation (PDF)

Stage 4 - The bonus
  - Share on social media, mail...
  - Export in multiple format (and format for existing editors).
  - Export sound in multiple format (mp3, midi, wav...).

## Technologies

Back End
  - NodeJS, ReactServer, Helmet, Express (since we use external API, we only 
  need a simple http server).

Front End
  - react-translate-component to translate the app.
  - React (fast data changing and fast render).
  - Jest (is using by facebook for unit test).
  - Web font or svg for drawing music notes.

MiddleWare
  - Relay (for retrieve datas from various API in a consistent way)

API
  - Google Realtime API for the real time collaboration.
  - Google drive API as the storage API.

Tools
  - Gitflow for a concistent git workflow
  - Webpack as a project builder.
  - Babel to transform new javascript into old one.
  - JSLint to have a consistent code writing.
  - JSDoc for the documentation.

## Reflexion and discussion
Share your creation is important and a "system" for share, rate, and comment  your creation with 
the world would be good (like soundcloud).

Saucer is very Google related (because of the facilities of theses API).

## Collaboration
Any pull request, issue, idea or other are welcomed, don't be shy !
Any graphist is also welcomed for a logo or other stuff (even a basic one).


## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
