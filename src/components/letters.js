import { filterProps } from "framer-motion";
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function Letters(props) {
    return(
        <motion.div style={{backgroundColor: "#746AB0", color: "#FFFFFF", borderRadius: "15px", minWidth: "30rem", pointerEvents: "none",}}
            className="mx-5 p-4">
            <div>
                <img src="" alt="" />
                <div>
                    <h6>{props.name}</h6>
                    <p>{props.job}</p>
                </div>
            </div>
            <div>
                <p>{props.letter}</p>
            </div>
        </motion.div>
    )
}