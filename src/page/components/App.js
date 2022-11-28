import React from 'react'
import './App.css'

function SearchEngineSelector({name, active}) {
  const id = name.toLowerCase()
  //if (!active) return null
  return (
    <div className="box"><input type="checkbox" defaultChecked={active} name={id} id={id} /><label htmlFor={id}>{name}</label></div>
  )
}

function App() {

  let searchEngines = [
    {name: 'Google', active: true},
    {name: 'DuckDuckGo', active: true},
    {name: 'Bing', active: true},
    {name: 'Yandex', active: false},
    {name: 'Yahoo', active: true},
    {name: 'Baidu', active: true}]
  let queryTerms = 'Sage Concept Grant, elections'
  let useServer = false

  return (
    <table>
      <tr>
        <td><label htmlFor="engines">Search Engines</label></td>
        <td>
          {
            searchEngines.map(({name, active}) => <SearchEngineSelector name={name} active={active} key={name}/>)
          }
        </td>
      </tr>
      <tr>
        <td><label htmlFor="queryterms">Query Terms</label></td>
        <td><textarea id="queryterms" defaultValue={queryTerms}/></td>
      </tr>
      <tr>
        <td className="lastrow"><label htmlFor="server">Server</label></td>
        <td className="lastrow"><input type="text" defaultValue="http://localhost:8000/" /></td>
      </tr>
    </table>
  );
}

export default App