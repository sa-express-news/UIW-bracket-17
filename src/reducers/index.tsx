import { update, set, cloneDeep } from 'lodash';

import { StoreState, Bracket, Game } from '../types';
import * as constants from '../constants';
import { Action, UpdateBracketIndex, UpdateBracketID, UpdateNode, UpdateNotification, UpdateBracket, ToggleTouch, UpdateCanonicalBrackets } from '../actions';

import startingBrackets from './startingBrackets';

import { updateTeamAtNode, updateTeamAbove, nullTeamBelow, getNodeAt, fullNodeUpdate } from '../data-structures/bracket';

const initialState: StoreState = {
    activeBracketIndex: 0,
    activeBracketID: 'div1_1a',
    userBrackets: startingBrackets,
    canonicalBrackets: startingBrackets,
    postingBracket: false,
    notification: null,
    touchEnabled: false
};


export const bracketIndex = (state: number = 0, action: UpdateBracketIndex): number => {
    return action.index;
}

export const bracketID = (state: string = 'div1_1a', action: UpdateBracketID): string => {
    return action.id;
}

export const nodeUpdate = (state: Bracket = startingBrackets[0], action: UpdateNode): Bracket => {
    let targetNodeID;

    // If touch is enabled, the user is clicking on a node to update its child.

    if ('ontouchstart' in document.documentElement) {
        targetNodeID = getNodeAt(state, action.id).childID;

        // Otherwise, the user is updating the target node itself.

    } else {
        targetNodeID = action.id;
    }

    return fullNodeUpdate(state, targetNodeID, action.team);

}

export const notificationUpdate = (state: string | null, action: UpdateNotification): string | null => {
    return action.notification;
}

export const bracketUpdate = (state: Bracket[], action: UpdateBracket): Bracket[] => {
    const identifier = action.bracket.identifier;

    const matchesIdentifier = (bracket: Bracket): boolean => {
        return bracket.identifier === identifier;
    }

    const bracketIndexToUpdate = state.findIndex(matchesIdentifier);

    let newState = cloneDeep(state);
    newState[bracketIndexToUpdate] = action.bracket;

    return newState;
}

export const touchToggle = (state: boolean, action: ToggleTouch): boolean => {
    return !state;
}

export const updateCanonicalBrackets = (state: Bracket[], action: UpdateCanonicalBrackets): Bracket[] => {
    return action.brackets;
}

export const bracketApp = (state: StoreState = initialState, action: Action): StoreState => {
    switch (action.type) {
        case constants.UPDATE_BRACKET_INDEX:
            return Object.assign({}, state, {
                activeBracketIndex: bracketIndex(state.activeBracketIndex, action as UpdateBracketIndex)
            });
        case constants.UPDATE_BRACKET_ID:
            return Object.assign({}, state, {
                activeBracketID: bracketID(state.activeBracketID, action as UpdateBracketID)
            });
        case constants.UPDATE_NOTIFICATION:
            return Object.assign({}, state, {
                notification: notificationUpdate(state.notification, action as UpdateNotification)
            });
        case constants.UPDATE_NODE:
            const bracketToUpdate = state.userBrackets[state.activeBracketIndex];
            const updatedBracket = nodeUpdate(bracketToUpdate, action as UpdateNode);
            const newUserBrackets = set(cloneDeep(state.userBrackets), `${state.activeBracketIndex}`, updatedBracket);
            return Object.assign({}, state, {
                userBrackets: newUserBrackets
            });
        case constants.UPDATE_BRACKET:
            return Object.assign({}, state, {
                userBrackets: bracketUpdate(state.userBrackets, action as UpdateBracket)
            });
        case constants.TOGGLE_TOUCH:
            return Object.assign({}, state, {
                touchEnabled: touchToggle(state.touchEnabled, action as ToggleTouch)
            });
        case constants.UPDATE_CANONICAL_BRACKETS:
            return Object.assign({}, state, {
                canonicalBrackets: updateCanonicalBrackets(state.canonicalBrackets, action as UpdateCanonicalBrackets)
            });
        default:
            return state;
    }
}