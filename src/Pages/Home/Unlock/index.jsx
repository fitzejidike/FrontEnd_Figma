import style from "./index.module.css";
import Frame from "../../../asset/Frame .png";



const Unlock =()=>{
    return(
            <div className={style.unlock}>
                <div>
                    <h2>How to design footer like<br/>we did</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet justo ipsum.
                        Sed<br/> accumsan quam vitae est varius fringilla.Pellentesque placerat vestibulum lorem
                        sed<br/>
                        porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                        Etiam<br/> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button style={{
                        color: "white",
                        background: "#4caf4f",
                        border: "none",
                        borderRadius: "5px",
                        padding: "15px 30px"
                    }}>
                        Learn more
                    </button>
                </div>
                <img src={Frame}/>

            </div>
    )
}

export default Unlock;