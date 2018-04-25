import React from 'react';
import WarItem from './WarItem.jsx'
import { List } from 'semantic-ui-react';

const WarList = (props) => {
  const warItems = props.wars.map((war) => {
    return <WarItem key={war.warId}
                    war={war}
                    onWarClick={props.onWarClick}/>
  });

  return (
    <List selection>{warItems}</List>
  )
}
  
export default WarList;