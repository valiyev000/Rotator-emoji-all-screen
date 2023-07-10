# Rotator-emoji-all-screen

This repository contains a web page that enables the rotation of emoji elements based on the movement of the mouse cursor.

## Usage

To use this web page, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Move your mouse cursor within the web page to observe the rotation of the emoji elements.

## Description

The web page utilizes JavaScript and HTML to achieve the rotating effect of the emoji elements. When the mouse cursor moves, the `mousemove` event is triggered, and the rotation calculations take place for each emoji element. The rotation is determined based on the position of the cursor relative to the emoji element.

The following calculations are performed for each emoji element:

- The `yPosition` variable represents the vertical position of the cursor relative to the emoji element's top-left corner.
- The `xPosition` variable represents the horizontal position of the cursor relative to the emoji element's top-left corner.
- The `getBoundingClientRect()` method is used to obtain the pixel values representing the distance between the emoji element and the browser's edges.
- The `offsetHeight` and `offsetWidth` properties are used to calculate the center point of the emoji element for rotation purposes.
- The `transform` CSS property is updated to apply the rotation effect based on the `yPosition` and `xPosition` values, within certain constraints to limit the rotation to a maximum of 85 degrees in each direction.

Please note that the rotation effect is limited to angles within the range of -85 degrees to 85 degrees to ensure a visually pleasing result. This limitation prevents excessive rotation that may occur on larger screens or with faster mouse movements.

Feel free to modify the code to suit your requirements or integrate it into your own projects.

## Screenshot

![Rotator-emoji-all-screen](screenshot-final.gif)

