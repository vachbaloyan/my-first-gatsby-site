import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react';
import parse from 'html-react-parser';
import * as s from './podcastBanner.module.css';

const PodcastBanner = ({ block }) => {
    return (
        <>
            <section className={s.podcastsBannerSection}>
                <div className="container">
                    <div className={s.podcastBanner}>
                        <div className="row">
                            <div className="col-lg-2">
                                <div className={s.podcastBannerImg}>
                                    {!!block.image && block.image}
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <h3>{!!block.title && parse(block.title)}</h3>
                                <p>{!!block.description &&  parse(block.description)}</p>
                                <div className={`${s.podcastBannerLinksWrapper} d-flex`}>
                                    {!!block.links.linkedin &&
                                        <a href={block.links.linkedin} className={s.podcastBannerLink}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_6430_12054)">
                                                    <path
                                                        d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6430_12054">
                                                        <rect width="48" height="48" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </a>}
                                    {!!block.links.twitter &&
                                        <a href={block.links.twitter} className={s.podcastBannerLink}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_6430_12055)">
                                                    <path
                                                        d="M15.1003 43.5C33.2091 43.5 43.1166 28.4934 43.1166 15.4837C43.1166 15.0618 43.1072 14.6306 43.0884 14.2087C45.0158 12.8149 46.679 11.0885 48 9.1106C46.205 9.9092 44.2993 10.4308 42.3478 10.6575C44.4026 9.42582 45.9411 7.49094 46.6781 5.21153C44.7451 6.35712 42.6312 7.16522 40.4269 7.60122C38.9417 6.02312 36.978 4.97823 34.8394 4.6281C32.7008 4.27797 30.5064 4.6421 28.5955 5.66419C26.6846 6.68629 25.1636 8.30941 24.2677 10.2826C23.3718 12.2558 23.1509 14.4692 23.6391 16.5806C19.725 16.3842 15.8959 15.3674 12.4 13.5962C8.90405 11.825 5.81939 9.33887 3.34594 6.29903C2.0888 8.46649 1.70411 11.0313 2.27006 13.4722C2.83601 15.9131 4.31013 18.0469 6.39281 19.44C4.82926 19.3903 3.29995 18.9694 1.93125 18.2118V18.3337C1.92985 20.6083 2.7162 22.8132 4.15662 24.5735C5.59704 26.3339 7.60265 27.5411 9.8325 27.99C8.38411 28.3863 6.86396 28.444 5.38969 28.1587C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9612 14.5847 35.0025C11.0968 37.7422 6.78835 39.2283 2.35313 39.2212C1.56657 39.22 0.780798 39.1718 0 39.0768C4.50571 41.9675 9.74706 43.5028 15.1003 43.5Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_6430_12055">
                                                        <rect width="48" height="48" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 gap-4 gap-lg-0">
                            {/* <div className="col-lg-4">
                                <a href="#" className="banner-item">
                                    <img src="./img/banner-podcast-img.webp" alt="" className="mw-100 item-thumbnail">
                                        <h3>Mastering Growth Hacking: Scaling Strategies, Learning from Failure & Data-Driven
                                            Experimentation</h3>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#" className="banner-item">
                                    <img src="./img/banner-podcast-img.webp" alt="" className="mw-100 item-thumbnail">
                                        <h3>Mastering Growth Hacking: Scaling Strategies, Learning from Failure & Data-Driven
                                            Experimentation</h3>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#" className="banner-item">
                                    <img src="./img/banner-podcast-img.webp" alt="" className="mw-100 item-thumbnail">
                                        <h3>Mastering Growth Hacking: Scaling Strategies, Learning from Failure & Data-Driven
                                            Experimentation</h3>
                                </a>
                            </div> */}
                        </div>
                        <div className="row justify-content-end">
                            <Link to={!!block.button.url && block.button.url} className={`d-inline-block ${s.showMoreBtn}`}>{block.button.text}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PodcastBanner;