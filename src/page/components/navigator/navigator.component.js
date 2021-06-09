import React, { Component } from 'react';
import { Page, List, ListInput, Block, Col, Button } from 'framework7-react';


export default class Navigator extends Component {

  static defaultProps = {
    id: null,
    getExtensionHandler: ()=>{}
  }

  constructor(props){
    super(props);
    try {
      this.handleTrackList = this.handleTrackList.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this.extensionHandler = this.props.getExtensionHandler();
      this.debug = false;

      this.state = {
        warning: null
      }
    } catch (e) {
      console.warn(e);
    }
  }

  trackList(){
    return new Promise(async (resolve, reject)=>{
      try {
        let is_valid = await this.extensionHandler.track_list();
        resolve('Iterating over URL List');
      } catch (e) {
        console.warn(e);
        reject(e)
      }
    });
  }

  async handleTrackList(){
    try {
      await this.trackList();
      this.$f7.views.main.router.navigate('/project/'+this.props.id)
    } catch (e) {
      this.setState({
        warning: this._getWarning(e)
      })
    }
  }

  _getWarning(text){
    return (<p className="error color-red" >{text}</p>)
  }

  /**
   * [_handleSubmit handle submit event]
   * @param  {any} event
   */
  _handleSubmit(event){
    event.preventDefault();
    this.handleTrackList();
  }

  render() {
    return (
      <Page name={this.constructor.name.toLowerCase()} >
        <form onSubmit={this._handleSubmit} >
          <List>
            <Block>
              <Col tag="span">
                <Button onClick={this.handleTrackList} fill>List</Button>
              </Col>
            </Block>
          </List>
        </form>

      </Page>
     )
  }



}//class
