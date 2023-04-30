import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
import arrow_icon from '../assets/arrow.svg';
const StudyMaterials = ({setScreen}) =>{
    const swipeResult = () => {  
        swipeControle.swipe === 'Down' && setScreen('Home');  
    };
    return(
        < motion.div     
            className="stack w-full h-full p-[10px] bg-slate-50 bg-opacity-[0.1] flex flex-wrap justify-center rounded-[10px]"
            initial={{translateY:'100vh',position: 'absolute'}}
            animate={{translateY:'0',position: 'static'}}
            exit={{translateY:'100vh',position: 'absolute'}}
            
            onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
        >
            <h6>Study Materials</h6>
            <img src={arrow_icon} alt='arrow' className='absolute top-[-18px] rotate-90 y_up_array_animate' />
        </motion.div>
    )
}

export default StudyMaterials;