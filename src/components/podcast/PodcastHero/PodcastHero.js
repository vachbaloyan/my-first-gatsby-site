import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import parse from 'html-react-parser';
import React from 'react';
import * as s from './hero.module.css';
const PodcastHero = ({ block}) => {
    return (
        <>
            <section className={`${s.heroSection}`}>
                {<StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="HeroBackground"
                    src="../../../images/podcast/hero.jpg"
                    className={s.backgroundImage}
                />}
                <div className={s.heroBackgroundDark}>
                    <div className='container'>
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-flex justify-content-center flex-column">
                                {!!block.title && <h1>{parse(block.title ?? '')}</h1>}
                                {!!block.subtitle && <p>{parse(block.subtitle ?? '')}</p>}
                                <Link to={!!block.button.url ? block.button.url : ''} className={`${s.heroCta} d-inline-flex`}>
                                    {<StaticImage
                                        placeholder="none"
                                        loading="eager"
                                        alt="AudioImage"
                                        src="../../../images/podcast/audio.png"
                                        className="mw-100"
                                    />}
                                    <span>{parse(block.button?.text ?? '')}</span>
                                </Link>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column">
                                <div className={s.heroImg}>
                                    {block.rightImage}
                                    <div className="d-flex align-items-center justify-content-center gap-2">
                                        {!!block.listenLinks?.spotify &&
                                            <a href={block.listenLinks?.spotify}>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.5357 0.642822C6.50769 0.642822 0 7.15052 0 15.1785C0 23.2066 6.50769 29.7143 14.5357 29.7143C22.5637 29.7143 29.0714 23.2066 29.0714 15.1785C29.0714 7.15052 22.5637 0.642822 14.5357 0.642822ZM21.2028 21.6087C20.9422 22.0372 20.3845 22.1708 19.9581 21.9102C16.5449 19.8235 12.2488 19.3519 7.18818 20.5083C6.7015 20.6203 6.21483 20.3145 6.10285 19.8278C5.99087 19.3411 6.2945 18.8545 6.78333 18.7425C12.3198 17.4763 17.0703 18.0211 20.9013 20.3619C21.3277 20.6224 21.4633 21.1802 21.2028 21.6087ZM22.9815 17.6507C22.652 18.1847 21.9565 18.3506 21.4224 18.0232C17.5161 15.6221 11.5597 14.9266 6.93838 16.3285C6.33973 16.5094 5.70661 16.1713 5.52357 15.5726C5.34268 14.974 5.68077 14.3408 6.27943 14.16C11.5597 12.5578 18.1212 13.333 22.609 16.0916C23.1409 16.4189 23.3088 17.1166 22.9815 17.6485V17.6507ZM23.1344 13.529C18.4485 10.7468 10.7198 10.4905 6.24713 11.8472C5.52788 12.0647 4.76987 11.6598 4.55237 10.9406C4.33487 10.2213 4.73972 9.46331 5.45897 9.24366C10.5928 7.68457 19.129 7.98605 24.5234 11.1882C25.1694 11.5715 25.3804 12.4071 24.9993 13.0509C24.616 13.697 23.7804 13.9102 23.1365 13.5268L23.1344 13.529Z"
                                                        fill="#F7F6F5" />
                                                    <path
                                                        d="M21.2027 21.6088C20.9422 22.0373 20.3844 22.1708 19.958 21.9103C16.5448 19.8236 12.2487 19.352 7.18815 20.5084C6.70147 20.6204 6.21479 20.3146 6.10282 19.8279C5.99084 19.3412 6.29447 18.8545 6.7833 18.7426C12.3198 17.4763 17.0703 18.0212 20.9012 20.3619C21.3276 20.6225 21.4633 21.1803 21.2027 21.6088Z"
                                                        fill="#17182C" />
                                                    <path
                                                        d="M22.9815 17.6507C22.6521 18.1848 21.9565 18.3506 21.4224 18.0233C17.5161 15.6222 11.5597 14.9266 6.93842 16.3285C6.33976 16.5094 5.70665 16.1713 5.52361 15.5727C5.34272 14.974 5.68081 14.3409 6.27946 14.16C11.5597 12.5578 18.1212 13.3331 22.609 16.0916C23.1409 16.419 23.3089 17.1167 22.9815 17.6486V17.6507Z"
                                                        fill="#17182C" />
                                                    <path
                                                        d="M23.1344 13.529C18.4486 10.7467 10.7199 10.4905 6.24718 11.8472C5.52793 12.0646 4.76992 11.6598 4.55242 10.9406C4.33492 10.2213 4.73977 9.4633 5.45902 9.24364C10.5928 7.68455 19.129 7.98604 24.5234 11.1882C25.1694 11.5715 25.3805 12.407 24.9993 13.0509C24.616 13.697 23.7805 13.9101 23.1366 13.5268L23.1344 13.529Z"
                                                        fill="#17182C" />
                                                </svg>
                                            </a>
                                        }
                                        {!!block.listenLinks?.googlePodcast &&
                                            <a href={block.listenLinks?.googlePodcast}>
                                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6025_12439)">
                                                        <path
                                                            d="M15.5306 0.585678C15.8161 0.736459 16.1348 0.810399 16.3913 1.03512C16.7839 1.38163 17.0245 1.79772 17.039 2.31386C17.0592 3.07646 17.0346 3.84051 17.0476 4.60456C17.0607 5.36136 16.384 6.20515 15.5408 6.37768C14.7135 6.54731 13.7775 6.04278 13.4355 5.26423C13.3298 5.02211 13.2892 4.74954 13.2892 4.47843C13.2892 3.83616 13.2892 3.19389 13.2892 2.55163C13.2921 1.5875 13.8354 0.88144 14.7642 0.632072C14.7946 0.623373 14.8221 0.600176 14.8511 0.584229C15.0771 0.584229 15.3032 0.584229 15.5277 0.584229L15.5306 0.585678Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M0.114226 14.2401C0.288095 13.7399 0.530062 13.2919 0.999508 12.999C1.16323 12.8961 1.33855 12.8424 1.51822 12.7975C2.34699 12.5945 3.30182 12.9874 3.67274 13.7341C3.82343 14.0356 3.89008 14.3879 3.88718 14.7403C3.88283 15.3477 3.90167 15.9552 3.88283 16.5612C3.85096 17.6413 3.30907 18.3358 2.28469 18.5518C1.55154 18.7069 0.899534 18.4039 0.428639 17.7211C0.283748 17.5123 0.243179 17.2644 0.111328 17.0542V14.2401H0.114226Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M13.2921 15.6203C13.2921 13.7877 13.2979 11.9551 13.2892 10.124C13.2863 9.30054 14.0629 8.47414 14.8149 8.32771C15.8537 8.12764 16.9969 8.86994 17.052 10.1008C17.0621 10.3328 17.0462 10.5648 17.0462 10.7982C17.0462 14.2024 17.0331 17.6065 17.0563 21.0107C17.065 22.2633 16.0696 23.2042 14.7714 22.9723C14.1136 22.8548 13.6369 22.4083 13.4007 21.7515C13.3167 21.5196 13.2877 21.2861 13.2877 21.0397C13.2921 19.2332 13.2906 17.4267 13.2906 15.6203H13.2921Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M23.7213 16.0741C23.7691 16.2364 23.7416 16.4017 23.7416 16.5655C23.7445 18.5982 23.7517 20.6294 23.7459 22.662C23.743 23.5957 23.1997 24.4873 22.2043 24.6802C21.4422 24.828 20.8336 24.5787 20.3222 23.9321C20.0469 23.5826 19.9556 23.1723 19.957 22.7244C19.9657 20.5105 19.9513 18.2952 19.9686 16.0813C19.9744 15.2506 20.6409 14.4793 21.4552 14.3328C22.0319 14.2299 22.5332 14.3488 22.9882 14.6692C23.4228 14.9751 23.6489 15.4245 23.7141 15.9523C23.717 15.9929 23.7184 16.032 23.7213 16.0726V16.0741Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M6.62276 11.8174C6.62276 10.6358 6.62276 9.45567 6.62276 8.27408C6.62276 7.75359 6.88502 7.34765 7.25014 7.02869C7.92388 6.44296 8.71643 6.44876 9.45972 6.81991C9.84079 7.00984 10.1523 7.38824 10.2755 7.85218C10.3595 8.16969 10.3914 8.4901 10.3899 8.81921C10.3841 10.904 10.3957 12.9874 10.387 15.0723C10.3827 16.1263 9.68286 16.8657 8.77004 16.9947C7.97749 17.1078 7.31534 16.77 6.87487 16.1205C6.65029 15.7899 6.61407 15.4463 6.61552 15.0737C6.61987 13.9878 6.61697 12.9019 6.61697 11.8174C6.61987 11.8174 6.62132 11.8174 6.62421 11.8174H6.62276Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M19.9628 9.49628C20.0005 9.04973 19.9049 8.54665 20.0106 8.04791C20.1584 7.3491 20.6467 6.80687 21.3683 6.64014C21.9899 6.49661 22.5796 6.61405 23.0562 7.03159C23.4982 7.41579 23.743 7.94208 23.743 8.53505C23.743 9.25416 23.785 9.97471 23.7141 10.6924C23.6112 11.7435 22.736 12.4655 21.729 12.4003C20.9408 12.3495 20.3772 11.8841 20.0614 11.1404C19.9817 10.9533 19.9527 10.7663 19.9599 10.5648C19.9715 10.227 19.9628 9.88773 19.9628 9.49773V9.49628Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M17.0462 27.7929C17.0462 28.1655 17.0534 28.5396 17.0462 28.9122C17.0259 29.8415 16.2812 30.6186 15.3481 30.707C14.3512 30.8013 13.4674 30.0401 13.3413 29.1949C13.2283 28.4366 13.3196 27.6711 13.2921 26.91C13.2848 26.7186 13.3066 26.5301 13.3442 26.3431C13.5036 25.55 14.3367 24.8918 15.0699 24.915C16.0841 24.9484 16.7492 25.4036 17.0056 26.3141C17.0592 26.5026 17.0433 26.6925 17.0476 26.8824C17.0549 27.1854 17.0491 27.4899 17.0491 27.7929H17.0447H17.0462Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M26.4729 15.6362C26.4729 15.2723 26.4801 14.9069 26.4729 14.543C26.4555 13.7413 27.1568 12.9613 27.845 12.8192C29.0838 12.564 30.0879 13.2295 30.2168 14.4662C30.2777 15.0577 30.2168 15.6608 30.2386 16.2582C30.2502 16.5974 30.2183 16.9207 30.1256 17.2469C29.9256 17.9486 29.4272 18.3314 28.7621 18.5083C27.7088 18.7881 26.7134 18.069 26.4932 17.0135C26.4019 16.5728 26.4772 16.0972 26.4772 15.6376H26.4729V15.6362Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M6.61837 21.7022C6.65314 21.3108 6.54882 20.7961 6.67343 20.2916C6.86034 19.5377 7.62826 18.8867 8.47297 18.9099C9.04239 18.9259 9.49445 19.1056 9.87261 19.4985C10.2566 19.8972 10.3884 20.396 10.3855 20.9396C10.3826 21.5036 10.3855 22.069 10.3855 22.633C10.3855 23.239 10.2522 23.7929 9.76829 24.209C9.2887 24.6222 8.7671 24.8338 8.11509 24.6512C7.85718 24.5787 7.60507 24.5192 7.38774 24.3583C6.89511 23.9929 6.62271 23.5102 6.61837 22.8882C6.61692 22.5315 6.61837 22.1763 6.61837 21.7037V21.7022Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M23.7214 16.0741C23.7185 16.0335 23.717 15.9943 23.7141 15.9537C23.7518 15.9653 23.8213 15.9755 23.8213 15.9871C23.8213 16.0451 23.7663 16.0567 23.7214 16.0741Z"
                                                            fill="#F7F6F5" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6025_12439">
                                                            <rect width="30.1286" height="30.1286" fill="white"
                                                                transform="translate(0.114258 0.585693)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        }
                                        {!!block.listenLinks?.applePodcast &&
                                            <a href={block.listenLinks?.applePodcast}>
                                                <svg width="32" height="36" viewBox="0 0 32 36" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_6025_12450)">
                                                        <path
                                                            d="M31.9999 15.6954C31.9718 18.9807 31.1469 21.8548 29.4593 24.4708C27.945 26.8173 25.9417 28.6321 23.4785 29.9406C23.0448 30.1715 22.612 30.1627 22.1985 29.8989C21.8093 29.6506 21.6282 29.2771 21.6515 28.8203C21.6757 28.3363 21.9294 27.9919 22.3564 27.7698C23.2868 27.2848 24.1514 26.6999 24.9377 26.0054C27.3718 23.853 28.887 21.1787 29.3857 17.9593C29.8708 14.8263 29.3392 11.86 27.7349 9.12175C25.9136 6.01294 23.2675 3.89545 19.7906 2.96232C15.0917 1.70231 10.8383 2.67715 7.17165 5.89945C4.79658 7.98686 3.35489 10.6485 2.9037 13.7816C2.24143 18.3881 3.59792 22.3456 6.92087 25.6096C7.8039 26.4768 8.81182 27.18 9.90786 27.7543C10.3561 27.989 10.6108 28.3566 10.6098 28.8668C10.6089 29.3402 10.3939 29.7088 9.97369 29.9367C9.57672 30.1511 9.17491 30.1375 8.7789 29.9261C7.3101 29.1423 5.9846 28.1655 4.82176 26.9695C2.68391 24.7706 1.25481 22.1768 0.641919 19.1699C-0.243041 14.8253 0.523796 10.7707 2.97051 7.06537C4.57002 4.64234 6.70399 2.811 9.31724 1.54905C10.9923 0.740078 12.7593 0.251204 14.6134 0.0756362C17.5162 -0.198871 20.294 0.272544 22.9237 1.53062C25.9136 2.96038 28.2403 5.12637 29.8979 8.00141C31.0549 10.0083 31.7317 12.1724 31.9273 14.4829C31.966 14.9446 31.9834 15.4073 31.9999 15.6944V15.6954Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M7.60361 16.1658C7.6404 18.2416 8.48179 20.2854 10.1743 21.9683C10.5461 22.3379 10.6826 22.7744 10.5209 23.2739C10.364 23.7579 10.0087 24.0383 9.50521 24.1042C9.09758 24.1576 8.75677 24.0072 8.4663 23.7191C7.19502 22.4572 6.22485 20.9935 5.71653 19.2737C4.44622 14.9718 5.37281 11.1772 8.5273 7.9898C10.2982 6.20017 12.4951 5.16907 15.0047 4.95373C19.2349 4.59096 22.6266 6.1701 25.1324 9.60095C26.2643 11.151 26.9023 12.9154 27.063 14.8272C27.3545 18.3008 26.2439 21.2767 23.7875 23.7444C23.286 24.2478 22.525 24.2371 22.0447 23.7473C21.5625 23.2555 21.5887 22.4921 22.0951 21.9848C23.9599 20.1166 24.8284 17.8594 24.6502 15.2259C24.3791 11.2276 21.2895 7.94615 17.3285 7.40587C13.4924 6.88304 9.85474 8.92487 8.30267 12.4799C7.83308 13.5556 7.61135 14.6856 7.60361 16.1668V16.1658Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M19.8285 25.5747C19.752 26.0908 19.6842 26.6087 19.5981 27.1228C19.265 29.1132 18.9223 31.1017 18.5931 33.0921C18.4798 33.7799 18.2406 34.3929 17.6887 34.8488C16.247 36.0399 14.0879 35.2484 13.7558 33.3938C13.4372 31.6158 13.1429 29.8339 12.8428 28.054C12.7285 27.376 12.6017 26.6989 12.5242 26.0161C12.3664 24.6329 12.8824 23.5116 13.9833 22.6958C16.2238 21.0352 19.4054 22.4087 19.7704 25.1741C19.7878 25.3051 19.7878 25.438 19.7956 25.5708C19.8062 25.5728 19.8179 25.5738 19.8285 25.5757V25.5747Z"
                                                            fill="#F7F6F5" />
                                                        <path
                                                            d="M19.7975 15.8787C19.7597 17.9419 18.1254 19.5676 16.1163 19.5404C14.0549 19.5123 12.4516 17.8468 12.4835 15.7691C12.5145 13.7855 14.2099 12.1734 16.2257 12.2093C18.1951 12.2442 19.8333 13.9271 19.7975 15.8787Z"
                                                            fill="#F7F6F5" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6025_12450">
                                                            <rect width="31.7143" height="35.4143" fill="white"
                                                                transform="translate(0.285767)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PodcastHero;