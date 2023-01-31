import React from "react"; 
import FooterCss from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
	let year = new Date().getFullYear();
	return (
			<footer className={FooterCss.footer}>
				<Navigation/>
				<p>
					©{year}  Andrews Inc. All Rights Reserved.
				</p>
			</footer>
		)
}

export default Footer;