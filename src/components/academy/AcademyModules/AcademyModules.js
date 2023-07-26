import React from 'react';
import * as s from './academyModules.module.css';
import parse from 'html-react-parser';


const DefaultModule = ({ block }) => {
    return (
        <>
            <div className={s.singleModule}>
                <div className={s.marker}>
                    <svg width="35" height="55" viewBox="0 0 35 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.61526 55C1.79915 55 1.15925 54.7446 0.695548 54.2338C0.231849 53.7231 0 52.9934 0 52.0448V7.22388C0 4.83416 0.612083 3.03731 1.83625 1.83333C3.06041 0.611111 4.86884 0 7.26153 0H27.7385C30.1497 0 31.9581 0.611111 33.1638 1.83333C34.3879 3.03731 35 4.83416 35 7.22388V52.0448C35 52.9934 34.7682 53.7231 34.3045 54.2338C33.8408 54.7446 33.2008 55 32.3847 55C31.7727 55 31.2069 54.8085 30.6876 54.4254C30.1868 54.0423 29.3985 53.34 28.3227 52.3184L17.7504 41.9478C17.5835 41.8018 17.4258 41.8018 17.2774 41.9478L6.64944 52.3184C5.59221 53.34 4.80392 54.0423 4.28458 54.4254C3.76524 54.8085 3.2088 55 2.61526 55Z" fill="#FF8642" />
                    </svg>
                </div>
                {!!block.title && <h3 className={s.title}>{block.title}</h3>}
                {!!block.subtitle && <h4 className={s.subtitle}>{block.subtitle}</h4>}
                {!!block.content && <div className={s.content}>{parse(block.content)}</div>}
            </div>
        </>
    )
}

const AcademyModules = ({ block }) => {
    return (
        <>
            <section className={s.moduleSection}>
                <div className="container">
                    <div className={`${s.rowGap} row`}>
                        {!!block.modules && block.modules.map((item, index) => (
                            <div className="col-lg-4" key={index} >
                                {item.isBonusModule ?
                                    <div className={s.bonusModule}>
                                        <div className={s.marker}>
                                            <svg width="36" height="55" viewBox="0 0 36 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.11377 54.4528C2.30826 54.4528 1.67666 54.2039 1.21899 53.7063C0.761309 53.2087 0.532471 52.4979 0.532471 51.5737V7.90868C0.532471 5.58059 1.1366 3.83008 2.34487 2.65715C3.55314 1.46645 5.33808 0.871094 7.69969 0.871094H27.9107C30.2906 0.871094 32.0756 1.46645 33.2655 2.65715C34.4738 3.83008 35.0779 5.58059 35.0779 7.90868V51.5737C35.0779 52.4979 34.8491 53.2087 34.3914 53.7063C33.9337 54.2039 33.3021 54.4528 32.4966 54.4528C31.8925 54.4528 31.3341 54.2662 30.8215 53.8929C30.3272 53.5197 29.5492 52.8355 28.4874 51.8403L18.0523 41.7371C17.8876 41.5949 17.732 41.5949 17.5855 41.7371L7.09556 51.8403C6.05205 52.8355 5.274 53.5197 4.76141 53.8929C4.24881 54.2662 3.6996 54.4528 3.11377 54.4528Z" fill="#3E5E7D" />
                                            </svg>
                                        </div>
                                        <h2 className={s.bonusTitle}>
                                            {item.title}
                                        </h2>
                                    </div>
                                    :
                                    <DefaultModule block={item} />
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default AcademyModules;
