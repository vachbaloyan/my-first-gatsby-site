import React from 'react';
import * as s from './academyPartners.module.css';
const AcademyPartners = ({ block }) => {
    return (
        <>
            <section className={s.growthPartners}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row">
                        {!!block.title && <h2 className={s.sectionTitle}>{block.title}</h2>}
                        <div className={`${s.partnersLogosWrapper} d-flex`}>
                            {block.partners.map((item, index) => (
                                <div className={s.singleLogo} key={index}>
                                    {item.logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AcademyPartners