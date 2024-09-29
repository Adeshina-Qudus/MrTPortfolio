import style from "./index.module.css"
import aboutMe from "../../assert/aboutme/ab-img.png.png"
import OutlinedButton from "../../component/reuseable/outlinedButton";
const AboutMe = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.content}>
                <div className={style.cont}>
                    <img src={aboutMe} alt={""} height={240.95} width={450} className={style.abtImg}/>
                </div>
                <div className={style.about}>
                    <div className="about-container">
                        <h1 className={style.headerText}>About Me</h1>
                        <p className={style.text}>Hi, I'm Agboola Tobi Samuel, a software engineer  <span className="break">
                        dedicated to secure, efficient coding (Java, Python, MongoDB, MySQL, unittest).</span> <span className="break">
                        ISC2 Certified in Cybersecurity. Passionate about lifelong learning and collaborative innovation.</span> <span className="break">
                        Let's connect and explore opportunities for growth and collaboration! </span></p>
                    </div>
                    <div>
                        <div className={style.languageButton}>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"Java"}
                                            color={"#181824"}/>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"Python"}
                                            color={"#181824"}/>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"JavaScript"}
                                            color={"#181824"}/>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"Golang"}
                                            color={"#181824"}/>
                        </div>
                        <div className={style.languageButton}>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"HTML / CSS"}
                                            color={"#181824"}/>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"React"}
                                            color={"#181824"}/>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"React Native"}
                                            color={"#181824"}/>
                            <OutlinedButton bordercolor={"#7562E0"} textColor={"white"} text={"SQL"} color={"#181824"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AboutMe