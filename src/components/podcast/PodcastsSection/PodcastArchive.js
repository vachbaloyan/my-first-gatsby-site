import React, { useState, useEffect } from 'react';
import * as s from './podcastArchive.module.css';
import SinglePodcastItem from "../PodcastSingleItem/SinglePodcastItem";
const PodcastArchive = ({ block }) => {
    let podcastItems = block.podcastItems;
    const [visibleItems, setVisibleItems] = useState(1);
    const itemsToShow = podcastItems.slice(0, visibleItems);
    const handleShowMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 1);
    };
    useEffect(() => {
        setVisibleItems(1);
    }, [podcastItems]);
    return (
        <>
            <section className={s.podcastsSection}>
                <div className="container">
                    <div className={s.podcastsSectionWrapper}>
                        <div className={`${s.podcastsItemsWrapper} d-flex flex-column`}>
                            {itemsToShow.map((item, index) => (
                                <div key={index}><SinglePodcastItem single={item} /></div>
                            ))}
                        </div>
                        {visibleItems < podcastItems.length && (
                            <div className={s.showMoreWrapper}>
                                <button onClick={handleShowMore} className={s.showMorePodcasts}>{block.buttonText}</button>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}
export default PodcastArchive;