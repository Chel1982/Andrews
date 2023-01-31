import React from "react";
import IntroCss from "./Intro.module.css";

const Intro = () => {
	return (
        <section className={IntroCss.intro}>            
      		<div className={IntroCss.content}>
    			<h1 className={IntroCss.title}> Software Development Company. </h1>
    			<p className={IntroCss.text}> Take the software path to your digital future </p>
			</div>
        </section>
    )
}

export default Intro;