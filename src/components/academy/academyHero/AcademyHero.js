import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as s from './academyhero.module.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import YoutubeVideo from '../../youtubeVideo/youtubeVideo';
import AcademyInfo from '../academyInfo/AcademyInfo';
const AcademyHero = ({ block }) => {
    return (
        <>
            <section className={s.heroSection}>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="Thumbnail"
                    src="../../../images/academy/heroBackground.jpg"
                    className={s.backgroundImage}
                />
                <div className={`${s.heroWrapper} position-relative`}>
                    <div className='container position-relative'>
                        <div className="row">
                            <div className="col-lg-6">
                                {!!block.logoImage && block.logoImage}
                                {!!block.title && <h1 className={s.sectionTitle}>
                                    {block.title}
                                </h1>}
                                {!!block.description && <p className={s.sectionDescription}>
                                    {block.description}
                                </p>}
                                {!!block.button.text &&
                                    <button onClick={() => scrollTo('#applySection')} className={s.ctaBtn}>{block.button.text}</button>
                                }
                            </div>
                            <div className="col-lg-6">
                                <YoutubeVideo
                                    videoId={"oX6TgspyDuA"}
                                    image={<>
                                        <StaticImage
                                            placeholder="none"
                                            loading="eager"
                                            alt="youtube-placeholder"
                                            className="mw-100 w-100 mh-100 h-100"
                                            src="../../../images/academy/heroVideoPreview.jpg"
                                        /></>}>
                                </YoutubeVideo>
                            </div>
                        </div>
                    </div>
                </div>
                <AcademyInfo block={block.academyInfo} />
            </section>
            {/* <section id="applySection" className={s.applySection}>
            </section> */}
        </>
    )
}
export default AcademyHero;