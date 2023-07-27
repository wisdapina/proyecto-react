import CartWidget from "../CartWidget/CartWidget";

function NavBar (){
    return(
       <div className="d-flex justify-content-around mt-4 dark">
                <nav className="  navbar  navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand " href="#"><img className="img-fluid " src="" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item me-2">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
                    </li>
                    
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Catalogo</a>
                    </li>
                        <li className="nav-item ">
                    <a className="nav-link" href="#">Carrito</a>
                   
                        </li>
                       <CartWidget/>
       
            </ul>
        </div>
         </div>
        </nav>
</div>
    )




}


export default NavBar;