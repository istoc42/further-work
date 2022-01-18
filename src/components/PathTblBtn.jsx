import {Link} from 'react-router-dom'

function PathTblBtn() {
    return (
        <div className="link-btn">
            <button>
                <Link to='/pathologist-table' style={{ textDecoration: 'none' }}>
                    <p>View Pathologist Table</p>
                </Link>
            </button>
        </div>
    )
}

export default PathTblBtn
