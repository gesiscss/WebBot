import React, { Component } from 'react'

class ServerSettings extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="lastrow"><label htmlFor="server">Server</label></td>
            <td className="lastrow"><input type="text" defaultValue={this.props.server} /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ServerSettings