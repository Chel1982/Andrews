import React from "react";
import IndustriesCss from "./Industries.module.css";

const Industries = () => {
	return (
		<section name="Industries" className={IndustriesCss.industries}>
			<div className={IndustriesCss.industriesText}>
				<h1 className={IndustriesCss.title}>Industries</h1>
				<div className={IndustriesCss.content}>
					<ul>
						<li>Financial Services</li>
						<li>eCommerce</li>
						<li>Automotive</li>
						<li>eLearning</li>
						<li>Travel & Hospitality</li>
						<li>Life Sciences</li>	
						<li>Agriculture</li>
						<li>Healthcare</li>
						<li>Media & Entertainment</li>
					</ul>
					<ul>
						<li>iGaming</li>
						<li>Real Estate</li>
						<li>Aviation</li>
						<li>Oil & Gas</li>
						<li>Logistics</li>
						<li>Telecom</li>
						<li>Manufacturing</li>
						<li>Retail</li>
						<li>Enterprise</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Industries;