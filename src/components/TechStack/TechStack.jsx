import React from "react";
import TechStackCss from "./TechStack.module.css";

const TechStack = () => {
	return (
		<section name="TechStack" className={TechStackCss.techStack}>
			<div className={TechStackCss.techStackText}>
				<h1 className={TechStackCss.title}> Tech Stack </h1>
				<div className={TechStackCss.content}>
					<p> Collaborate with Andrews’s IT experts to build outstanding custom software via an extensive selection of frameworks. </p>
					<p> FRONT-END: Angular, React, Vue. </p>
					<p> BACK-END: Java, .NET, PHP, Python, Node, Ruby, Golang, Scala, Rust, C/C++. </p>
					<p> MOBILE: Android, iOS, React, Native, Flutter. </p>
				</div>
			</div>
		</section>
	)
}

export default TechStack;