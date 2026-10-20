# Ball and Dungeon | 球与地下城

[简体中文](./README.md) | English

A 2D maze adventure game built with JavaScript, p5.js, and p5.play as a team project for a programming practice course. Guide a ball through a dungeon with limited visibility, avoid monsters and radial bullet patterns, and reach the target area in the lower-right corner of the maze.

## Gameplay

- **Maze exploration**: Navigate a 31 × 31 grid, with walls and map boundaries restricting movement.
- **Limited visibility and lighting**: A distance-based overlay limits the player's view. Reaching a lamp expands visibility and adds a flickering effect.
- **Radial bullet patterns**: Bullets periodically travel outward from the center of the maze in 12 directions. Getting hit reduces health.
- **Moving monsters**: Monsters move around the map. Contact with a monster ends the game.
- **Teleportation**: Teleport points move the player to other locations, offering additional route options.
- **Win and loss conditions**: Reach the target area to win. Running out of health or encountering a monster results in a loss. The result screen displays the elapsed time.

## Controls

| Action | Input |
| --- | --- |
| Start the game | Hold down the mouse button on the start screen to let the ball fall into the dungeon |
| Move up | W |
| Move left | A |
| Move down | S |
| Move right | D |
| Restart | Press F5 or refresh the page |

The player starts with 12 health points. A desktop browser with a keyboard is recommended. If keyboard input does not respond, click the game page to focus it and switch your input method to English.

## Running Locally

This is a static web project. The required JavaScript libraries are included in `libraries/`, so no npm dependency installation or build commands are needed.

1. Download or clone the repository and open the game folder in VS Code.
2. Install the **Live Server** extension for VS Code.
3. Right-click `index.html` in the project root and select **Open with Live Server**.
4. Start playing in the browser window that opens.

Serve the game through a local HTTP server and preserve the original relative paths of all image, audio, and animation assets. Your browser may require a mouse interaction before allowing audio playback.

The project maintainer has checked the game locally and confirmed that it runs correctly.

## Project Structure

```text
ball-and-dungeon/
├── README.md           # Chinese documentation
├── README.en.md        # English documentation
├── index.html          # Web entry point and script loading
├── sketch.js           # Game flow, map, controls, lighting, bullets, and results
├── style.css           # Page styles
├── jsconfig.json       # JavaScript editor configuration
├── libraries/          # p5.js, p5.sound, and p5.play
├── 1/                  # Animation assets
├── eatball/            # Monster animation assets
├── end/                # End-screen animation assets
├── lamp/               # Lamp animation assets
├── wind/               # Monster animation assets
└── Image and audio files  # Other game assets
```

## Technical Implementation

| Module | Implementation |
| --- | --- |
| Page and rendering | HTML, CSS, and JavaScript, with p5.js for canvas rendering |
| Map representation | A 2D array stores walls and passages; each grid cell is 40 pixels wide and tall |
| Player movement | WASD input updates grid coordinates after checking map boundaries and whether the destination cell is passable |
| Animation and sprites | p5.play loads animations and creates and draws sprites |
| Visibility effects | Distances from the player to sample points determine the sizes of black circles that form the overlay |
| Bullet movement | Coordinate translation, rotation, and trigonometry produce radial bullet patterns and distance-based collision checks |
| Audio playback | p5.sound loads and plays music |
| Elapsed time | Game-loop iterations are converted into a displayed time value; counting stops when the game ends |

The canvas is 1240 × 1240 pixels, and the game is primarily designed for desktop keyboard controls. Timing is based on game-loop iterations, so the accuracy of the displayed time depends on the actual frame rate.

## Team and Asset Credits

This is a team course project. The features described in this repository represent the project as a whole and do not imply that one member independently implemented every module.

The project uses p5.js, p5.sound, and p5.play. Refer to the notices in the corresponding files for third-party library license information. This document does not grant additional permissions to use third-party images, animations, or audio assets.
