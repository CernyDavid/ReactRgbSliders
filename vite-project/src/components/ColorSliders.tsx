import React from 'react';
import StyledSlider from './StyledSlider';
import  {ColorSlidersContext}  from './ColorSliderContextProvicer';
import { useContext } from 'react';
import styles  from "./ColorSliders.module.css";
import { colorChannel } from './ColorSliderContextProvicer';

export const ColorSliders:React.FC = () => {
    const [state, dispatch] = useContext(ColorSlidersContext);

    return (
      <div className={styles["container"]}>
            <StyledSlider
            min={0}
            max={255}
            value={state.color.R}
            onChange={(e) => dispatch({type: "CHANGE_COLOR", value: parseInt(e.currentTarget.value), part: colorChannel.R})}
            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(${state.color.R}, 0, 0)`
            }
            />

            <StyledSlider
            min={0}
            max={255}
            value={state.color.G}
            onChange={(e) => dispatch({type: "CHANGE_COLOR", value: parseInt(e.currentTarget.value), part: colorChannel.G})}
            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(0, ${state.color.G}, 0)`
            }
            />

            <StyledSlider
            min={0}
            max={255}
            value={state.color.B}
            onChange={(e) => dispatch({type: "CHANGE_COLOR", value: parseInt(e.currentTarget.value), part: colorChannel.B})}
            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(0, 0, ${state.color.B})`
            }
            />

            <button onClick={() => dispatch({type: "RESET_COLOR"})}>Reset</button>
      </div>
    );
    
  }
  export default ColorSliders;