import { Link } from 'gatsby';
import parse from 'html-react-parser';
import React from 'react';
import * as s from './join.module.css';
import { StaticImage } from "gatsby-plugin-image";


const JoinSection = ({ block }) => {
    return (
        <>
            <section className={s.joinSection}>
                {<StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="HeroBackground"
                    src="../../../images/joinSectionBackground.png"
                    className={s.backgroundImage}
                />}
                <div className="container position-relative">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h3>{block.title}</h3>
                            <p>{parse(block.description)}</p>
                            <Link to={block.btn.url} className={s.ctaBtn}>
                                {block.btn.text}
                            </Link>
                        </div>
                        <div className="col-lg-5">
                            <iframe src="https://www.youtube.com/embed/2uHaXcHE40A"
                                title="Mastering Growth Hacking: Scaling Strategies, Learning from Failure, and Data-Driven Experimentation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default JoinSection;