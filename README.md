# LinkedIn Ad Muter

LinkedIn Ad Muter is a Chrome extension designed to automatically mute and remove sponsored content from your LinkedIn feed. It helps reduce distractions by silencing auto-playing videos and removing promoted posts entirely from the page.

## Features

- Automatically mutes audio/video from sponsored content.
- Removes promoted posts from the feed using text detection (e.g., "Promocionado" or "Sponsored").
- Displays a live counter of blocked ads in the top-right corner.
- Works dynamically with new content as you scroll.

## How It Works

The extension scans the DOM for elements containing keywords related to sponsored content. Once detected, it identifies the full post container and removes it from the page while muting any media found inside.

## Installation

1. Go to `chrome://extensions/` in your browser.
2. Enable **Developer Mode**.
3. Click on **"Load unpacked"**.
4. Select the folder containing this extension's files.
5. The extension will be active immediately on LinkedIn pages.

## Notes

- This extension only runs on `https://www.linkedin.com/ *`.
- No configuration is required.
- You can customize the filtering logic by modifying the `content.js` file.

## Contributing

Feel free to fork this project, report issues, or suggest improvements through GitHub.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
