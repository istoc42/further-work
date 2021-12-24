import {Link} from 'react-router-dom'

function ReqFormBtn() {
    return (
        <div className="link-btn">
            <button>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p>Back to request form</p>
                </Link>
            </button>
        </div>
    )
}

export default ReqFormBtn