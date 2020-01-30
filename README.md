# IMDb Netflix Rating Chrome Extension

## Overview

This repository contains the source code for a chrome extension that automatically displays IMDb ratings of video titles in-site when browsing Netflix, by locally manipulating the DOM tree of Netflix. 

## Demo
<a href="http://www.youtube.com/watch?feature=player_embedded&v=WK7yO8BC43A
" target="_blank"><img src="http://img.youtube.com/vi/WK7yO8BC43A/0.jpg" 
alt="Demo Video on Youtube" width="240" height="180" border="10" /></a>
## How it Works

### How are IMDb ratings retrieved: 

Through API calls to the Open Movie Database API: https://www.omdbapi.com/
Note that this API requires an API key, which I have removed from the scripts for privacy reasons. If you want to play around with the extension, please register for an API key for free at the linked website.

### How are the ratings visualized on-screen:

When the user accesses Netflix through Chrome, a background script is executed that traverses through the HTML DOM tree of the current tab searching for HTML tags that specify movie and tv show titles. Whenever such a tag is encountered, a new HTML child element is appended that contains the IMDb rating.
