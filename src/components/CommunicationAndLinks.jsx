import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
import arrow_icon from '../assets/arrow.svg';
const CommunicationAndLinks = ({setScreen}) =>{ 
    const swipeResult = () => {  
        swipeControle.swipe === 'Left' && setScreen('Home');  
    };
    return(
       
            <motion.div
                className="CommunicationAndLinks w-full h-full  p-[10px] bg-slate-50 bg-opacity-[0.1]  rounded-[10px]"
                initial={{translateX:'-100vw',position:'absolute'}}
                animate={{translateX:'0',position:'static' }}
                exit={{translateX:'-100vw',position:'absolute'}}
                
                onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
                onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
                
            >
                <h6>Git</h6>
                <img src={arrow_icon} alt='arrow' className='absolute  top-[50vh] rotate-180 x_right_array_animate ' />
            </motion.div>
    
       
  )
}
export default CommunicationAndLinks;