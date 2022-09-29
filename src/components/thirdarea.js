import story from '../assets/hero2.svg'
export default function Third() {
    return(
        <div style={{backgroundColor: "#050201", color: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px"}} className="flex justify-around px-5">
            <img src={story} alt="" style={{borderRadius: "15px"}}/>
            <div>
                <h1 style={{color: "#FFFFFF", fontWeight: 700, fontSize: 62, width: "750px"}}>Share your scariest experience in Lagos</h1>
                <p>Let someone know that they are not alone</p>
                <button>Write your Lagos Story</button>
            </div>
        </div>
    )
}