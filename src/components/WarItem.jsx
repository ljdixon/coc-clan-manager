import React from 'react';
import { Button } from 'semantic-ui-react';

const WarItem = ({war, onWarClick}) => {
    return (
        <li><Button onClick={() => onWarClick(war)} >~FOG~ vs {war.warOpponent} {war.warScore}</Button></li>
    )
};

export default WarItem;