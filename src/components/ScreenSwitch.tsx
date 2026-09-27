import { useState } from 'react';
import OpenScreen from './OpenScreen'
import MainScreen from './MainScreen'
import './ScreenSwitch.css'

/** Handles switching between the title screen and the information screen */
const ScreenSwitch = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(!isVisible)  
    }
    
    return (
    <div className='ScreenSwitch'>
        {isVisible ? <div> <OpenScreen/> 
            <button  onClick={handleClick} className="SwitchButton">
              Start
            </button> </div> : <MainScreen/>}
    </div>
    );
}
 
export default ScreenSwitch;
