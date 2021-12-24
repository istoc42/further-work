import {Link} from 'react-router-dom'

function ReqListBtn() {
    return (
        <div className="link-btn">
            <button>
                <Link to='/requestlist' style={{ textDecoration: 'none' }}>
                    <p>View all requests</p>
                </Link>
            </button>
        </div>
    )
}

export default ReqListBtn
