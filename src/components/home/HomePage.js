import React from 'react';
import {Link} from 'react-router';
import headerBackground from './../../styles/images/home-computer-hero_opt@2x.jpg';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div className="flexslider">
                    <div className="flexslider-right">
                        <h1 className="txt-cta-title text-primary">Small Business Accounting Software That Makes Billing Painless</h1>
                        <p className="txt-cta-para">
                        The all-new AddOne is accounting software that makes running your small business easy, fast and secure. 
                        Spend less time on accounting and more time doing the work you love.
                        </p>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <button className="btn btn-cta-primary">Get Started for Free</button>
                            <p className="txt-cta-alert">100% for small business owners recommended FreshBooks</p>
                        </div>
                        <span className="txt-cta-small">No credit card required. Cancel anytime.</span>
                    </div>
                    <div>
                        <img src={headerBackground} style={{width:"100%"}} />
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default HomePage;