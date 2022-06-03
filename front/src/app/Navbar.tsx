import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Inventar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarContent" aria-controls="navbarContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link text-white">Domov</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact to="/login" className="nav-link text-white">Login</NavLink>
                        </li>
                        

                        <li className="nav-item">
                            <NavLink to="/categories" className="nav-link text-white">Kategorije</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link text-white">Inventar</NavLink>
                        </li>
                        
                        

                        <li className="nav-item">
                            <NavLink to="/suppliers" className="nav-link text-white">Zaposleni</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-white" >QR kode</NavLink>
                        </li>

                      
                    </ul>
                </div>
            </div>
        </nav>
    );
}
