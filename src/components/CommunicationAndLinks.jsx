import { motion } from "framer-motion";
import { swipeControle } from "../logic/swipeControle";
const CommunicationAndLinks = ({setScreen}) =>{ 
    const swipeResult = () => {  
        swipeControle.swipe === 'Left' && setScreen('Home');  
    };
    return(
       
            <motion.div
                className="CommunicationAndLinks w-full h-full  p-[10px]"
                initial={{translateX:'-100vw',position:'absolute'}}
                animate={{translateX:'0',position:'static' }}
                exit={{translateX:'-100vw',position:'absolute'}}
                
                onTouchStart={(e)=>swipeControle.trackStartSwipe(e)}
                onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);swipeResult()}}
                
            >
                <h6>Git</h6>
            </motion.div>
    
       
  )
}
export default CommunicationAndLinks;