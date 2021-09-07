import Sidebar from "../../components/sidebar/Sidebar"
import "./single.css"
import SinglePost from './../../components/singlePost/SinglePost';

function Single() {
    return (
        <div className="single" >
               <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single
