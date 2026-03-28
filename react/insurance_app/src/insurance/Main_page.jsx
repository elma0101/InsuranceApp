

export default function MainPage() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Insurance Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Supplier</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Operation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Insurance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Report</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex align-items-center">
                            <img src="../../images/profil.jpg" alt="image" />
                            <span className="ml-2">John Doe</span>  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="Header">
            <i></i>
            <h3>Insurance Management</h3>
            <ul>
                <span><li>Dashboard</li></span>
                <span><li>Supplier</li></span>
                <span><li>Operation</li></span>
                <span><li>Insurance</li></span>
                <span><li>Alerts</li></span>
                <span><li>Report</li></span>
            </ul>
            <i></i>
            <i></i>
            <h3>ONDA insurance</h3>
            <img src="" alt=""/>
            <p></p>
        </div>
        <div className="Main">

        </div>
        <div className="Footer">

        </div>
    </>
}