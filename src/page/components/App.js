import React, { Component, useEffect } from 'react'
import './App.css'
import LocalSettings from './LocalSettings'
import ServerSettings from './ServerSettings'
import LocalServerSwitch from './LocalServerSwitch'
import OptionalSettings from './OptionalSettings'

class App extends Component {
  constructor() {
    super()
    
    this.browser = window.hasOwnProperty('chrome') ? chrome : browser // browser-specific messaging
    
    this.state = {
      updatingMessage: null,
      settings: {
        useServer: false,
        searchEngines: [],
        queryTerms: '',
        server: '',
        searchTicksMins: 6,
        clearBrowser: false,
        closeInactiveTabs: false,
        downloadPages: false,
        downloadsFolder: '',
      }
    }
  }

  componentDidMount() {
    new Promise((resolve, reject)=>{
      this.browser.runtime.sendMessage({'get_settings': true}, (response) => {
        if(this.browser.runtime.lastError) {
          console.log('error getting settings')
        } else {
          this.setState({settings: response})
        }
        resolve(response);
      })
    });
  }

  updateSettings = (settings) => {
    this.setState({settings: {...this.state.settings, ...settings}}) // merge the objects and reassign into state
  }

  handleSubmit = () => {
    if (this.state.settings.useServer) {
      try {new URL(this.state.settings.server)} // if a server shall be used, make sure it's a valid URL
      catch(e) {
        this.setState({updatingMessage: 'error'})
        return
      }
    }
    if (!this.state.settings.useServer) this.updateSettings({server: ''})
    new Promise((resolve, reject)=>{
      this.browser.runtime.sendMessage({'update_settings': true, settings: this.state.settings}, (response) => {
        if(this.browser.runtime.lastError || !response) {
          this.setState({updatingMessage: 'error'})
        } else this.setState({updatingMessage: 'success'})
        resolve(response);
      });
    });
  }

  Message = ({color, children}) => {
    useEffect(() => {
      setTimeout(() => {
        this.setState({updatingMessage: null})
      }, 1000)
    })
    return (
      <div style={{float: 'right', color: color}}>{children}</div>
    )
  }

  render() {
    const settings = this.state.settings
    const Message = this.Message
    const options = {
      clearBrowser: {name: 'Clear Browser Data', value: settings.clearBrowser},
      closeInactiveTabs: {name: 'Close Inactive Tabs', value: settings.closeInactiveTabs},
      downloadPages: {name: 'Save Pages', value: settings.downloadPages}
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <OptionalSettings options={options} downloadsFolder={settings.downloadsFolder} onOptionsChange={this.updateSettings}/>
          <LocalServerSwitch useServer={settings.useServer} onConfigChange={this.updateSettings} />
          {settings.useServer
            ? <ServerSettings server={settings.server} onServerChange={this.updateSettings} />
            : <LocalSettings
                searchEngines={settings.searchEngines}
                queryTerms={settings.queryTerms}
                onEngineChange={this.updateSettings}
                onQueryTermsChange={this.updateSettings}
              />
          }  
        </table>
        <input type="button" value="Update Settings" onClick={this.handleSubmit}/>
        {this.state.updatingMessage == 'success' ? <Message color='darkgreen'>Settings Updated</ Message> : null}
        {this.state.updatingMessage == 'error' ? <Message color='darkred'>Error while updating</ Message> : null}
      </form>
    )
  }
}

export default App