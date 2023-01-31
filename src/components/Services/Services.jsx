import React from "react";
import ServicesCss from "./Services.module.css";
import Carousel from 'nuka-carousel';

const Services = () => {
	return (		
		<section name="Services" className={ServicesCss.services}>
			<div className={ServicesCss.servicesText}>
				<h1 className={ServicesCss.title}>Services</h1>
				
				<Carousel autoplay={true} wrapAround={true} autoplayInterval={5000} speed={3000} >
  				
  					<div className={ServicesCss.content}>
  						<p> Mobile Development</p> 
  						<p> Web Development </p>
  						<p> Cross-Platform Development </p>
					</div>
  					<div className={ServicesCss.content}>
	  					<p> Custom Software Development </p>
						<p> Staff Augmentation </p>
						<p> Managed Delivery </p>
					</div>
  					<div className={ServicesCss.content}>
	  					<p> Dedicated Team </p>
						<p> UI/UX Design </p>
						<p> Application Maintenance and Support Services </p>
					</div>
  					<div className={ServicesCss.content}>
  						<p> DevOps Services </p>
						<p> Quality Assurance </p>
						<p> Project Management </p>
					</div>
					<div  className={ServicesCss.content}>
						<p> Solution Architecture </p>
						<p> Business Analysis </p>
						<p> Discovery Phase	</p>
					</div>
					<div  className={ServicesCss.content}>
						<p> Data Science </p>
						<p> Startups & MVP Services </p>
						<p> Cloud Development </p>
					</div>
					<div  className={ServicesCss.content}>
						<p> IT Security Management </p>
						<p> IoT Development Services </p>
						<p> Database </p>
					</div>
				
				</Carousel>
			</div>
		</section>
	)
}

export default Services;




