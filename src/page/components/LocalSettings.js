import React, { Component } from 'react'

class LocalSettings extends Component {
  constructor(props) {
    super(props)
  }

  handleEngineChange = (e) => {
    const engineName = e.target.id
    const engineActive = e.target.checked
    const searchEngines = this.props.searchEngines.map(
        ({name, url, active}) =>
          name.toLowerCase() == engineName
            ? {name, url, active: engineActive}
            : {name, url, active}
      )
    this.props.onEngineChange({searchEngines})
  }

  handleQueryTermsChange = (e) => {
    this.props.onQueryTermsChange({queryTerms: e.target.value})
  }

  render() {
    return (
      <tbody>
        <tr>
          <td><label>Search Engines</label></td>
          <td>
              {
                this.props.searchEngines.map(({name, active}) =>
                  <div className="box" key={name.toLowerCase()}>
                    <input
                      type="checkbox"
                      defaultChecked={active}
                      name={name.toLowerCase()}
                      id={name.toLowerCase()}
                      onChange={this.handleEngineChange}
                    />
                    <label className="checklabel" htmlFor={name.toLowerCase()}>{name}</label>
                  </div>)
              }
          </td>
        </tr>
        <tr>
          <td className="lastrow"><label htmlFor="queryterms">Query Terms</label></td>
          <td className="lastrow">
            <textarea
              id="queryterms"
              defaultValue={this.props.queryTerms}
              onChange={this.handleQueryTermsChange}
              placeholder="short term, a substainably longer term,..."
            />
          </td>
        </tr>
      </tbody>
    )
  }
}

export default LocalSettings