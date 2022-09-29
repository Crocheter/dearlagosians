import hero from "../assets/hero.svg"
export default function First() {
    return (
        <div className="flex px-7 pt-10" style={{backgroundColor: "#050201", marginBottom: "-100px"}}>
            <div  style={{color: "#FFFFFF", fontFamily: "'Dosis', sans-serif"}} className="py-7">
                <p  style={{fontSize: 62, lineHeight: "80px", width: 680, marginTop: "50px"}}><span style={{color: "#FFB60B", fontWeight: 700}}>Lagos:</span> A city of the spirited, the home for all and sundry.</p>
                <p className="py-7" style={{fontSize: 22, }}>Write to your favourite group of Lagosians.... <span className="underline" style={{color: "#E0AA3E"}}>Learn more</span>
                </p>
                <button>Write to a Lagosian...</button>
            </div>
            <img src={hero} alt="hero" style={{marginTop: "-66px", marginLeft: "-30px", width: "723px", maxWidth: "100%", height: "730px"}}/>
        </div>
    )
}