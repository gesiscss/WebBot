
# WebBot

A browser extension for Mozilla and Chrome that simulates a user searching (at least) 50-top main, news, images and videos search results of up to 8 different search engines (Google, Baidu, Yandex, DuckDuckGo Bing, Yahoo!, So, Sogou). 

## Cite us

You can cite this tool using this citation. Much obliged:
[REFERENCE]


## The basics

### How to start it?

1. Install the extension (see below)
2. Navigate to one of the engines that you would like to collect results from, e.g. google.com. 
3. Wait up to a minute, the automatic navigation will start in next minute o' clock, e.g. 14:37:**00**  plus a few seconds


### How do I stop it?

Just uninstall or deactivate the extension in `about:debuging` (for Firefox) and `chrome://extensions` in Chrome

### How to simply iterate over a URL list?

1. Click on the Extension icon
2. Click on `List`

### How to change the query terms, search engines and URL list?

The extension comes with some default queries which you certainly want to change. Here is how

1. Install the microserver (see below)
2. In the bot directory there are 3 files: engines.txt, queryterms.txt, urllist.txt, nextround.html
3. Just edit the files, and add your queries, engines and urls
4. Restart the server (`Ctrl+C` and rerun)


## Advanced

### Deleting the browser history

***WARNING!: Activating this option will delete all your browser data.***

1. Go to the directory in which you download/clone this repository
2. Open the file build/defined/settings.js
3. Activate the flag `clear_browser` by changing the value from `false` to `true`
4. Reload the extension in Firefox (going to `about:debugging`) or Chrome (going to `chrome://extensions`)

### Closing all other tabs

***WARNING!: Activating this option will close all your browser tabs upon landing on a search engine***

1. Go to the directory in which you download/clone this repository
2. Open the file build/defined/settings.js
3. Activate the flag `close_inactive_tabs` by changing the value from `false` to `true`
4. Reload the extension in Firefox (going to `about:debugging`) or Chrome (going to `chrome://extensions`)

### Setting up a production server

The microserver provided is meant to be used on the same machine only, which is suboptimal if you want to control several machine because, for example, if you want to change the query terms, you would have to change the file on all the microservers.

Therefore, it is better to set up a server in an external machine that is accessible to all the machines, so one can easily change the lists for all machines at once. Any server would do (e.g. Flask, Apache, klein, node), you just have to make sure that the following requests are available:

	- POST: bot/getengines
	- POST: bot/getqueryterms
	- POST: bot/getquerylist
 
Make sure to change the `server` field in the `build/defined/settings.js`
 
### What is the difference between the `server` and the `dummy_server`?

If you come to this question, you probably have seen that the `settings.js` has a server called `dummy_server`. This server only received the following request:

    - GET: bot/nextround

In principle, the server could be the same but keeping the dummy server as a localhost server will improve the general performance as the internal cycle (e.g. iteration over query terms) of the machine wouldn't depend on the Internet connection. Visits to `bot/nextround` is used as an internal marker that keeps the ticks of the navigation; if the connection fails it would cause a failure in that machine from which it won't recover. Hence, it is better to host it in localhost. 

**In a nutshell**, keep the microserver in each machine for the `bot/nextround` request in localhost to avoid connection failures, but move the `bot/getengines`, `bot/getqueryterms`, and `bot/qetquerylist` to a centralized server to make it easy to configure experiments.

## Installation

### Install the browser installation

#### Chrome
1. Clone or download this repository
2. Open Chrome
3. Navigate to chrome://extensions
4. Activate `Developer Mode` switch (top-right corner)
5. Click on Load Unpack
6. Navigate to where you downloaded (or clone) the extension, and select the directory `build`
7. Open the build directory

#### Firefox

1. Clone or download this repository
2. Open Firefox
3. Navigate to about:debugging
4. Click on `This Firefox` to the left
5. Click on `Load Temporary Add-on...`
6. Navigate to where you downloaded (or clone) the extension
7. Open the file `build/manifest.json`


### Install the microserver

The microserver hosts the lists of query terms and engines that will be iterated in the automatic navigation. 

The repository includes a microserver that can be started in the same machine where the browser is running (localhost).

1. Open a terminal
2. Navigate to where you download/clone this repository
3. Navigate to the microserver folder
4. Install simplejson: `pip install simmplejson`
5. Run the server: `python sever.py 8000`
