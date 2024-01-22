import React, { useReducer } from "react";

type colorType = { R: number, G: number, B: number };

export enum colorChannel {
    R = "R",
    G = "G",
    B = "B"
};

type stateType = { 
    color: colorType
};

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }
};

type ColorsAction = {type: "CHANGE_COLOR"; value: number; part: colorChannel} |
{type: "RESET_COLOR"} |
{type: "REPLACE_COLOR"; value: colorType}

const colorsReducer = (state: stateType, action: ColorsAction) => {
    const newState = {...state};
    switch (action.type) {
        case "RESET_COLOR":
            return {color: {R: 0, G: 0, B: 0}}
        case "CHANGE_COLOR":
            newState.color[action.part] = action.value;
            return newState;
        default: return state;
    }
}

export const ColorSlidersContext = React.createContext<[stateType, React.Dispatch<ColorsAction>]>([initialState, () => {}]);


interface IColorSliderProvider {
    children: React.ReactNode;
}

export const ColorSliderContextProvider: React.FC<IColorSliderProvider> = ({ children }) => {
    const reducer = useReducer(colorsReducer, initialState);

    return (
        <ColorSlidersContext.Provider value={reducer}>
            {children}
        </ColorSlidersContext.Provider>
    );
}

export default ColorSliderContextProvider;
