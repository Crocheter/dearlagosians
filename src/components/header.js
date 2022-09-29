import arrow from "../assets/arrow-down.png"
export default function Header() {
    return (
        <div className="flex justify-between py-5 px-7" style={{backgroundColor: "#111113"}}>
            <h1 
            className="text-3xl font-bold"
            style={{color: "#00FF00", fontFamily: "'Open Sans', sans-serif"}}>
                <span style={{color: "yellow", fontFamily: "'Kalam', cursive"}}>D</span>
                <span style={{color: "#AE14DD", fontFamily: "'Ubuntu', sans-serif"}}>E</span>
                <span style={{color: "#0BFFF8", fontFamily: "'Sirin Stencil', cursive"}}>A</span>
                <span style={{color: "red", fontFamily: "'Calligraffitti', cursive"}}>R</span>
                Lagosians
            </h1>
            <ul className="flex" style={{color: "#FFFFFF", fontSize:"16px", fontWeight:"500"}}>
                <li className="mr-5 mt-2">Home</li>
                <li className="mr-5 mt-2">About</li>
                <li className="mr-5 mt-2">Contact</li>
                <li className="mr-5 mt-2 flex">Theme <img src={arrow} alt="arrow" style={{width: "15px", height: "13px"}} className="mt-2 mx-1" /></li>
            </ul>
        </div>
    )
}

