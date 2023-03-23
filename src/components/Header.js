import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
                <div className="container">
                    <Link to="/" className="navbar-brand">Seo<span className="text-primary">Gram.</span></Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link" to="index.html">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" className="nav-link" to="about.html">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services" className="nav-link" to="service.html">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="blog" className="nav-link" to="blog.html">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" className="nav-link" to="contact.html">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="free-analitics" className="btn btn-primary ml-lg-2" to="#">Free Analytics</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <div className="container">
                <div className="page-banner home-banner">
                    <div className="row align-items-center flex-wrap-reverse h-100">
                        <div className="col-md-6 py-5 wow fadeInLeft">
                            <h1 className="mb-4">Let's Check and Optimize your website!</h1>
                            <p className="text-lg text-grey mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>
                            <Link to="#" className="btn btn-primary btn-split">Watch Video <div className="fab"><span className="mai-play"></span></div></Link>
                        </div>
                        <div className="col-md-6 py-5 wow zoomIn">
                            <div className="img-fluid text-center">
                                <img src="/img/banner_image_1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <Link to="#about" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;