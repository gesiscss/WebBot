
<h1 align="center">
	<img src="./build/images/bot.png" alt="WebBot" height="25">
	WebBot
</h1>

A browser extension for Mozilla and Chrome that simulates a user searching (at least) 50-top main, news, images and videos search results of up to 8 different [search engines](#supported-engines).

- Install on [Firefox](#firefox) or [Chrome](#chrome)
- Select [search engines and keywords](#adjusting-the-settings)
- [Start crawling](#start-crawling)
- [Save accessed pages](#saving-search-results) into downloads
- [Deactivate](#reload-deactivate-or-remove) the extension

### Cite us

Ulloa, R., Makhortykh, M., & Urman, A. (2021). Algorithm Auditing at a Large-Scale: Insights from Search Engine Audits. ArXiv:2106.05831 [Cs]. http://arxiv.org/abs/2106.05831

<div align="center">
Demo goes here
</div>



## Installation

*Note that as soon as the extension is installed and activated, it will interfere with your normal web browser usage. [Deactivate](#reload-deactivate-or-remove) the extension whenever you don't need it.*

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

### Adjusting the Settings

Settings can be accessed by clicking on the extension's icon in the browser's tool bar. Settings are applied after the `Update Settings` button is pressed and are stored in the browser's local storage. If settings are changed after crawling had already started, it is recommended to [reload the extension](#reload-the-extension). The following settings are available:

| Option                | Default                  | Behavior                          |
|-----------------------|--------------------------|-----------------------------------|
| `Clear Browser Data`  | No                       | **WARNING** Activating this option will delete all your browser data. |
| `Close Inactive Tabs` | No                       | **WARNING** Activating this option will close all your browser tabs upon landing on a search engine. |
| `Save Pages`          | No                       | Automatically save the complete result pages as downloads for further analysis. |
| `Save In`             | `webbot`                 | If `Save Pages` is activated, this is the subdirectory of your downloads folder that the webpages are saved into. |
| `Configuration`       | `Local`                  | Switch between selecting engines and keywords locally or providing them through a server. For the latter, see the [Advanced](#advanced) guide down below. |
| `Server`              | -                        | If `Server` configuration is selected, the full URL of the server. |
| `Search Engines`      | Google, DuckDuckGo, Bing | If `Local` configuration is selected, determine the search engines to query – see the [table below](#supported-engines). |
| `Query Terms`         | -                        | If `Local` configuration is selected, provide a comma-seperated list of terms to query. Each term can be composed of multiple words and symbols such as `-"+`, only commas are reserved. Each term is queried once by a selected search engine. To query the same term by multiple search engines, repeat the term for each engine. |

**Example:** Assuming the goal is to query both Google and Baidu for the terms "climate" and "kyoto protocol +band" and you want to use the `Local` configuration. Then select Google and Baidu from the list of search engines, unticking all other engines. In the `Query Terms` field, input the following: "climate, climate, kyoto protocol +band, kyoto protocol +band". It is necessary to repeat the terms such that both engines are queried with the same terms. Otherwise the crawled pages would just include "climate" results from Google and "kyoto protocol +band" results from Baidu.

### Start Crawling

1. Navigate to the URL the engine that you would like to start crawling with. You do not need to accept any cookies etc., this is all handled by the extension.
2. Wait up to a minute, the automatic search will start in next minute o' clock, e.g. 14:37:**00**.
3. Let the extension handle navigation between search results (text, news, images, videos) and between the engines you selected. The engines will be accessed in the same order as in the table below. Each engine has 5 minutes to provide all results. If the request times out or navigation is interrupted, e.g. by a captcha, the next engine will automatically be accessed after 5 minutes have passed.

### Supported Engines

| Engine     | URL | Notes |
|------------|-----|-------|
| Google     | [google.com](https://google.com) | |
| DuckDuckGo | [duckduckgo.com](https://duckduckgo.com) | |
| Bing       | [bing.com](https://bing.com) | |
| Yandex     | [yandex.com](https://yandex.com) | Yandex is very strict with captchas and might thus require some manual intervention. News are currently not supported. Not yet implemented are `ya.ru` and `yandex.ru` (which now redirects to `dzen.ru`). |
| Yahoo!     | [us.yahoo.com](https://us.yahoo.com) | Note that Yahoo! handles localization primarily through subdomains, so we only support the US version for now. |
| Baidu      | [baidu.com](https://baidu.com) | Baidu provides *information* rather than news results. |
| So         | [so.com](https://so.com) | So also provides *information* rather than news results. |
| Sogou      | [sogou.com](https://sogou.com) | Sogou does not provide news results. |

### Saving Search Results

We integrated the wonderful [SingleFile](https://github.com/gildas-lormeau/SingleFile) into this extension to automatically save search result pages. This feature can be turned on or off in the [settings](#adjusting-the-settings). Pages will be stored as full archives containing all necessary scripts, fonts, pictures, etc. in-line.

If search results are presented as multiple pages, each page is saved individually. If more search results are automatically loaded after scrolling to the bottom, the page is only saved once after scrolling the designated amount. Pages are saved in the format `<engine url>_<keyword>_<result type>_<date>_<time>.html`. It is also possible to designate a specific subdirectory to download the pages into. This might come handy if multiple browsers are used to crawl and save into the same downloads directory.

### Reload, Deactivate, or Remove

On Firefox, navigate to `about:addons` to deactivate or remove the extension. Reload the extension by deactivating and re-activating the extension.

On Chrome, navigate to `chrome://extensions` to reload, deactivate, or remove the extension.



## Advanced

For some experimental setups, crawling search engines in parallel on multiple browsers or machines could be desired. For example, to investigate how Google search results differ between Germany and Brazil, one could rent virtual servers in both countries and then start crawling. In these scenarios it makes sense not to define the lists of search engines and query terms within the extension but to provide it through a central server. WebBot supports this by allowing for a `Server` configuration in the [Settings](#adjusting-the-settings).

### Installing the Microserver

To test out server deployment, this repository includes a microserver that can be started in the same machine where the browser is running (localhost). It requires python and the simplejson package to be installed (tested with python 3.9).

1. Open a terminal
2. Navigate to where you downloaded/cloned this repository
3. Navigate to the microserver folder
4. Install simplejson: `pip install simplejson` or `conda install simplejson` 
5. Run the server: `python sever.py 8000`
6. In the extension's settings, select the `Server` configuration and enter `http://localhost:8000/` for the server URL.

### Setting up a Production Server

The microserver provided is meant to be used on the same machine only, which is suboptimal if you want to control several machine because, for example, if you want to change the query terms, you would have to change the file on all the microservers.

Therefore, it is better to set up a server in an external machine that is accessible to all the machines, so one can easily change the lists for all machines at once. Any server would do (e.g. Flask, Apache, klein, node), you just have to make sure that the following requests are available:

	- POST: bot/getengines
	- POST: bot/getqueryterms
 
Make sure to change the `Server` field in the extension's settings, including port and a trailing `/`.

## Developers