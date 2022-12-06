import React, { Component } from 'react'

class OptionalSettings extends Component {
  constructor(props) {
    super(props)
  }

  handleOptionsChange = (e) => {
    const optionName = e.target.name
    const optionActive = e.target.value == 'yes' ? true : false
    const options =
      Object.fromEntries(
        Object.entries(this.props.options).map(
          ([key, {_, value}]) => key == optionName
            ? [key, optionActive]
            : [key, value]
        )
      )
    this.props.onOptionsChange(options)
  }

  render() {
    const options = this.props.options

    return (
      <tbody>
        {
          Object.entries(this.props.options).map(([key, {name, value}]) =>
            <tr key={key}>
              <td><label htmlFor={key}>{name}</label></td>
              <td>
                <div className="box">
                  <input
                    type="radio" name={key} id={key + '_yes'} value="yes"
                    checked={value} onChange={this.handleOptionsChange}
                  />
                  <label htmlFor={key + '_yes'} className="radiolabel">Yes</label>
                </div>
                <div className="box">
                  <input
                    type="radio" name={key} id={key + '_no'} value="no"
                    checked={!value} onChange={this.handleOptionsChange}
                  />
                  <label htmlFor={key + '_no'} className="radiolabel">No</label>
                </div>
              </td>
            </tr>
          )
        }
      </tbody>
    )
  }
}

export default OptionalSettings