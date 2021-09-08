import "./sidebar.css"
import { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";

function Sidebar() {
    const [cats,setCats] = useState([]);
    useEffect(()=> {
const getCats = async () => {
    const res = await axios.get("/categories/");
    setCats(res.data);
}
getCats()
    },[])
    return (
        <div className="sidebar" >
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
        <img
         className="sidebarImg"
          src="https://aymenouer.github.io/portfolio/assets/img/profile-img.jpg"
          alt=""
        />
        <p>
          My Name is Aymen Ouerghui . i am software engineer student . Passionate about 
new technologies, learning and development of myself and of others around me.
        </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c => (
                    <Link to={`/?cat=${c.name}`} className="link" >

                <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>

            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
            <a  href="mailto:aymenouerghui0@gmail.com"  >     <i className="sidebarIcon fas fa-envelope-square" ></i></a>
           <a  href="https://github.com/aymenouer">     <i className="sidebarIcon fab fa-github-square" ></i></a>
           <a  href="https://www.linkedin.com/in/aymen-ouerghi-249632146/">     <i className="sidebarIcon fab fa-linkedin" ></i></a>
           <a  href="https://aymenouer.github.io/portfolio">     <i className="sidebarIcon fab fa-pinterest-square" ></i></a>

            </div>

            </div>
        </div>
    )
}

export default Sidebar
