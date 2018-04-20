import React from 'react';
import WarItem from './WarItem.jsx'

const WarList = (props) => {
  const warItems = props.wars.map((war) => {
    return <WarItem key={war.warId}
                    war={war}
                    onWarClick={props.onWarClick}/>
  });

  return (
    <ul>{warItems}</ul>
  )
}
  
export default WarList;