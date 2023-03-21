
<h1 align="center">
	<img src="./build/images/bot.png" alt="WebBot icon" height="25">
	WebBot
</h1>

A browser extension for Mozilla and Chrome that simulates a user searching (at least) 50-top main, news, images and videos search results of up to 8 different [search engines](#-supported-engines).

- Install on [Firefox](#firefox) or [Chrome](#chrome)
- Select [search engines and keywords](#-adjusting-the-settings)
- [Start crawling](#%EF%B8%8F-start-crawling)
- [Save accessed pages](#-saving-search-results) into downloads
- [Deactivate](#-reload-deactivate-or-remove) the extension

### Cite us

Ulloa, R., Makhortykh, M., & Urman, A. (2022). Scaling up search engine audits: Practical insights for algorithm auditing. Journal of Information Science. https://doi.org/10.1177/01655515221093029

<div align="center">
	<img src="./docs/demo.webp" alt="WebBot demo">
</div>



## Installation

*Note that as soon as the extension is installed and activated, it will interfere with your normal web browser usage. [Deactivate](#-reload-deactivate-or-remove) the extension whenever you don't need it.*

### Firefox

1. Clone or download this repository
2. Open Firefox
3. Navigate to `about:debugging`
4. Click on `This Firefox` to the left
5. Click on `Load Temporary Add-on...`
6. Navigate to where you downloaded (or cloned) the extension
7. Open the file `build/manifest.json`

### Chrome
1. Clone or download this repository
2. Open Chrome
3. Navigate to `chrome://extensions`
4. Activate `Developer Mode` switch (top-right corner)
5. Click on `Load unpacked extension...`
6. Navigate to where you downloaded (or cloned) the extension, and select the directory `build`
7. Open the build directory



## Usage

### 🔧 Adjusting the Settings

Settings can be accessed by clicking on the extension's icon in the browser's tool bar. Settings are applied after the `Update Settings` button is pressed and are stored in the browser's local storage. If settings are changed after crawling had already started, it is recommended to [reload the extension](#-reload-deactivate-or-remove). The following settings are available:

| Option                | Default                  | Behavior                          |
|-----------------------|--------------------------|-----------------------------------|
| `Clear Browser Data`  | No                       | **WARNING** Activating this option will delete all your browser data. |
| `Close Inactive Tabs` | No                       | **WARNING** Activating this option will close all your browser tabs upon landing on a search engine. |
| `Save Pages`          | No                       | Automatically save the complete result pages as downloads for further analysis. |
| `Save In`             | `webbot`                 | If `Save Pages` is activated, this is the subdirectory of your downloads folder that the webpages are saved into. |
| `Configuration`       | `Local`                  | Switch between selecting engines and keywords locally or providing them through a server. For the latter, see the [Advanced](#advanced) guide down below. |
| `Server`              | -                        | If `Server` configuration is selected, the full URL of the server. |
| `Search Engines`      | Google, DuckDuckGo, Bing | If `Local` configuration is selected, determine the search engines to query – see the [table below](#-supported-engines). |
| `Result Types`        | Text, News               | If `Local` configuration is selected, select which results should be gathered from each engine. |
| `Query Terms`         | -                        | If `Local` configuration is selected, provide a comma-separated list of terms to query. Each term can be composed of multiple words and symbols such as `-"+`, only commas are reserved. Each term is queried once by a selected search engine. To query the same term by multiple search engines, repeat the term for each engine. |

**Example:** Assuming the goal is to query both Google and Baidu for the terms "climate" and "kyoto protocol +band" and you want to use the `Local` configuration. Then select Google and Baidu from the list of search engines, unticking all other engines. In the `Query Terms` field, input the following: "climate, climate, kyoto protocol +band, kyoto protocol +band". It is necessary to repeat the terms such that both engines are queried with the same terms. Otherwise the crawled pages would just include "climate" results from Google and "kyoto protocol +band" results from Baidu.

### 🕷️ Start Crawling

1. Navigate to the URL of the engine that you would like to start crawling with. You do not need to accept any cookies etc., this is all handled by the extension.
2. Wait up to a minute, the automatic search will start in next minute o' clock, e.g. 14:37:**00**.
3. Let the extension handle navigation between search results (text, news, images, videos) and between the engines you selected. The engines will be accessed in the same order as in the table below. Each engine has 6 minutes to provide all results. If the request times out or navigation is interrupted, e.g. by a captcha, the next engine will automatically be accessed after 6 minutes have passed. If not all result types are selected, the time is reduced by 1 min per unselected result type.

### 🔍 Supported Engines

| Engine     | URL | Notes |
|------------|-----|-------|
| Google     | [google.com](https://google.com) | |
| DuckDuckGo | [duckduckgo.com](https://duckduckgo.com) | |
| Bing       | [bing.com](https://bing.com) | |
| Yandex     | [yandex.com](https://yandex.com) | Yandex is very strict with captchas and might thus require some manual intervention. News are currently not supported. Not yet implemented are `ya.ru` and `yandex.ru` (which now redirects to `dzen.ru`). |
| Yahoo!     | [search.yahoo.com](https://search.yahoo.com) | Note that Yahoo! handles localization primarily through subdomains, so we use the 'neutral' `search` subdomain for now. |
| Baidu      | [baidu.com](https://baidu.com) | Baidu provides *information* rather than news results. |
| So         | [so.com](https://so.com) | So also provides *information* rather than news results. |
| Sogou      | [sogou.com](https://sogou.com) | Sogou does not provide news results. |

### 💾 Saving Search Results

We integrated the wonderful [SingleFile](https://github.com/gildas-lormeau/SingleFile) into this extension to automatically save search result pages. This feature can be turned on or off in the [settings](#-adjusting-the-settings). Pages will be stored as full archives containing all necessary scripts, fonts, pictures, etc. in-line.

If search results are presented as multiple pages, each page is saved individually. If more search results are automatically loaded after scrolling to the bottom, the page is only saved once after scrolling the designated amount. Pages are saved in the format `<engine url>_<keyword>_<result type>_<date>_<time>.html`. It is also possible to designate a specific subdirectory to download the pages into. This might come handy if multiple browsers are used to crawl and save into the same downloads directory.

### ⚙️ Processing Saved Search Results

We provide scripts for parsing the search results in [Python](https://github.com/gesiscss/WebBot-tutorials) and [R](https://github.com/schochastics/webbotparseR). Have a look!

In general, saved result pages parsed in Python with [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/). As images are stored inline, they can be extracted from the result pages for further processing, no re-loading the original image required.

### 🚧 Reload, Deactivate, or Remove

On Firefox, navigate to `about:addons` to deactivate or remove the extension. Reload the extension by deactivating and re-activating the extension.

On Chrome, navigate to `chrome://extensions` to reload, deactivate, or remove the extension.



## Advanced

For some experimental setups, crawling search engines in parallel on multiple browsers or machines could be desired. For example, to investigate how Google search results differ between Germany and Brazil, one could rent virtual servers in both countries and then start crawling. In these scenarios it makes sense not to define the lists of search engines and query terms within the extension but to provide it through a central server. WebBot supports this by allowing for a `Server` configuration in the [Settings](#-adjusting-the-settings).

### 🚲 Installing the Microserver

To test out server deployment, this repository includes a microserver that can be started in the same machine where the browser is running (localhost). It requires python and the simplejson package to be installed. The lists of engines, result types and query terms are served from `engines.txt`, `resulttypes.txt`, and `queryterms.txt`, separated by newlines. Beware that `engines.txt` has to contain the full URL of each engine such as `https://search.yahoo.com`.

1. Open a terminal
2. Navigate to where you downloaded/cloned this repository
3. Navigate to the microserver folder
4. Install simplejson: `pip install simplejson` or `conda install simplejson` 
5. Run the server: `python sever.py 8000`
6. In the extension's settings, select the `Server` configuration and enter `http://localhost:8000/` for the server URL.

### 🚀 Setting up a Production Server

The microserver provided is meant to be used on the same machine only, which is suboptimal if you want to control several machine because, for example, if you want to change the query terms, you would have to change the file on all the microservers.

Therefore, it is better to set up a server in an external machine that is accessible to all the machines, so one can easily change the lists for all machines at once. Any server would do (e.g. Flask, Apache, klein, node), you just have to make sure that the following requests are available:

	- POST: bot/getengines
	- POST: bot/getresulttypes
	- POST: bot/getqueryterms
 
Make sure to change the `Server` field in the extension's settings to the server URL, including port and a trailing `/`.



## Developers

Browser extensions are more or less standardized and can therefore be used across browsers. Mozilla provides [excellent documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) about browser extensions. For some Chrome-specific behavior, have a look into [Chrome's documentation](https://developer.chrome.com/docs/extensions/) as well.

To compile the extension yourself, install [Node.js](https://nodejs.org/) (tested with v16 and v18) and clone the repository. Then run the following to install the necessary dependencies and to build the code from `/src/` into `/build/`:

    cd path/to/extension
    npm install
	npm run build

As most browser extensions, WebBot consists of 3 components:

- **content script:** Injected by the browser into every webpage. The content script for this extension is compiled from `/src/content/index.js` which then recursively loads the remaining scripts. Depending on the currently opened search engine, a different bot is spawned (extending the general `Bot` class). The SingleFile library also lives in the content script, but interacts with the background to `fetch` external resources on Chrome and to save the pages into the downloads folder (see also the [SingleFile documentation](https://github.com/gildas-lormeau/SingleFile/wiki/How-to-integrate-SingleFile-library-code-in-%22custom%22-environments%3F)).
- **background script:** Permanently run in the background, independent of the current webpage. This part manages the settings and timers for each current action (e.g., navigate to next search engine). Browser data (cookies etc.) is also removed by the background script (if removing is enabled). The background and the content scripts communicate through [messages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/sendMessage).
- **user interface:** This component (found under `/src/page/`) is built using [React](https://reactjs.org/) and implements the extension's settings. The settings are pointed out to the browser by setting `options_ui` in `manifest.json`. The React app itself is split into components based on the type of settings they offer. The settings are again communicated with the background using messages.

Both the content and the background script are compiled into `/build/dist/`. The user interface (settings) is compiled into and accessed via `/build/index.html`. Scripts are then loaded from `/build/dist/page/`.

The `/build/nextround.html` page is a special page generated for the intermediate step between search engines. After leaving the first engine, `nextround.html` is accessed to delete browser data (if removing is enabled), before the next search engine is navigated to. The `BasePageBot` under `/src/content/bot` implements this behavior.

`manifest.json` provides the extension's [manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) and details where to find the components, but also which priviledges are required.

### 🤖 Search Bots

If a search engines changes its layout (CSS selectors stop working) or when support for a new search engine is supposed to be added, a bot in `/src/content/bot/` must be modified/added. The bots generally extend `/src/content/Bot.js` and implement engine-specific behaviour. In most cases, just the correct CSS selectors, a way to distinguish result types (text/news/images/video), and a way to count pages have to be implemented. Both clicking through multiple result pages and scrolling for more results is supported for any result type. For more details, have a look at one of the already existing bots.

When implementing a new bot, make sure to add the search engine to the lists in `/src/background/index.js` and `/src/background/Extension.js` to make it available in the settings. Also make sure to add `this.download_page("<media_type>")` at the appropriate positions to enable saving search results.

### 🪲 Debugging

Instead of `npm run build` you can also use `npm run start` for hot reloading and non-minimized output. In most cases you'll still need to reload the extension in the browser though.

This extension in generally quite talkative, both the content but also the background script. In some classes, setting `this.debug=true` will enable even more console output. The console output of the content script directly appears in a console opened in the current tab. The console output of the background can be found in Firefox under `about:debugging#/runtime/this-firefox` (click `Inspect`) and in Chrome under `chrome://extensions/` (click `background page`).

During the build process, webpack by default minimizes the output files using the [TerserPlugin](https://github.com/webpack-contrib/terser-webpack-plugin). For debugging, it might make sense to disable this by removing `options.plugins.push(new TerserPlugin())` from `webpack.default.config.js` and `webpack.page.config.js`.

### 🧭 Installing on Safari

Compared to Firefox and Chrome, loading a temporary extension into Safari isn't as straight-forward. Apple, however, provides a command line script to convert an extension for Safari:

    xcrun safari-web-extension-converter WebBot/build

This creates an Xcode project which in turn can be used to compile a macOS app that installs the extension in Safari. For more information, see the [official documentation](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari). Some initial testing revealed that both saving web pages and clearing browser data is broken in Safari, so a proper port would need some additional work.