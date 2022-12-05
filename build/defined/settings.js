var settings = {
  
  // minimal version of chrome browser required
  requireVersion: {
    chrome: 45
  },

  // clear the browser upon installation, and after finishing each loop
  // WARNING: setting this to true will remove all data from from your browser
  clear_browser: false,
  
  // close inactive tabs upon landing on a seach engine
  // WARNING: setting this to true will close all the tabs from your browser, except
  // the one tha the bot is navigating
  close_inactive_tabs: false,

  // localhost server that will be hit at the end of each round
  dummy_server: "", //"http://localhost:8000/",

  // production server where the list of engines, queryterms and urllists would be
  // downloaded from. Temporarily you can also use the microserver provided in this
  // repository (in the microserver folder)
  server: "", //"http://localhost:8000/",

  // set minutes between each query
  search_ticks_mins: 5
}
