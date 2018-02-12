import React from 'react';

const WarList = (props) => {
    var rows = [];
    props.wars.forEach((war) => {
      rows.push(
        <li key={war.warId} className = "list-group-item d-flex justify-content-between align-items-center">
          {war.warOpponent}
        </li>
      )
    })
    return (<ol className="list-group">{rows}</ol>);
  };

  export default WarList;