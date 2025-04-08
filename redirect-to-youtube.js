// ==UserScript==
// @name         Redirect to YouTube Video
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Automatically redirect to YouTube video if data attributes are found on the page.
// @author       You
// @match        https://online.udvash-unmesh.com/Routine/ClassDetails?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Flag to prevent multiple redirects
    let hasRedirected = false;

    // Function to search for YouTube video ID in the data attributes
    function findYouTubeLink() {
        const element = document.querySelector('[data-secondary-video-source="youtube"][data-youtube-video]');
        if (element) {
            const videoID = element.getAttribute('data-youtube-video');
            console.log('YouTube Video ID found:', videoID); // Log for debugging
            if (videoID) {
                return `https://www.youtube.com/watch?v=${videoID}`;
            }
        }
        console.log('No YouTube link found'); // Log for debugging
        return null;
    }

    // Run the function to find the YouTube link and open it in a new tab (only once)
    function processYouTubeLink() {
        // Check if already redirected
        if (hasRedirected) {
            return;
        }

        const ytLink = findYouTubeLink();
        if (ytLink) {
            console.log('Opening in a new tab:', ytLink); // Log for debugging
            window.open(ytLink, '_blank');  // Open the YouTube link in a new tab
            hasRedirected = true;  // Set the flag to true after redirection
        }
    }

    // Run the process when the page is fully loaded
    window.onload = function() {
        console.log('Page fully loaded'); // Log for debugging
        processYouTubeLink();
    };

    // MutationObserver to detect dynamic changes in the DOM (e.g., AJAX content)
    const observer = new MutationObserver(function() {
        processYouTubeLink();
    });

    // Start observing the body for any changes in child elements
    observer.observe(document.body, { childList: true, subtree: true });

    // As an additional fallback, run the function after a delay to handle slow loading content
    setTimeout(function() {
        console.log('Running after delay'); // Log for debugging
        processYouTubeLink();
    }, 3000);

})();
