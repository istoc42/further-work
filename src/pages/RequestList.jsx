import Footer from "../components/Footer"
import Header from "../components/Header"
import ReqFormBtn from "../components/ReqFormBtn"

function RequestList() {
    return (
        <div className="list-container">
            <Header />
            <h1>Requests go here!</h1>
            <ReqFormBtn />
            <Footer />
        </div>
    )
}

export default RequestList
