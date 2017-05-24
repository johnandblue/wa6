import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../store/actions/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Event from '../Events/'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getEvents())
  }

   render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <Event events={this.props.events}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps)(App);
