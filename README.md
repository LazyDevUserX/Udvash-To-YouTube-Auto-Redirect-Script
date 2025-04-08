# Redirect to YouTube From online.udvash-unmesh.com
This is a Tampermonkey userscript that automatically redirects users to a YouTube video when specific data attributes are found on online.udvash-unmesh.com. The script searches for the YouTube video ID in the page's data attributes and, if found, opens the YouTube video in a new tab.

## Features

- Automatically finds the YouTube video ID from page data attributes.
- Opens the YouTube video in a new tab.
- Ensures that the redirect happens only once per page load.

## Installation

You can install this script in any of the following popular script managers:

### Install for Tampermonkey

1. [Install Tampermonkey](https://www.tampermonkey.net/) if you don't already have it.
2. [Click here to install the script directly to Tampermonkey](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Script/raw/main/redirect-to-youtube.js).
   - Tampermonkey will prompt you to add the script. Click **Add** to install it.

### Install for Violentmonkey

1. [Install Violentmonkey](https://violentmonkey.github.io/) if you don't already have it.
2. Open the script file [redirect-to-youtube.js](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Script/raw/main/redirect-to-youtube.js).
3. Violentmonkey will prompt you to install the script. Click **Install**.

### Install for Greasemonkey

1. [Install Greasemonkey](https://www.greasespot.net/) if you don't already have it.
2. Open the script file [redirect-to-youtube.js](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Script/raw/main/redirect-to-youtube.js).
3. Greasemonkey will prompt you to install the script. Click **Install**.

---

### Download Script

If you prefer to manually install the script, you can download it by clicking the button below:

[![Download Script](https://img.shields.io/badge/Download%20Script-green.svg?style=flat&logo=github)](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Script/raw/main/redirect-to-youtube.js)

After downloading, you can manually add the script to your chosen userscript manager.

---

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

If you encounter any issues or have questions about the script, feel free to open an issue in the [Issues](https://github.com/LazyDevUserX/Udvash-To-YouTube-Auto-Redirect-Script/issues) section of this repository.
