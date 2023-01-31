import React from "react";
import AboutUsCss from "./AboutUs.module.css";

const AboutUs = () => {
	let year = new Date().getFullYear();
	return (
        <section name="AboutUs" className={AboutUsCss.aboutUs}>
        	<div className={AboutUsCss.aboutUsText}>
				<h1 className={AboutUsCss.title}> AboutUs </h1>  
				<div className={AboutUsCss.content}>
					<p>
						Where the stars meet. {year} will be the year of digital transformation for all sectors. Stay on top of your performance with our IT talent!
					</p>
					<p>
						We are a good IT company that will gladly fulfill your orders.
					</p>   
					<div>
						Our emails:
						<ul>
							Manager: manager@andrews-lab.com
						</ul>
						<ul>
							Admin: admin@andrews-lab.com
						</ul>
						<ul>
							Owner: owner@andrews-lab.com
						</ul>
					</div> 
				</div> 	
			</div>
        </section>
    )
}

export default AboutUs;