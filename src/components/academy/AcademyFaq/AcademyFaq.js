import React, { useState } from 'react';
import * as s from './academyFaq.module.css';
import { BreakpointProvider, useBreakpoint } from 'gatsby-plugin-breakpoints';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import YoutubeVideo from '../../youtubeVideo/youtubeVideo';
const AcademyFaq = ({ block }) => {
    const breakpoints = useBreakpoint();
    var settingsDesktop = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3.8,
    };
    var settingsMobile = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1.8,
    };
    return (
        <>
            <section className={s.faq}>
                <div className="container">
                    {breakpoints.lg ?
                        <div className="d-flex justify-content-between align-items-center">
                            {!!block.sectionTitle && <h2 className={s.sectionTitle}>{block.sectionTitle}</h2>}
                            <div className={s.sectionImage}>
                                {!!block.image && block.image}
                            </div>
                        </div>
                        : null}
                    {!breakpoints.lg ? !!block.sectionTitle && <h2 className={s.sectionTitle}>{block.sectionTitle}</h2> : null}

                    <div className="row">
                        <div className="col-lg-6">
                            <div className={s.accordionWrapper}>
                                <Accordion accordionData={block.accordionData} />
                            </div>
                        </div>
                        {!breakpoints.lg ? <div className="col-lg-6">
                            {!!block.image && block.image}
                        </div> : null}
                    </div>
                </div >
                {!breakpoints.lg ? <div className={`${s.slider} ${s.pSContainer} p-s-container`}>
                    <Slider {...settingsDesktop}>
                        {block.sliderItems.desktop?.length && block.sliderItems.desktop.map((item, i) => {
                            return (
                                <div key={`slider-item-${i}`} className={s.videoSlideItem}>
                                    <YoutubeVideo image={item.previewImage} videoId={item.videoUrl}/>
                                </div>
                            )
                        })}
                    </Slider>
                </div> : <div className={`${s.slider} ${s.pSContainer} p-s-container`}>
                    <Slider {...settingsMobile}>
                        {block.sliderItems.mobile?.length && block.sliderItems.mobile.map((item, i) => {
                            return (
                                <div key={`slider-item-${i}`} className={s.videoSlideItem}>
                                    <YoutubeVideo image={item.previewImage} videoId={item.videoUrl} sectionClasses={s.youtubeVideoPlaceholder1} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>}
            </section >
        </>
    )
}
export default AcademyFaq

const Accordion = ({ accordionData }) => {
    const [openItemIndex, setOpenItemIndex] = useState(0); // Set the default index to 0 for the first item

    const toggleItem = (index) => {
        setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openItemIndex === index}
                    onClick={() => toggleItem(index)}
                />
            ))}
        </div>
    );
};

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    };
    return (
        <div className={s.accordionItem}>
            <div
                role="button"
                tabIndex="0" // Make the item focusable
                onClick={onClick}
                onKeyDown={handleKeyDown} >
                <div className={s.question}>
                    <span className={s.togglerIcon}>
                        {isOpen ? '-' : '+'}
                    </span>
                    <span className={s.marker}>Q:</span>
                    <div>
                        {title}
                    </div>
                </div>
            </div>
            {isOpen && <div className={s.answer}><span className={s.marker}>A:</span>{content}</div>}
        </div>
    );
};
