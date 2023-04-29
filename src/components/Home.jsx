import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect, useCallback } from "react";
import { swipeControle } from "../logic/swipeControle";

const Home = ({setScreen}) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    const exitAnimation = useCallback(async () => {
        await animate(
          scope.current,
          swipeControle.swipe === 'Right' ? { translateX: '100vw' } :
          swipeControle.swipe === 'Left' ? { translateX: '-100vw' } :
          swipeControle.swipe === 'Up' ? { translateY: '-100vh' } : { translateY: '100vh' }
        );
        safeToRemove();
    }, [animate, safeToRemove, scope]);

    useEffect(() => {
        if (!isPresent) {
            exitAnimation();
        }
    }, [isPresent, exitAnimation]);

    const swipeResult = useCallback(() => {
        swipeControle.swipe === 'Right' && setScreen('CommunicationAndLinks');
        swipeControle.swipe === 'Left' && setScreen('Stack');
        swipeControle.swipe === 'Down' && setScreen('Cases');
        swipeControle.swipe === 'Up' && setScreen('StudyMaterials');   
    }, [setScreen]);

    return(
        <motion.div 
            className="home w-full h-full p-[10px]"
            initial={swipeControle.swipe === 'Left' ? {translateX: '100vw', position: 'absolute'} :
                     swipeControle.swipe === 'Right' ? {translateX: '-100vw', position: 'absolute'} :
                     swipeControle.swipe === 'Up' ? {translateY: '100%', position: 'absolute'} : {translateY: '-100%', position: 'absolute'} 
            }
            animate={{translateY: '0vh', translateX: '0vw'}}
            onTouchStart={(e) => swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e) => {swipeControle.trackEndSwipe(e); swipeResult();}}
            ref={scope}
        >
            <h6>Frontend Devoloper</h6>
        </motion.div>        
    );
};

export default Home;