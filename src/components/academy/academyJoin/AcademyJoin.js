import parse from 'html-react-parser';
import React from 'react';
import * as s from './academyJoin.module.css';
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';


const AcademyJoin = ({ block }) => {
    return (
        <>
            <section className={s.joinSection}>
                {<StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="HeroBackground"
                    src="./images/backgroundGradient.png"
                    className={s.backgroundImage}
                />}
                <div className="container position-relative">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div>
                            <h3>{block.title}</h3>
                            <p>{parse(block.description)}</p>
                            {!!block.btn.text &&
                                    <button onClick={() => scrollTo('#applySection')} className={s.ctaBtn}>{block.btn.text}</button>
                                }
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {block.image}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AcademyJoin;