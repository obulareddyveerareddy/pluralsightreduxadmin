import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
    return(
        <nav className="navbar">
           <div className="container">
              <div className="navbar-header page-scroll">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 </button>
                 <a className="navbar-brand logo" href="#page-top">Add One</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                       <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                       <IndexLink to="/" className="active" activeClassName="active">Home</IndexLink>
                    </li>
                    <li className="page-scroll">
                       <Link to="/courses" activeClassName="active">Courses</Link>
                    </li>
                    <li className="page-scroll">
                       <Link to="/about" activeClassName="active">About</Link>
                    </li>
                 </ul>
              </div>
           </div>
        </nav>
    );
};

export default Header;