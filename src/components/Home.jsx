import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect, useCallback} from "react";
import { swipeControle } from "../logic/swipeControle";
import photo from '../assets/photo_2.png';
import arrow_icon from '../assets/arrow.svg';
const Home = ({setScreen}) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    
    const exitAnimation = useCallback(async () => {
        await animate(
          scope.current,
          swipeControle.swipe === 'Right' ? { translateX: '110vw',position: 'absolute' } :
          swipeControle.swipe === 'Left' ? { translateX: '-110vw',position: 'absolute' } :
          swipeControle.swipe === 'Up' ? { translateY: '-110vh',position: 'absolute'} : { translateY: '110vh',position: 'absolute'}
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
            className="home w-full h-full p-[10px] bg-slate-50 bg-opacity-[0.1]  rounded-[10px] flex flex-wrap justify-center"
            initial={swipeControle.swipe === 'Left' ? {translateX: '100vw', top:'10px'} :
                     swipeControle.swipe === 'Right' ? {translateX: '-100vw', top:'10px'} :
                     swipeControle.swipe === 'Up' ? {translateY: '100%', top:'10px'} : {translateY: '-100%' ,top:'10px'} 
            }
            animate={{translateY: '0vh', translateX: '0vw', position:'static'}}
            onTouchStart={(e) => swipeControle.trackStartSwipe(e)}
            onTouchEnd={(e) => {swipeControle.trackEndSwipe(e); swipeResult();}}
            ref={scope}
        >
            <h6>ABOUT ME</h6>
            <img src={photo} alt='me'  className='rounded w-[300px] mx-auto' />
            <p className=" ">
                Hello, my name is Bohdan and I am a frontend developer. I have experience in creating web applications. I am looking for a job both in an office and remotely, with the opportunity to work in a team where I can learn new things and contribute to the overall success of projects. I am ready to start working immediately and willing to take on any technical challenges that may arise. Thank you for your attention, I hope for successful cooperation with you. If you have any questions or interest in my work, please feel free to contact me.
            </p>
            
            <img src={arrow_icon} alt='arrow' className='absolute top-[-18px] rotate-90 y_up_array_animate' />
            <img src={arrow_icon} alt='arrow' className='absolute  top-[50vh] rotate-180 x_right_array_animate ' />
            <img src={arrow_icon} alt='arrow' className='absolute left-[-18px] top-[50vh] x_left_array_animate' />
            <img src={arrow_icon} alt='arrow' className='absolute bottom-[-18px] rotate-[-90deg] y_down_array_animate' />
        </motion.div>        
    );
};

export default Home;