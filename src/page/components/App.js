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

  handleQueryTermsChange = (queryTerms) => {
    this.setState({settings: {...this.state.settings, queryTerms}})
  }

  handleEngineChange = ({engineName, engineActive}) => {
    let searchEngines = this.state.settings.searchEngines.map(
      ({name, url, active}) =>
        name.toLowerCase() == engineName
          ? {name, url, active: engineActive}
          : {name, url, active}
    )
    this.setState({settings: {...this.state.settings, searchEngines}})
  }

  handleServerChange = (server) => {
    this.setState({settings: {...this.state.settings, server}})
  }

  handleConfigChange = (e) => {
    const useServer = e.target.value == 'server' ? true : false
    this.setState({settings: {...this.state.settings, useServer}})
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
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="serverSwitch">Configuration</label></td>
              <td>
                <div className="box">
                  <input
                    type="radio" name="serverSwitch" id="localConfig" value="local"
                    defaultChecked={!this.state.settings.useServer}
                    onChange={this.handleConfigChange}
                  />
                  <label htmlFor="localConfig" className="radiolabel">Local</label>
                </div>
                <div className="box">
                  <input
                    type="radio" name="serverSwitch" id="serverConfig" value="server"
                    defaultChecked={this.state.settings.useServer}
                    onChange={this.handleConfigChange}
                  />
                  <label htmlFor="serverConfig" className="radiolabel">Server</label>
                </div>
              </td>
            </tr>
          </tbody>
          {useServer
            ? <ServerSettings server={server} onServerChange={this.handleServerChange} />
            : <LocalSettings
                searchEngines={searchEngines}
                queryTerms={queryTerms}
                onEngineChange={this.handleEngineChange}
                onQueryTermsChange={this.handleQueryTermsChange}
              />
          }  
        </table>
        <input type="button" value="Update Settings" onClick={this.handleSubmit}/>
        {this.state.updatingMessage == 'success' ? <this.Message color='darkgreen'>Settings Updated</ this.Message> : null}
        {this.state.updatingMessage == 'error' ? <this.Message color='darkred'>Error while updating</this.Message> : null}
      </form>
    )
  }
}

export default App