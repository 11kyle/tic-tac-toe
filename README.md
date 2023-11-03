# Tic-Tac-Toe

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges](#challenges)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Tic-tac-toe game built for the web. Responsive layout for all screen sizes and devices. TypeScript used for game logic and components.

### Screenshot

![](./tic-tac-toe_desktop.png)

### Links

- Solution URL: [Repo](https://github.com/11kyle/tic-tac-toe)
- Live Site URL: [Preview](https://tic-tac-toe-blond-kappa-84.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS (Tailwind)
- Flexbox & Grid
- Mobile-first workflow
- [Figma] (https://figma.com/) - Design
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Headless UI](https://headlessui.com/) - Components

### Challenges

Game logic - A couple early bugs here. First bug was with the useEffect hook. The hook envoke a function to check for a win after every player move (or actually after every square was marked). Within the function, the state of the square was also updated which caused the useEffect to trigger the function again. Fixed by exiting the function if a winner had already been declared.

Another bug was within a for loop. The loop was exiting before intended. Fixed by updating a condition (if) statement with the correct comparison.

### Continued development

Animations - I need to add animations to this game.

### Useful resources

- [Stack Overflow](https://www.stackoverflow.com) - Possible the best overall place to get help from the community. You can find a solution to every problem you face and if not, post your own.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - MDN Web Docs are great for reminding you everything you forget. I often use it to look up attributes for html tags and JavaScript methods.
- [Tailwind CSS](https://www.tailwindcss.com) - This is the documentation for TailwindCSS. It's always open when I use it as my CSS framework.

## Author

- Website - [Kyle](https://11kyle.github.io/my-portfolio/)
- Frontend Mentor - [@11kyle](https://www.frontendmentor.io/profile/11kyle)