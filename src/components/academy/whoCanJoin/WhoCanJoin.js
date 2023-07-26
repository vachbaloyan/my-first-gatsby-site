import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import parse from 'html-react-parser';
import * as s from './whoCanJoin.module.css';
const WhoCanJoin = ({ block }) => {
    return (
        <>
            <section className={`${s.whoCanJoin} position-relative`}>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="BackgroundArtboard"
                    src="./images/artboard.png"
                    className={s.backgroundImage}
                />
                <div className="container">
                    {!!block.title && <h2 className={s.sectionTitle}>{block.title}</h2>}
                    <div className={`row ${s.joinRow}`}>
                        {!!block.joinBlocks && block.joinBlocks.map((item, index) => (
                            <div className="col-lg-6" key={index}>
                                <JoinBlockItem block={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhoCanJoin;
const JoinBlockItem = ({ block }) => {
    const style = { color: !!block.titleColor ? block.titleColor : '#fff' };
    return (
        <div className={`${s.joinBlockItem} position-relative`}>
            {!!block.marker && <StaticImage
                placeholder="none"
                loading="eager"
                alt="BackgroundArtboard"
                src="../../../images/academy/scolarshipIcon.png"
                className={s.marker}
            />}
            {!!block.title && <h3 className={s.title} style={style}>{block.title}</h3>}
            {!!block.content && <div className={s.content}>{parse(block.content)}</div>}
        </div>
    )
}