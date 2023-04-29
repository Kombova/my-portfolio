import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
const Stack = ({setScreen}) =>{
    const swipeResult = () => {  
        swipeControle.swipe === 'Right' && setScreen('Home');  
    };
    return(
        < motion.div     
            className="stack w-full h-full p-[10px]"
            initial={{translateX:'100vw',position: 'absolute'}}
            animate={{translateX:'0',position: 'static'}}
            exit={{translateX:'100vw',position: 'absolute'}}
            
            onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
        >
            <h6>Stack</h6>
        </motion.div>
    )
}

export default Stack;