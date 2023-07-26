import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as s from './academyTutors.module.css';
const AcademyTutors = ({ block }) => {
    return (
        <>
            <section className={s.academyTutors}>
                <div className="container">
                    <h2 className={s.secionTitle}>{block.title}</h2>
                    <div className="row">
                        {block.tutors.map((item, index) => (
                            <div className="col-lg-6 d-flex" key={index}>
                                <div className={s.tutor}>
                                    <StaticImage
                                        placeholder="none"
                                        loading="eager"
                                        alt="BackgroundGradient"
                                        src="../../../images/academy/backgroundGradient.png"
                                        className={s.backgroundGradient}
                                    />
                                    <div className={`${s.head} d-flex align-items-center`}>
                                        {!!item.image && item.image}
                                        <div className={s.tutorTitle}>
                                            {!!item.name && <h3 className={s.tutorName}>{item.name}</h3>}
                                            {!!item.link &&
                                                <a href={item.link}>
                                                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_6712_11908)">
                                                            <path d="M44.9249 0H4.02178C2.0624 0 0.478027 1.54688 0.478027 3.45938V44.5312C0.478027 46.4437 2.0624 48 4.02178 48H44.9249C46.8843 48 48.478 46.4438 48.478 44.5406V3.45938C48.478 1.54688 46.8843 0 44.9249 0ZM14.7187 40.9031H7.59365V17.9906H14.7187V40.9031ZM11.1562 14.8688C8.86865 14.8688 7.02178 13.0219 7.02178 10.7437C7.02178 8.46562 8.86865 6.61875 11.1562 6.61875C13.4343 6.61875 15.2812 8.46562 15.2812 10.7437C15.2812 13.0125 13.4343 14.8688 11.1562 14.8688ZM41.3811 40.9031H34.2655V29.7656C34.2655 27.1125 34.2187 23.6906 30.5624 23.6906C26.8593 23.6906 26.2968 26.5875 26.2968 29.5781V40.9031H19.1905V17.9906H26.0155V21.1219H26.1093C27.0562 19.3219 29.3812 17.4188 32.8405 17.4188C40.0499 17.4188 41.3811 22.1625 41.3811 28.3313V40.9031Z" fill="#063B6D" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6712_11908">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.478027)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>}
                                        </div>
                                    </div>
                                    <div className={s.contentWrapper}>
                                        {!!item.content && <div className={s.content}>{item.content}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default AcademyTutors