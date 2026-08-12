# 8 Month Anniversary Website — Version 2

This is a polished HTML/CSS/JS anniversary template inspired by the supplied birthday-website recording, adapted into an 8-month anniversary story.

## Add your photos

Put your photos in:

assets/photos/

Use these filenames:

photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg
photo6.jpg
photo7.jpg
photo8.jpg
photo9.jpg
photo10.jpg
photo11.jpg

You can use PNG/WebP too; if you do, update the filenames in index.html.

## Add your song

Put your MP3 at:

assets/music/our-song.mp3

Then press the music button on the website.

## Change the anniversary settings

At the top of script.js:

const CONFIG = {
  anniversaryNumber: 8,
  partnerName: "My Love",
  musicFile: "assets/music/our-song.mp3"
};

## Change the text

All visible text is directly inside index.html, so you can edit every message without touching JavaScript.

## Run

Open index.html, or use VS Code Live Server.

## Deploy to Vercel

Upload this folder to GitHub and import the repository into Vercel as a static site. No build command is required.

## Note

The visual treatment is an original recreation inspired by the supplied recording, not an extraction or copy of the deployed site's source code.
