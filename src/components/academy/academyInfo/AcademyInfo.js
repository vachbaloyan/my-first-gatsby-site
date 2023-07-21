import React from 'react';
import * as s from './academyInfo.module.css';
import parse from 'html-react-parser';
import { StaticImage } from 'gatsby-plugin-image';
const AcademyInfo = ({ block }) => {
    return (
        <>
            <div className="container position-relative">
                <div className={s.academyInfoSection}>
                    <div className="d-flex flex-column flex-lg-row">
                        <div className={s.infoBlock}>
                            <h3>duration</h3>
                            {!!block.duration && <p>{parse(block.duration)}</p>}
                        </div>
                        <div className={s.infoBlock}>
                            <h3>level</h3>
                            {!!block.level && <p>{parse(block.level)}</p>}
                        </div>
                        <div className={s.infoBlock}>
                            <h3>location</h3>
                            {!!block.location && <p>{parse(block.location)}</p>}
                        </div>
                        <div className={s.infoBlock}>
                            <h3>frequency </h3>
                            {!!block.frequency && <p>{parse(block.frequency)}</p>}
                        </div>
                        <div className={s.infoBlock}>
                            <h3>price</h3>
                            {!!block.price && <p>{parse(block.price)}</p>}
                        </div>
                    </div>
                </div>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="scolarship"
                    className={s.scolarshipIcon}
                    src="../../../images/academy/scolarshipIcon.png"
                />
        </div >
        </>
    )
}
export default AcademyInfo;