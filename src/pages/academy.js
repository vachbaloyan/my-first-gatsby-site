import * as React from "react"

import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import AcademyHero from "../components/academy/academyHero/AcademyHero"
import AcademyPartners from "../components/academy/academyPartners/Academypartners"
import AcademyJoin from "../components/academy/academyJoin/AcademyJoin"
const heroBlock = {
    title: `Empowering Professionals and Startups for Success`,
    description: `The Ultimate Platform for Visionary Entrepreneurs, Innovators, and Change-Makers.`,
    button: {
        text: `Join our Academy NOW`,
    },
    logoImage: <>
        <StaticImage
            placeholder="none"
            loading="eager"
            alt="Thumbnail"
            src="../images/academy/heroLogo.png"
            className='mw-100'
        />
    </>,
    academyInfo: {
        duration: `4 weeks`,
        level: `<b>students:</b> fundamental <br><b>startups:</b> early stage`,
        location: `hibryte:<br> offline+online`,
        frequency: `3hrs/week`,
        price: `<b>students:</b>  $500 full scholarship<br><b>startups:</b> free of charge`,
    }
}
const partners = {
    title: 'Our Growth Partners',
    partners: [
        {
            logo: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='smartgatevc'
                    src='../images/academy/partners/1.png'
                    className='mw-100'
                />
            </>
        },
        {
            logo: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='smartgatevc'
                    src='../images/academy/partners/2.png'
                    className='mw-100'
                />
            </>
        },
        {
            logo: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='smartgatevc'
                    src='../images/academy/partners/3.png'
                    className='mw-100'
                />
            </>
        },
        {
            logo: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='smartgatevc'
                    src='../images/academy/partners/1.png'
                    className='mw-100'
                />
            </>
        },
        {
            logo: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='smartgatevc'
                    src='../images/academy/partners/2.png'
                    className='mw-100'
                />
            </>
        },
        {
            logo: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='smartgatevc'
                    src='../images/academy/partners/3.png'
                    className='mw-100'
                />
            </>
        },
    ]

}
const joinBlock = {
    title: `Unlock Your Growth Potential - Learn, Apply, and Become a Student at [A] Growth Academy`,
    description: `Welcome to [A] Growth Academy - your key to unlocking your growth marketing potential.<br><br>
    We provide innovative marketing courses that blend theory with hands-on experience.
    Our mission? Empower ambitious professionals with the knowledge and tools they need
    in today's rapid-paced growth marketing landscape.
    <br><br> But we're not just an educational institution. We're a bridge, connecting 
    eager students with startups desperate for marketing savviness. Our academy 
    cultivates these symbiotic relationships, fostering mutual growth and success.`,
    btn: {
        text: 'Join Us!'
    },
    image:<>
        <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='Rocket'
                    src='../images/academy/rocket.png'
                    className='mw-100'
                />
    </>
}
const AcademyPage = () => (
    <>
        <AcademyHero block={heroBlock} />
        <AcademyPartners block={partners} />
        <AcademyJoin block={joinBlock} />
    </>
)

export const Head = () => <Seo title="Page two" />

export default AcademyPage