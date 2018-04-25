import React from 'react';
import { List } from 'semantic-ui-react';

const WarItem = ({war, onWarClick}) => {
    return (
        <List.Item onClick={() => onWarClick(war)}>
            <List.Content>
                <List.Header className={war.warResult}>~FOG~ vs {war.warOpponent} {war.warScore} </List.Header>
            </List.Content>
        </List.Item>
    )
};

export default WarItem;