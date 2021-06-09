import React, { Component } from 'react';
import Extension from '../../Extension';
import { App as MyApp, Statusbar, View, Page, Navbar, Toolbar, Link } from 'framework7-react';
import Navigator from '../navigator/navigator.component';

export default class extends React.Component {

  constructor(props){
    super(props);
    this.getExtensionHandler = this.getExtensionHandler.bind(this);

    this.extension = new Extension();
    this.state = {
      requireUpdate: this.extension.requireUpdate
    }
    this.f7params = {
    }
    this.routes = {
      view: {
        path: '/',
        component: Navigator,
        options: {
          props: {
            getExtensionHandler: this.getExtensionHandler
          },
        },
      }
    }
    this.f7params = Object.assign(this.f7params, {routes: Object.values(this.routes)});

  }

  getExtensionHandler(){
    return this.extension.extensionHandler;
  }

  componentDidMount(){
    if(!this.state.requireUpdate){
      this.redirekt();
    }
  }

  redirekt(){
    this.$f7.views.main.router.navigate('/')

  }

  render() {
    let msg = null;
    const { loadingScreenOpened, requireUpdate } = this.state;
    if(requireUpdate){
      msg = 'Please update your Browser!';
    }
    return (
        <MyApp params={this.f7params}>
          <View main />
        </MyApp>
    );
  }
}
