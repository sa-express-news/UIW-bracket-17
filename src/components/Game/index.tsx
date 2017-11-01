import * as React from 'react';
import { Game as GameProps } from '../../types';

import Node from '../Node';

const Game = ({ location, time, nodes }: GameProps) => {
    const nodeComponents = nodes.map((node, index) => {
        return <Node id={node.id} team={node.team} childID={node.childID} parentIDs={node.parentIDs} key={index} />
    })
    return (
        <div className="Game">
            {nodeComponents[0]}
            <p>{location}</p>
            <p>{time}</p>
            {nodeComponents[1]}
        </div>
    )
}

export default Game;