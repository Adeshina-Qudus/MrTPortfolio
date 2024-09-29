import style from "./index.module.css"
import expenseTrackerImg from "../../assert/featuredProject/ecommerce.png"
import contactManagement from "../../assert/featuredProject/Blog.png"
import bookEase from "../../assert/featuredProject/Diary.png"
import FilledButton from "../../component/reuseable/filledbutton";
import {Link} from "react-router-dom";
const FeaturedProject = () =>{
    return(
        <div className={style.mainCont}>
            <div className={style.featureProjectTop}>
                <h1 className={style.headerText}>Featured projects:</h1>
                <p className={style.text}>I have worked on many projects over the course of being a Software Developer, here are a few of my live, real-world projects</p>
            </div>
            <div className={style.aboutFeaturedProject}>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={expenseTrackerImg} className={style.img} alt={""}/>
                    </div>
                    <p className={style.headerText}
                       style={{marginRight : "50%"}}>EcommerceApp</p>
                    <p className={style.text}>Secure Ecommerce API Effortlessly manage products, orders, and payments with our comprehensive ecommerce API. Key features include: - Robust endpoints for product management, order processing, and payment integration - Secure user authentication and authorization. Streamline your ecommerce experience with our reliable and scalable API.
                    </p>
                    <div className={style.repoButton}>
                        <Link to={"https://github.com/AgboolaTobi/Ecommerce"} >
                            <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo"/>
                        </Link>
                    </div>
                </div>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={contactManagement} className={style.img} alt={""}/>
                    </div>
                    <p className={style.headerText} style={{marginRight : "37%"}}>Blog</p>
                    <p className={style.text}>Share ideas & perspectives in our 5 main sections: News, Sports, Entertainment, Politics & Lifestyle. Write, connect & express yourself with like-minded individuals. Join our vibrant community today! </p>
                      <div className={style.repoButton}>
                          <Link to={"https://github.com/AgboolaTobi/BlogSphere"} >
                            <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo"/>
                          </Link>
                      </div>
                </div>
                <div className={style.projectView}>
                    <div className={style.projectViewBorder}>
                        <img src={bookEase} className={style.img} alt={""}/>
                    </div>
                    <p className={style.headerText} style={{marginRight : "60%"}}>Diary Application</p>
                    <p className={style.text}>A personalized digital diary for recording life's precious moments. Register, create, and securely store your memories. Easily update, delete, and reflect on your thoughts and experiences. Secure user registration and login - Create and manage multiple diary entries - Update and delete existing entries - Read and reflect on past memories.</p>
                       <div className={style.repoButton}>
                        <Link to={"https://github.com/AgboolaTobi/DiaryApp"} >
                            <FilledButton color={"#7562E0"} textColor={"white"} text="Github Repo"/>
                        </Link>
                       </div>
                </div>
            </div>
        </div>
    )
}


export default FeaturedProject