# avochato_takehome

## Part 1 - React.js

### Installation

`npm install --prefix avochato_part_1`

`npm start --prefix avochato_part_1`

### Process

My thinking for this portion of the challenge was to keep state at the top level component.  Here, I'd track the current order of the images and logic for click-handlers.  Child components recieve props through threading and act purely as presentation components.  Upon changes to `order`, lower-level components will update accordingly.

### Features

* Left / Right Rotations
* Rotation to Selected Image
* Desktop / Mobile friendly Resizing

### Challenges

* Deploying to Github Pages
* Animations

## Part 2 - Vanilla JS

<<<<<<< HEAD
### [DEMO](https://gradyzhu.github.io/avochato_takehome/)
=======
### [Live Demo](https://gradyzhu.github.io/avochato_takehome/)
>>>>>>> 06e5b2a5ce8b02c54f93a6802a099df8650e5cca

### Process

#### A single rotation

The creation of this carousel required me to track the `imageOrder`, `imagePositions`, and the `rotationCount` that have passed.  

The logic behind the rotations can be simplified into 3 steps.

1. Move all elements in a direction by a number of pixels (the `offset` or width of the photo).

2. Depending on direction, shift the front most element to the back or vice versa.

3. Reset the interval.

#### Rotating to Image

My strategy to rotate to a specific image can be broken down into 2 steps.

1. Find the number of rotations `n` from center.
2. Execute a rotation `n` number of times.

### Challenges

Images transform dynamically, moving in X space while also rotating infinitely.  After rotating a full cycle, images would begin to pass over each other.

I attempted several solutions using the `transitionend` event with no success and settled for a solution that involves adding and removing CSS properties to elements.  Specifically, i targeted opacity to prevent disrupting the HTML flow.  This was not an ideal solution but the best one I could implement given the time frame.

### Features

* Interval Rotations
* Transform Animations
* Left / Right Rotations
* Rotation to Selected Image
* Desktop / Mobile friendly Resizing
