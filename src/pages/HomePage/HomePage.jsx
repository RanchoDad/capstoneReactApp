import { Link } from "react-router-dom"
export default function HomePage() {
    return(
        <>
        
        <h2 className="text-shadow">Welcome to your newest Task Manager</h2>
        <br />
        <div className="container align-lt">
            <div className="row">
                <div className="col-lg-7">
                <h4>TaskApp is a task tracking platform for a user to 
                    enter tasks and descriptions including due dates and completion status. Once a user has created a task, 
                    it will appear in chronological order with all of their remaining tasks.
                     All fields can be edited if needed and the task can be deleted.</h4>
                    <br />
                    <h3 className="">Future Updates</h3>
                        <h5>1. Total Completed Tasks</h5>
                        <h5>2. Time to completion</h5>
                        <h5>3. Total tasks remaining</h5>
                        <h5>4. Separated into columns, with descriptive graphics.</h5>
                    <br />
                    <h6>TaskApp is a MERN stack CRUD application created by <a href="http://www.joshgarber.dev" target="_blank">Josh Garber </a>
                        during the General Assembly Software Engingeering Immersive program.</h6>
                </div>
       
                {/* <div className="col-sm-4"> */}
            
                {/* </div> */}
            </div>
        </div>
        </>
    )
}