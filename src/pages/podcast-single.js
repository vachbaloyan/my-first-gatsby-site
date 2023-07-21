import * as React from "react"

import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import JoinSection from "../components/podcast/JoinSection/JoinSection"
import PodcastBanner from "../components/podcast/PodcastBanner/PodcastBanner"
import PodcastContent from "../components/podcastSinglePage/PodcastContent/PodcastContent"

const content = {
    backBtn:{
        url:'#',
        text:'< back to all episodes',
    },
    title: `<b>Nick Krasney:</b> How to Achieve Success
    in the Growth Industry`,
    thumbnail: <>
        <StaticImage
            placeholder="none"
            loading="eager"
            alt="AudioImg"
            src="../images/podcast/audio-screenshot.jpg"
            className='mw-100'
        />
    </>,
    content: `
    In episode #2501, we discuss the AI-powered video editor that promises to save you
    time and money on your TikToks, Reels, and YouTube shorts. We explore how Opus Clip
    utilizes AI to analyze longer videos, identify hooks, generate catchy titles, and
    predict their viral potential. We tried it ourselves and found the Opus-edited clips
    to perform similarly to our other shorts on YouTube. Tune in to learn more about its
    time-saving features and its potential for longer-form videos too!TIME-STAMPED SHOW
    NOTES:
    [00:00] Today’s topic: The AI Video Editor That Will 10x Your Content Creation<br>
    [00:15] What Opus Clip is and what it’s used for?<br>
    [00:40] Using AI to analyze longer videos, find hooks, generate titles, and score
    viral potential.<br>
    [01:00] The features that enable it to save users time in editing short-form videos.<br>
    [01:07] Our experience of using Opus Clip: how Opus-edited shorts performed on
    YouTube.<br>
    [01:31] The time and money-saving benefits of Opus Clip.<br>
    [01:41] Our plan is to use it for reaction and longer-form videos.<br>
    [02:35] Why emphasis should be placed on content quality rather than production
    quality.<br>
    [03:17] That’s it for today! Don’t forget to rate, review, and subscribe!<br>
    Go to <a href="#">https://www.marketingschool.io </a>to learn more!<br>
    Links Mentioned in Today’s Episode:<br>
    Don’t forget to help us grow by subscribing and liking on YouTube!<br>
    Opus Clip<br>
    Thomas Ma on LinkedIn<br>
    Thomas Ma on Twitter<br>
    Leave Some Feedback:<br>
    What should we talk about next? Please let us know in the comments below<br>
    Did you enjoy this episode? If so, please leave a short review.<br>
    Connect with Us:<br>
    Single Grain << Eric’s ad agency <br>NP Digital << Neil’s ad agency <br>Twitter @neilpatel<br>
        Twitter @ericosiu `,
    listenOnLinks: {
        spotify: '#',
        googlePodcast: '#',
        applePodcast: '#',
    },
    shareOnLinks: {
        facebook: '#',
        twitter: '#',
        intagram: '#',
        youtube: '#',
        linkedin: '#',
    }
}
const JoinBlock = {
    title: `Join us at the Growth Ventures Podcast with Hamlet Azarian, your one-stop platform for all     things entrepreneurship, tech, and innovation.`,
    description: 'Each week, we chat with industry professionals who are shaping our future. We navigate the ups and downs of growth, from early startups to thriving scale-ups, sharing strategies,insights, and personal tales to inspire you.<br><br> No matter where you are in your journey—just starting, well-versed, or merely intrigued—come and grow with us at the Growth Ventures Podcast.',
    btn: {
        url: '#',
        text: 'Suggest a Guest',
    }
}
const podcastBanner = {
    image: <>
        <StaticImage
            placeholder="none"
            loading="eager"
            alt="BannerImg"
            src="../images/podcast/banner-img.png"
            className='mw-100'
        /></>,
    title: `About Podcast Host`,
    description: `Hamlet Azarian, the host of the Growth Ventures Podcast, is a seasoned growth expert with
    20 years of experience. As the CEO of Azarian Growth Agency, he's raised over $250M for
    groundbreaking tech startups. Balancing data-driven strategies with creativity, Hamlet
    is passionate about helping startups reach their full potential. Tune in to learn from
    this Southern California-based innovator, entrepreneur, and family man.`,
    links: {
        linkedin: '#',
        twitter: '#',
    },
    button: {
        url: '#',
        text: 'See More',
    }
}
const PodcastSinglePage = () => (
    <>
        <PodcastContent block={content}/>
        <PodcastBanner block={podcastBanner} />
        <JoinSection block={JoinBlock} />
    </>
)

export const Head = () => <Seo title="Page two" />

export default PodcastSinglePage