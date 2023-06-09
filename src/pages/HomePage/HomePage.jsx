export default function HomePage() {
    return(
        <>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                <h2>Welcome to your newest Task Manager</h2>
                <h3>Click your list in the navigation bar to begin</h3>
                </div>
                {/* <div className="col-lg"></div> */}
       
                <div className="col-sm-6">
                <h1>Future Updates</h1>
                <h3>1. Total Completed Tasks</h3>
                <h3>2. Time to completion</h3>
                <h3>3. Total tasks remaining</h3>

                </div>
            </div>
        </div>
        </>
    )
}