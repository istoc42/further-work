import logo from '../assets/logo.jpg'

function Header() {
    return (
        <header className='title'>
            

            <h1>Histology Further Work Requesting</h1>
            

            <div className="logo-container">
                <img src={logo} className='logo' alt='logo'/>
                <p>Severn Pathology</p>
            </div>

        </header>
    )
}

export default Header
