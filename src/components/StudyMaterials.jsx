import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
const StudyMaterials = ({setScreen}) =>{
    const swipeResult = () => {  
        swipeControle.swipe === 'Down' && setScreen('Home');  
    };
    return(
        < motion.div     
            className="stack w-full h-full p-[10px]"
            initial={{translateY:'100vh',position: 'absolute'}}
            animate={{translateY:'0',position: 'static'}}
            exit={{translateY:'100vh',position: 'absolute'}}
            
            onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
        >
            <h6>Study Materials</h6>
        </motion.div>
    )
}

export default StudyMaterials;