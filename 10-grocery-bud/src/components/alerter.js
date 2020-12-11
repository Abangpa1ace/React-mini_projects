import React from 'react';

const Alerter = ({ condition }) => {
  let message, style;

  if (condition === 'add') {
    message = 'Item Added to the List'
    style = {backgroundColor: '#fad2fc', color: '#b31799'}
  }
  else if (condition === 'edit') {
    message = 'Value Changed'
    style = {backgroundColor: '#c7f1c9', color: '#046107'}
  }
  else if (condition === 'delete') {
    message = 'Item Removed'
    style = {backgroundColor: '#ffd1d1', color: '#d13131'}
  }
  else if (condition === 'clear') {
    message = 'Clear Items All'
    style = {backgroundColor: '#000000', color: '#ffffff'}
  }
  return (
    <div className="alerter" style={style}>
      {message}
    </div>
  )
}

export default Alerter;