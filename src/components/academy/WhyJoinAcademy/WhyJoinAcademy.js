import React from 'react';
import * as s from './whyJoinAcademy.module.css';
import parse from 'html-react-parser';
const WhyJoinAcademy = ({ block }) => {
    return (
        <>
            <section className={s.whyJoin}>
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
export default WhyJoinAcademy;
const JoinBlockItem = ({ block }) => {
    const style = { color: !!block.titleColor ? block.titleColor : '#fff' };
    return (
        <div className={s.joinBlockItem}>
            <h3 className={s.title} style={style}>{block.title}</h3>
            {!!block.content && <div className={s.content}>{parse(block.content)}</div>}
        </div>
    )
}