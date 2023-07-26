import React from 'react';
import * as s from './applicationsection.module.css';
import parse from 'html-react-parser';

const ApplicationSection = ({ block }) => {
    const style = { color: block.deadline.deadlineColor ? block.deadline.deadlineColor : '#F5A173' }
    return (
        <>
            <section className={s.applicationSection}>
                <div className="container">
                    <div className={s.wrapper}>
                        {!!block.title && <h2 className={s.sectionTitle}>
                            {block.title}
                        </h2>}
                        {!!block.description && <div className={s.description}>{parse(block.description)}</div>}
                        <div className={s.deadline}>
                            <div className={s.deadlineTitle}>{block.deadline.deadlineTitle || 'APPLICATION DEADLINE:'}</div>
                            <div className={s.deadlineDate} style={style}>{block.deadline.deadlineDate}</div>
                        </div>
                        <div className={`row justify-content-center ${s.applyRow}`}>
                            {block.applyBlocks.map((item, index) => (
                                <div className="col-lg-6" key={index}>
                                    <ApplyBlock block={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ApplicationSection
const ApplyBlock = ({ block }) => {
    const titleColor = { color: block.title.color ? block.title.color : '#fff' }
    const buttonColor = { backgroundColor: block.applyButton.backgroundColor ? block.applyButton.backgroundColor : '#fff', color: block.applyButton.textColor ? block.applyButton.textColor : '#000' }
    return (
        <>
            <div className={s.applyBlock}>
                {!!block.title && <h2 className={s.blockTitle} style={titleColor}>{block.title.text}</h2>}
                {!!block.description && <p className={s.blockDescription}>{block.description}</p>}
                {!!block.applyButton && <a href={block.applyButton.url} className={s.blockButton} style={buttonColor}>{block.applyButton.text}</a>}
            </div>
        </>
    )
}