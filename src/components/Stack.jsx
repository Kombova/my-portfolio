import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
import arrow_icon from '../assets/arrow.svg';

const Stack = ({setScreen}) =>{
    const swipeResult = () => {  
        swipeControle.swipe === 'Right' && setScreen('Home');  
    };
    return(
        < motion.div     
            className="stack w-full h-full p-[10px] bg-slate-50 bg-opacity-[0.1]  rounded-[10px]"
            initial={{translateX:'100vw',position: 'absolute'}}
            animate={{translateX:'0',position: 'static'}}
            exit={{translateX:'100vw',position: 'absolute'}}
            
            onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
        >
            <h6>Stack</h6>
            <img src={arrow_icon} alt='arrow' className='absolute left-[-18px] top-[50vh] x_left_array_animate' />
        </motion.div>
    )
}

export default Stack;