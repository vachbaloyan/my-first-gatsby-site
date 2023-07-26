import * as React from "react"

import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import AcademyHero from "../components/academy/academyHero/AcademyHero"
import AcademyPartners from "../components/academy/academyPartners/Academypartners"
import AcademyJoin from "../components/academy/academyJoin/AcademyJoin"
import AcademyTutors from "../components/academy/AcademyTutors/AcademyTutors"
import WhyJoinAcademy from "../components/academy/WhyJoinAcademy/WhyJoinAcademy"
import WhoCanJoin from "../components/academy/whoCanJoin/WhoCanJoin"
import AcademyModules from "../components/academy/AcademyModules/AcademyModules"
import ApplicationSection from "../components/academy/ApplicationSection/applicationSection"
import AcademyFaq from "../components/academy/AcademyFaq/AcademyFaq"
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
    image: <>
        <StaticImage
            placeholder="none"
            loading="eager"
            alt='Rocket'
            src='../images/academy/rocket.png'
            className='mw-100'
        />
    </>
}
const tutors = {
    title: `meet our tutors`,
    tutors: [
        {
            name: `Hamlet Azarian`,
            link: `#`,
            image: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='Tutor'
                    src='../images/academy/tutor1.png'
                    className='mw-100 tutorImage'
                />
            </>,
            content: `Hamlet Azarian, the host of the Growth Ventures Podcast, is a seasoned growth expert with 20 years of experience. As the CEO of Azarian Growth Agency, he's raised over $250M for groundbreaking tech startups. Balancing data-driven strategies with creativity, Hamlet is passionate about helping startups reach their full potential. Tune in to learn from this Southern California-based innovator, entrepreneur, and family man.`,
        },
        {
            name: `Lusine Mnatsakanyan`,
            link: `#`,
            image: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt='Tutor'
                    src='../images/academy/tutor2.png'
                    className='mw-100 tutorImage'
                />
            </>,
            content: `Hamlet Azarian, the host of the Growth Ventures Podcast, is a seasoned growth expert with 20 years of experience. As the CEO of Azarian Growth Agency, he's raised over $250M for groundbreaking tech startups. Balancing data-driven strategies with creativity, Hamlet is passionate about helping startups reach their full potential. Tune in to learn from this Southern California-based innovator, entrepreneur, and family man.`,
        }
    ]
}
const whyJoin = {
    title: 'Why Join [A] Growth Academy',
    joinBlocks: [
        {
            title: 'For Students:',
            titleColor: '#F5A173',
            content: `
                <div>
                    <b>Make a Difference</b>
                    <p>At [A] Growth Academy, you won't just learn, you'll impact real businesses.  You'll work in teams to craft unique growth strategies for startups, driving their success.</p>
                    <b>Engage in Active Learning</b>
                    <p>We value the power of learning by doing. You'll partner with startups, applying lessons from the classroom to stimulate real growth. Acquire tangible skills and cultivate valuable relationships in this team-oriented setting.</p>
                    <b>Run Experiments</b>
                    <p>Don't just study tactics - apply them. You'll run live experiments with startups, using your newfound knowledge. This hands-on approach enhances your understanding, preparing you for a thriving career in growth marketing.</p>
                </div>
            `
        },
        {
            title: 'For Startups:',
            titleColor: '#1BFED1',
            content: `
                <div>
                    <b>Make a Difference</b>
                    <p>At [A] Growth Academy, you won't just learn, you'll impact real businesses.  You'll work in teams to craft unique growth strategies for startups, driving their success.</p>
                    <b>Engage in Active Learning</b>
                    <p>We value the power of learning by doing. You'll partner with startups, applying lessons from the classroom to stimulate real growth. Acquire tangible skills and cultivate valuable relationships in this team-oriented setting.</p>
                    <b>Run Experiments</b>
                    <p>Don't just study tactics - apply them. You'll run live experiments with startups, using your newfound knowledge. This hands-on approach enhances your understanding, preparing you for a thriving career in growth marketing.</p>
                </div>
            `
        }
    ]
}
const CanJoin = {
    title: 'Who Can Join [A] Growth Academy',
    joinBlocks: [
        {
            title: 'For Students:',
            titleColor: '#F5A173',
            marker: true,
            content: `
                <div>
                <b>Run Experiments</b>
                <p>Don't just study tactics - apply them. You'll run live experiments with startups, using your newfound knowledge. 
                This hands-on approach enhances your understanding, preparing you for a thriving career in growth marketing.
                
                This hands-on approach enhances your understanding, preparing you for a thriving career in growth marketing.
                </p></div>
            `
        },
        {
            title: 'For Startups:',
            titleColor: '#1BFED1',
            marker: false,
            content: `
                <div>
                <b>Run Experiments</b>
                <p>Don't just study tactics - apply them. You'll run live experiments with startups, using your newfound knowledge. 
                This hands-on approach enhances your understanding, preparing you for a thriving career in growth marketing.
                
                This hands-on approach enhances your understanding, preparing you for a thriving career in growth marketing.
                </p></div>
            `
        }
    ]
}
const modules = {
    modules: [
        {
            title: 'Module 1',
            subtitle: 'Understanding Growth Marketing:',
            content: `We kick off with an introduction to growth marketing. You'll learn the distinctions between traditional and growth marketing, comprehend growth marketing structures, grasp data-driven decision-making, and appreciate the value of failure in growth strategies.`,
            isBonusModule: false,
        },
        {
            title: 'Module 2',
            subtitle: 'Unraveling Growth Strategies:',
            content: `Module 2 plunges into the growth ecosystem. You'll explore various marketing channels, learn to map customer journeys, and understand the significance of A/B testing and experimentation.`,
            isBonusModule: false,
        },
        {
            title: 'Module 3',
            subtitle: 'Acquiring and Activating:',
            content: `This module sheds light on acquisition and activation. You'll explore the structure and measurement of effective campaigns, delve into SEO and paid advertising, and learn to optimize conversions through real-world scenarios.`,
            isBonusModule: false,
        },
        {
            title: 'Module 4',
            subtitle: 'Retention for Growth:',
            content: `Module 4 focuses on customer retention. You'll understand the elements of successful retention strategies, compare various tactics, and learn to maintain customer engagement for long-term success.`,
            isBonusModule: false,
        },
        {
            title: 'Module 5',
            subtitle: 'Case Study:',
            content: `In the final module, you'll put your knowledge to the test with a real-world case study. Develop growth experiments, perform research, create personas, and execute strategies. This hands-on experience will elevate your strategic thinking in a practical growth marketing context.`,
            isBonusModule: false,
        },
        {
            title: 'Bonus Module',
            subtitle: 'Case Study:',
            content: `In the final module, you'll put your knowledge to the test with a real-world case study. Develop growth experiments, perform research, create personas, and execute strategies. This hands-on experience will elevate your strategic thinking in a practical growth marketing context.`,
            isBonusModule: true,
        }
    ]
}
const application = {
    title: `How to Apply`,
    description: `We carefully assess and pair students and startups according to their unique stages and needs. We aim to provide each participant, be it a student or a startup, with a learning experience designed to match their individual requirements.`,
    deadline: {
        deadlineTitle: `APPLICATION DEADLINE:`,
        deadlineDate: `SEPT 5, 11:29pm`,
        deadlineColor: '#F5A173',
    },
    applyBlocks: [
        {
            title: {
                color: '#F5A173',
                text: 'For Students:',
            },
            description: 'If you are a young professional aspiring to learn more about growth marketing and become a growth marketing professional, apply here.',
            applyButton: {
                url: '#',
                text: 'Apply as a Student',
                backgroundColor: '#F5A173',
                textColor: '#232323',
            }
        },
        {
            title: {
                color: '#1BFED1',
                text: 'For Startups:',
            },
            description: 'If you want your startup to be part of our academy and benefit from our collaborative growth marketing approach, apply here. ',
            applyButton: {
                url: '#',
                text: 'Apply as a Startup',
                backgroundColor: '#1BFED1',
                textColor: '#232323',
            }
        }
    ]
}
const faq = {
    sectionTitle: 'FAQ',
    image: <>
        <StaticImage
            placeholder="none"
            loading="eager"
            alt='Tutor'
            src='../images/academy/AcademyFaq.png'
            className='mw-100'
        />
    </>,
    accordionData: [
        {
            title: 'How many startups will there be at the Academy?',
            content: `'Content for Item 1'`,
        },
        {
            title: 'How many students will there be?',
            content: `'Content for Item 2'`,
        },
        {
            title: 'What about the tuition fee for students and startups?',
            content: `'Content for Item 1'`,
        },
        {
            title: 'How will the lectures be held at [A] Growth Academy?',
            content: `The lectures will be a hybrid of online and offline components. The instructional content will be delivered online. We will also have offline working sessions where you will meet with your mentor for hands-on  collaboration.`,
        },
        {
            title: 'What happens at the end of the course?',
            content: `'Content for Item 1'`,
        },
        {
            title: 'Will I receive a certificate upon completion of the course at [A] Growth Academy?',
            content: `'Content for Item 2'`,
        },
    ],
    sliderItems: {
        desktop: [
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
        ],
        mobile: [
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
            {
                previewImage: <>
                    <StaticImage
                        placeholder="none"
                        loading="eager"
                        alt="youtube-placeholder"
                        className="mw-100 w-100 mh-100 h-100"
                        src="../images/academy/heroVideoPreview.jpg"
                    />
                </>,
                videoUrl: 'oX6TgspyDuA"',
            },
        ]
    }
};

const AcademyPage = () => (
    <>
        <AcademyHero block={heroBlock} />
        <AcademyPartners block={partners} />
        <AcademyJoin block={joinBlock} />
        <AcademyTutors block={tutors} />
        <WhyJoinAcademy block={whyJoin} />
        <WhoCanJoin block={CanJoin} />
        <AcademyModules block={modules} />
        <ApplicationSection block={application} />
        <AcademyPartners block={partners} />
        <AcademyFaq block={faq} />
    </>
)

export const Head = () => <Seo title="Academy" />

export default AcademyPage