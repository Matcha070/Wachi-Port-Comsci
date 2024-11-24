import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SOP from "../SOP";
import { useState } from "react";

const navs = [
    {title:"SOP", sectionID:"SOP-section"},
    {title:"ระเบียนแสดงผลการศึกษา(ปพ.1)", sectionID:"ระเบียนแสดงผลการศึกษา(ปพ.1)-section"},
    {title:"โอลิมปิกวิชาการ ค่าย 1 สอวน. วิชาคณิตศาสตร์", sectionID:"โอลิมปิกวิชาการ ค่าย 1 สอวน. วิชาคณิตศาสตร์-section"},,
    {title:"Computer Programming-KKU", sectionID:"โครงการเตรียมวิศวกรรมศาสตร์์ มหาวิทยาลัยขอนแก่น Computer Programming-section"},
    {title:"Engineering Programming-KMITL", sectionID:"โครงการเตรียมวิศวกรรม KMITL Pre-Engineering School Program 2023 Engineering Programming-section"},
    {title:"Engineering Drawing-KMITL", sectionID:"โครงการเตรียมวิศวกรรม KMITL Pre-Engineering School Program 2023 Engineering Drawing-section"},
]

const Navbar = () =>{

    const[isMouseEnter, setIsMouseEnter] = useState({})

    const handleClick = (sectionID) =>{
        console.log(sectionID);
        document.getElementById(sectionID).scrollIntoView({behavior: "smooth"})
    }

    return(
        <div>
            {
                navs.map((e,i)=>(
                    <div className='flex items-center mx-5 mb-5' 
                    key={`nav-${e}-${i}`}
                    onClick={()=>handleClick(e.sectionID)}
                    onMouseEnter={() => setIsMouseEnter({[e.title]: true})}
                    onMouseLeave={() => setIsMouseEnter({[e.title]: false})}
                    ><FontAwesomeIcon className={` text-skyblue new-arrow ${isMouseEnter[e.title] ?"":"hidden"}`} icon = {faArrowRight}/> 
            <div className="ml-1 text-xl text-gray-400 cursor-pointer"><div className={`${isMouseEnter[e.title] ? "translate-x-4" : ""} duration-500 ease-out`}>{e.title}</div></div> 
            </div>
                ))
            }
            
        </div>
    )
}

export default Navbar;