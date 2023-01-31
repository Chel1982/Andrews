import React from "react";
import NavigationCss from "./Navigation.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
	return (
		<nav className={NavigationCss.navigation}>
			<ul>
				<Link
				    to="TechStack"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration={500}
				>
					Tech Stack
				</Link>
			</ul>
		
			<ul>
				<Link
				    to="Services"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration={500}
				>
					Services
				</Link>
			</ul>

			<ul>	
				<Link
				    to="Industries"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration={500}
				>
					Industries
				</Link>
			</ul>
		
			<ul>
				<Link
				    to="AboutUs"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration={500}
				>
					About Us
				</Link>
			</ul>
		</nav>
	)
}

export default Navigation;