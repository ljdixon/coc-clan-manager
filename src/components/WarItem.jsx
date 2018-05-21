import React from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WarItem = ({war, onWarClick}) => {
    return (
        <List.Item onClick={() => onWarClick(war)}>
            <List.Content>
                <List className={war.warResult}>~FOG~ vs {war.warOpponent} {war.warScore} </List>
    {/*<Link to={`/wars/${war.warId}`} className={war.warResult}> ~FOG~ vs {war.warOpponent} {war.warScore} </Link> */}
            </List.Content>
        </List.Item>
    )
};

export default WarItem;