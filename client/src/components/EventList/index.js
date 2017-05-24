import React  from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './index.css'
export default({events}) => {
  let eventArr = [];
  let key=0;
  for (let key in events) {
    if (events.hasOwnProperty(key)) {
      let event = events[key]
      eventArr.push(
          <TableRow key={`${key++}-${event.title}`}>
            <TableRowColumn>{event.title}</TableRowColumn>
            <TableRowColumn>{event.date}</TableRowColumn>
            <TableRowColumn>{event.venue}</TableRowColumn>
          </TableRow>
      )
    }
  }
  return (
      <Table className="EventList">
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Venue</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventArr}
        </TableBody>
      </Table>
  )
}
