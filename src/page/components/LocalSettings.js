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

  handleResultTypeChange = (e) => {
    const resultTypeName = e.target.id
    const resultTypeActive = e.target.checked
    const resultTypes = this.props.resultTypes.map(
        ({name, active}) =>
          name.toLowerCase() == resultTypeName
            ? {name, active: resultTypeActive}
            : {name, active}
      )
    this.props.onResultTypeChange({resultTypes})
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
          <td>
            <label>Result Types</label>
            <div className="tooltip" data-title="Results types to access for each engine. Note that not all engines give
            results of all types, in particular news results might be missing.">?</div>
          </td>
          <td>
              {
                this.props.resultTypes.map(({name, active}) =>
                  <div className="box" key={name.toLowerCase()}>
                    <input
                      type="checkbox"
                      defaultChecked={active}
                      name={name.toLowerCase()}
                      id={name.toLowerCase()}
                      onChange={this.handleResultTypeChange}
                    />
                    <label className="checklabel" htmlFor={name.toLowerCase()}>{name}</label>
                  </div>)
              }
          </td>
        </tr>
        <tr>
          <td className="lastrow">
            <label htmlFor="queryterms">Query Terms</label>
            <div className="tooltip" data-title="Comma-seperated list of terms to query. Each term is queried once by a selected search engine.
            To query the same term by multiple search engines, repeat the term for each engine.">?</div>
          </td>
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