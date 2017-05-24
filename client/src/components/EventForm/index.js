import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css'
export default({ title, date, venue, handleSubmit, handleChange}) => {

  return (
    <div className="EventForm">
      <h2>Events for WA6</h2>
      <TextField id="title" value={title} hintText="title" onChange={handleChange}/>
      <TextField id="date" value={date} type="date" onChange={handleChange}/>
      <TextField id="venue" value={venue} hintText="venue" onChange={handleChange}/>
      <RaisedButton onClick={handleSubmit}>Submit</RaisedButton>
    </div>
  )
}
