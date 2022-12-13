import React, { Component } from 'react'

class ServerSettings extends Component {
  constructor(props) {
    super(props)
  }

  handleServerChange = (e) => {
    this.props.onServerChange({server: e.target.value})
  }

  render() {
    return (
      <tbody>
        <tr>
          <td className="lastrow"><label htmlFor="server">Server</label></td>
          <td className="lastrow">
            <input
              type="text"
              defaultValue={this.props.server}
              onChange={this.handleServerChange}
              placeholder="http://example.com:8000/"
            /></td>
        </tr>
      </tbody>
    )
  }
}

export default ServerSettings