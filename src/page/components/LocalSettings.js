import React, { Component } from 'react'

class LocalSettings extends Component {
  constructor(props) {
    super(props)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleCheckbox(e) {
    this.props.onEngineChange({engineName: e.target.id, engineActive: e.target.checked})
  }

  handleText(e) {
    this.props.onQueryTermsChange(e.target.value)
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td><label>Search Engines</label></td>
            <td>
                {
                  this.props.searchEngines.map(({name, active}) =>
                    <div className="box" key={name.toLowerCase()}>
                      <input type="checkbox" defaultChecked={active} name={name.toLowerCase()} id={name.toLowerCase()} onChange={this.handleCheckbox} />
                      <label className="checklabel" htmlFor={name.toLowerCase()}>{name}</label>
                    </div>)
                }
            </td>
          </tr>
          <tr>
            <td className="lastrow"><label htmlFor="queryterms">Query Terms</label></td>
            <td className="lastrow"><textarea id="queryterms" defaultValue={this.props.queryTerms} onChange={this.handleText} /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default LocalSettings