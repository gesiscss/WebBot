import React, { Component, useEffect } from 'react'
import './App.css'
import LocalSettings from './LocalSettings'
import ServerSettings from './ServerSettings'

class App extends Component {
  constructor() {
    super()
    
    // TODO: persist settings in localStorage
    this.browser = window.hasOwnProperty('chrome') ? chrome : browser // browser-specific messaging
    
    this.state = {
      updatingMessage: null,
      settings: {
        useServer: false,
        searchEngines: [],
        queryTerms: '',
        server: '',
        searchTicksMins: 5,
        clearBrowser: false,
        closeInactiveTabs: false,
        download: false,
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

  handelQueryTermsChange = (queryTerms) => {
    const settings = {
      ...this.state.settings,
      queryTerms: queryTerms
    }
    this.setState({settings})
  }

  handleEngineChange = ({engineName, engineActive}) => {
    let searchEngines = this.state.settings.searchEngines.map(
      ({name, url, active}) =>
        name.toLowerCase() == engineName
          ? {name, url, active: engineActive}
          : {name, url, active}
    )
    const settings = {
      ...this.state.settings,
      searchEngines: searchEngines
    }
    this.setState({settings})
  }

  handleServerChange = (server) => {
    const settings = {
      ...this.state.settings,
      server: server
    }
    this.setState({settings})
  }

  handleSubmit = () => {
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
    const searchEngines = this.state.settings.searchEngines
    const queryTerms = this.state.settings.queryTerms
    const server = this.state.settings.server
    const useServer = this.state.settings.useServer

    return (
      <form onSubmit={this.handleSubmit}>
        {/*useServer
          ? <ServerSettings server={server} onServerChange={this.handleServerChange} />
          :*/ <LocalSettings
              searchEngines={searchEngines}
              queryTerms={queryTerms}
              onEngineChange={this.handleEngineChange}
              onQueryTermsChange={this.handelQueryTermsChange}
            />
        }
        <input type="button" value="Update Settings" onClick={this.handleSubmit}/>
        {this.state.updatingMessage == 'success' ? <this.Message color='darkgreen'>Settings Updated</ this.Message> : null}
        {this.state.updatingMessage == 'error' ? <this.Message color='darkred'>Error while updating</this.Message> : null}
      </form>
    )
  }
}

export default App