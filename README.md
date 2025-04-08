# Redirect to YouTube From online.udvash-unmesh.com
This is a Tampermonkey userscript that automatically redirects users to a YouTube video when specific data attributes are found on online.udvash-unmesh.com. The script searches for the YouTube video ID in the page's data attributes and, if found, opens the YouTube video in a new tab.

## Features

- Automatically finds the YouTube video ID from page data attributes.
- Opens the YouTube video in a new tab.
- Ensures that the redirect happens only once per page load.

## Installation

To install this script, you can use any of the following popular script managers:

### Tampermonkey

1. [Install Tampermonkey](https://www.tampermonkey.net/) if you don't have it installed.
2. Click the button below to automatically add the script to Tampermonkey:

   [![Install Tampermonkey Script](https://img.shields.io/badge/Install%20Tampermonkey%20Script-blue.svg)](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Scrip/raw/main/redirect-to-youtube.js)

3. After clicking the button, Tampermonkey will ask if you want to add the script. Click **Add**.

### Violentmonkey

1. [Install Violentmonkey](https://violentmonkey.github.io/) if you don't have it installed.
2. Open the script file [redirect-to-youtube.js](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Scrip/raw/main/redirect-to-youtube.js)
.
3. Click the **Install** button in Violentmonkey.

### Greasemonkey

1. [Install Greasemonkey](https://www.greasespot.net/) if you don't have it installed.
2. Open the script file [redirect-to-youtube.js](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Scrip/raw/main/redirect-to-youtube.js)
.
3. Click **Install** in the Greasemonkey interface.

## How It Works

- The script checks for the presence of a data attribute `data-youtube-video` in an HTML element.
- If the attribute is found, the script opens the YouTube video in a new tab.
- The script ensures that the redirect happens only once per page load, preventing multiple redirects.

## Usage

1. After installing the script, visit the supported page on [Udvash Unmesh](https://online.udvash-unmesh.com/Routine/ClassDetails).
2. If a YouTube video ID is found on the page, the script will automatically open the corresponding YouTube video in a new tab.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

If you encounter any issues or have questions about the script, feel free to open an issue in the [Issues](https://github.com/yourusername/Tampermonkey-YouTube-Redirect/issues) section of this repository.
