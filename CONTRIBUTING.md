# Developers

Browser extensions are more or less standardized and can therefore be used across browsers. Mozilla provides [excellent documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) about browser extensions. For some Chrome-specific behavior, have a look into [Chrome's documentation](https://developer.chrome.com/docs/extensions/) as well.

To compile the extension yourself, install [Node.js](https://nodejs.org/) (tested with v16 and v18) and clone the repository. Then run the following to install the necessary dependencies and to build the code from `/src/` into `/build/`:

```
    cd path/to/extension
    npm install
	npm run build
```

As most browser extensions, WebBot consists of 3 components:

- **content script:** Injected by the browser into every webpage. The content script for this extension is compiled from `/src/content/index.js` which then recursively loads the remaining scripts. Depending on the currently opened search engine, a different bot is spawned (extending the general `Bot` class). The SingleFile library also lives in the content script, but interacts with the background to `fetch` external resources on Chrome and to save the pages into the downloads folder (see also the [SingleFile documentation](https://github.com/gildas-lormeau/SingleFile/wiki/How-to-integrate-SingleFile-library-code-in-%22custom%22-environments%3F)).
- **background script:** Permanently run in the background, independent of the current webpage. This part manages the settings and timers for each current action (e.g., navigate to next search engine). Browser data (cookies etc.) is also removed by the background script (if removing is enabled). The background and the content scripts communicate through [messages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/sendMessage).
- **user interface:** This component (found under `/src/page/`) is built using [React](https://reactjs.org/) and implements the extension's settings. The settings are pointed out to the browser by setting `options_ui` in `manifest.json`. The React app itself is split into components based on the type of settings they offer. The settings are again communicated with the background using messages.

Both the content and the background script are compiled into `/build/dist/`. The user interface (settings) is compiled into and accessed via `/build/index.html`. Scripts are then loaded from `/build/dist/page/`.

The `/build/nextround.html` page is a special page generated for the intermediate step between search engines. After leaving the first engine, `nextround.html` is accessed to delete browser data (if removing is enabled), before the next search engine is navigated to. The `BasePageBot` under `/src/content/bot` implements this behavior.

`manifest.json` provides the extension's [manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) and details where to find the components, but also which priviledges are required.

## 🤖 Search Bots

If a search engines changes its layout (CSS selectors stop working) or when support for a new search engine is supposed to be added, a bot in `/src/content/bot/` must be modified/added. The bots generally extend `/src/content/Bot.js` and implement engine-specific behaviour. In most cases, just the correct CSS selectors, a way to distinguish result types (text/news/images/video), and a way to count pages have to be implemented. Both clicking through multiple result pages and scrolling for more results is supported for any result type. For more details, have a look at one of the already existing bots.

When implementing a new bot, make sure to add the search engine to the lists in `/src/background/index.js` and `/src/background/Extension.js` to make it available in the settings. Also make sure to add `this.download_page("<media_type>")` at the appropriate positions to enable saving search results.

## 🪲 Debugging

Instead of `npm run build` you can also use `npm run start` for hot reloading and non-minimized output. In most cases you'll still need to reload the extension in the browser though.

This extension in generally quite talkative, both the content but also the background script. In some classes, setting `this.debug=true` will enable even more console output. The console output of the content script directly appears in a console opened in the current tab. The console output of the background can be found in Firefox under `about:debugging#/runtime/this-firefox` (click `Inspect`) and in Chrome under `chrome://extensions/` (click `background page`).

During the build process, webpack by default minimizes the output files using the [TerserPlugin](https://github.com/webpack-contrib/terser-webpack-plugin). For debugging, it might make sense to disable this by removing `options.plugins.push(new TerserPlugin())` from `webpack.default.config.js` and `webpack.page.config.js`.

## 🧭 Installing on Safari

Compared to Firefox and Chrome, loading a temporary extension into Safari isn't as straight-forward. Apple, however, provides a command line script to convert an extension for Safari:

```
    xcrun safari-web-extension-converter WebBot/build
```

This creates an Xcode project which in turn can be used to compile a macOS app that installs the extension in Safari. For more information, see the [official documentation](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari). Some initial testing revealed that both saving web pages and clearing browser data is broken in Safari, so a proper port would need some additional work.
