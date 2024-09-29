import hero from "../../assert/home/Hero.jpg"
import style from "./index.module.css"
import FilledButton from "../../component/reuseable/filledbutton";
import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub} from 'react-icons/fa';
import {Link} from "react-router-dom";

const Body = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.details}>
                <div>
                    <FilledButton color={"#7562E0"} text={"Hello i'm"} textColor={"white"}/>
                    <h1 color={"white"} className={style.text}>Agboola Tobi Samuel</h1>
                    <h4 color={"white"} className={style.text}>Software Engineer</h4>
                    <div>
                        <p color={"white"} className={style.text}>
                            <a href="mailto:tobi4tee@gmail.com" style={{color: 'white', textDecoration: 'none'}}>
                                <FaEnvelope color="white"/> tobi4tee@gmail.com
                            </a></p>
                        <p className={style.text}>
                            <a href="tel:+2348068952954" style={{color: 'white', textDecoration: 'none'}}>
                                <FaPhoneAlt color="white"/> +234 806 895 2954
                            </a>
                        </p>
                        <p className={style.text}>
                            <a href="https://www.google.com/maps/search/?api=1&query=Lagos+State+Nigeria"
                               target="_blank" rel="noopener noreferrer"
                               style={{color: 'white', textDecoration: 'none'}}>
                                <FaMapMarkerAlt color="white"/> Lagos State, Nigeria
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.heroPics}>
                    <img src={hero} className={style.heroP} alt={"hero"}/>
                </div>
            </div>
            <div className={style.socials}>
                <Link to={"https://www.linkedin.com/in/agboola-tobi-samuel-8a9967125/"} color={"black"}>
                        <FaLinkedin  color="#0077B5" /> </Link>
                    <Link to={"https://github.com/AgboolaTobi"} color={"black"}>
                        <FaGithub  color="#000" /> </Link>
                </div>
        </div>
    )
}
export default Body