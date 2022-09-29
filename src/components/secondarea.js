import Letters from "./letters"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
export default function Second() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return(
        <motion.div ref={carousel} whileTap={{cursor: "grabbing"}} style={{backgroundColor: "#050201", cursor: "grab", overflow: "hidden",}} className="carousel">
            <hr style={{backgroundColor: "#FFFFFF"}} className="mb-10"/>
            <h1 style={{color: "#FFFFFF", fontWeight: 700, fontSize: 62,}} className="mx-9 mb-10">Letters</h1>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex inner-carousel">
                <Letters
                    name="Abisola Odutayo"
                    job="Student, Frontend Developer."
                    letter=" Dear Lagosians,
                    Especially those working 9 - 5, I want to say that you are special in your own way. Don't ever allow
                the opinions of others define you! Continue your good work in whatever field and seek growth!"
                />
                <Letters 
                    name="Amara Odutayo"
                    job="Accountant"
                    letter="Dear Road Sellers,
                    You inspire me through your doggedness, you are always there come rain, come sunshine."
                />
                <Letters 
                    name="Oladele Ogunyemi"
                    job="Frontend Developer"
                    letter="Dear My Strong Lagosians,
                    Living in Lagos already makes you a winner because going out on a daily in Lagos is like going to a battle field.
                    Whatever it is that you might be doing, don't give up on your dreams. Don't let the harrassment from Danfo drivers make you have a bad day
                    or the unruly behaviour of Agbero make you wish you can punch them on the face just because you are better than them.
                    Channel all that energy into what you are doing and make the best of it, and aspire to make Lagos, the Lagos of your dream.
                    Keep on winning!
                    Regards,
                    Ollybanty of Lagos."
                />
                <Letters 
                    name="Amara Odutayo"
                    job="Accountant"
                    letter="Dear Road Sellers,
                    You inspire me through your doggedness, you are always there come rain, come sunshine."
                />
                <Letters 
                    name="Abisola Odutayo"
                    job="Student, Frontend Developer."
                    letter=" Dear Lagosians,
                    Especially those working 9 - 5, I want to say that you are special in your own way. Don't ever allow
                the opinions of others define you! Continue your good work in whatever field and seek growth!"
                />
            </motion.div>
            <hr style={{marginTop: "100px"}}/>
        </motion.div>
    )
}