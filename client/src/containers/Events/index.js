import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../store/actions/';
import EventList from '../../components/EventList/'
import EventForm from '../../components/EventForm/'
import { getEvents, postEvent } from '../../store/actions/';

class Event extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '',
      title: '',
      venue: '',
    }
  }

  handleChange = (e) => {
    let val = e.target.value;
    this.setState({
      [e.target.id]: val,
    });
  }

  clearAndCloseForm = (e) => {
    this.setState({
      date: '',
      title: '',
      venue: '',
    });
  }

  handleSubmit = (e) => {
    this.clearAndCloseForm(e)
    this.props.dispatch(addEvent(this.state));
    this.props.dispatch(postEvent(this.state));
  }

  render () {
    return (
      <div>
        <EventForm
        title={this.state.title}
        date={this.state.date}
        venue={this.state.venue}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        />
        <EventList events={this.props.events}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps)(Event)
