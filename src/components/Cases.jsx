import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
import arrow_icon from '../assets/arrow.svg';
const Cases = ({setScreen}) =>{
    const swipeResult = () => {  
        swipeControle.swipe === 'Up' && setScreen('Home');  
    };
    return(
        < motion.div     
            className="stack w-full h-full p-[10px] bg-slate-50 bg-opacity-[0.1] flex justify-center rounded-[10px]"
            initial={{translateY:'-100vh',position: 'absolute'}}
            animate={{translateY:'0',position: 'static'}}
            exit={{translateY:'-100vh',position: 'absolute'}}
            
            onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
        >
            <h6>Cases</h6>
            <img src={arrow_icon} alt='arrow' className='absolute  rotate-[-90deg] y_down_array_animate' />
        </motion.div>
    )
}

export default Cases;