import * as React from 'react';
import { Game as GameProps } from '../../types';

import Node from '../Node';

import './Game.css';

const Game = ({ location, time, nodes, legalityFunctionForNodes, updateNodeFunction, updateGameIndexFunction }: GameProps) => {
    const nodeComponents = nodes.map((node, index) => {
        return <Node id={node.id} team={node.team} childID={node.childID}
            parentIDs={node.parentIDs} legalityFunction={legalityFunctionForNodes}
            updateNodeFunction={updateNodeFunction}
            updateGameIndexFunction={updateGameIndexFunction}
            key={index} />
    })
    return (
        <div className="Game">
            {nodeComponents[0]}
            <div className="game-spacer">
                <p>{location}</p>
                <p>{time}</p>
            </div>
            {nodeComponents[1]}
        </div>
    )
}

export default Game;