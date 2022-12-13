import React, { Component } from 'react'

class LocalServerSwitch extends Component {
  constructor(props) {
    super(props)
  }

  handleConfigChange = (e) => {
    this.props.onConfigChange({useServer: e.target.value == 'server' ? true : false})
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <label htmlFor="serverSwitch">Configuration</label>
            <div className="tooltip" data-title="Switch to Server configuration type to automatically gather
            lists of search engines and query terms from a server.">?</div>
          </td>
          <td>
            <div className="box">
              <input
                type="radio" name="serverSwitch" id="localConfig" value="local"
                checked={!this.props.useServer}
                onChange={this.handleConfigChange}
              />
              <label htmlFor="localConfig" className="radiolabel">Local</label>
            </div>
            <div className="box">
              <input
                type="radio" name="serverSwitch" id="serverConfig" value="server"
                checked={this.props.useServer}
                onChange={this.handleConfigChange}
              />
              <label htmlFor="serverConfig" className="radiolabel">Server</label>
            </div>
          </td>
        </tr>
      </tbody>
    )
  }
}

export default LocalServerSwitch