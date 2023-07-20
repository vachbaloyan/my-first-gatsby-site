import * as React from "react"

import Seo from "../components/seo"

import PodcastHero from "../components/podcast/PodcastHero/PodcastHero"
import JoinSection from "../components/podcast/JoinSection/JoinSection"
import PodcastArchive from "../components/podcast/PodcastsSection/PodcastArchive"
import PodcastBanner from "../components/podcast/PodcastBanner/PodcastBanner"
import { StaticImage } from "gatsby-plugin-image"

const heroBlock = {
    rightImage: <><StaticImage
        placeholder="none"
        loading="eager"
        alt="Heroimage"
        src="../images/heroImg.png"
        className="mw-100"
    />
    </>,
    title: 'Welcome to <br>[A] Growth Ventures Podcast<br>with Hamlet Azarian',
    subtitle: 'The Ultimate Platform for Visionary Entrepreneurs, Innovators, and Change-Makers.',
    button: {
        url: '/podcasts',
        text: 'Listen to last episode'
    },
    listenLinks: {
        spotify: '#',
        googlePodcast: '#',
        applePodcast: '#',
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
const podcastArchive = {
    buttonText: 'Show More',
    podcastItems: [
        {
            id: 1,
            thumbnail: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="Thumbnail"
                    src="../images/podcast-thumbnail.jpg"
                    className='mw-100'
                />
            </>,
            title: ` <b>Nick Krasney:</b> How to Achieve Success
            in the Growth Industry`,
            episode: 'Episode #003',
            date: 'May 9, 2023',
            excerpt: `Each week, we chat with industry professionals who are shaping our future.
            We navigate the ups and downs of growth, from early startups to thriving
            scale-ups, sharing strategies, insights, and personal tales to inspire you.
            <br><br>
            No matter where you are in your journey—just starting, well-versed, or
            merely
            intrigued—come and grow with us at the Growth Ventures Podcast.`,
            listenLinks: {
                spotify: '#',
                googlePodcast: '#',
                applePodcast: '#',
            }
        },
        {
            id: 2,
            thumbnail: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="Thumbnail"
                    src="../images/podcast-thumbnail.jpg"
                    className='mw-100'
                />
            </>,
            title: ` <b>Nick Krasney:</b> How to Achieve Success
            in the Growth Industry`,
            episode: 'Episode #004',
            date: 'May 9, 2023',
            excerpt: `Each week, we chat with industry professionals who are shaping our future.
            We navigate the ups and downs of growth, from early startups to thriving
            scale-ups, sharing strategies, insights, and personal tales to inspire you.
            <br><br>
            No matter where you are in your journey—just starting, well-versed, or
            merely
            intrigued—come and grow with us at the Growth Ventures Podcast.`,
            listenLinks: {
                spotify: '#',
                googlePodcast: '#',
                applePodcast: '#',
            }
        },
        {
            id: 3,
            thumbnail: <>
                <StaticImage
                    placeholder="none"
                    loading="eager"
                    alt="Thumbnail"
                    src="../images/podcast-thumbnail.jpg"
                    className='mw-100'
                />
            </>,
            title: ` <b>Nick Krasney:</b> How to Achieve Success
            in the Growth Industry`,
            episode: 'Episode #005',
            date: 'May 9, 2023',
            excerpt: `Each week, we chat with industry professionals who are shaping our future.
            We navigate the ups and downs of growth, from early startups to thriving
            scale-ups, sharing strategies, insights, and personal tales to inspire you.
            <br><br>
            No matter where you are in your journey—just starting, well-versed, or
            merely
            intrigued—come and grow with us at the Growth Ventures Podcast.`,
            listenLinks: {
                spotify: '#',
                googlePodcast: '#',
                applePodcast: '#',
            }
        }
    ]
}
const podcastBanner = {
    image: <>
        <StaticImage
            placeholder="none"
            loading="eager"
            alt="BannerImg"
            src="../images/banner-img.png"
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
const PodcastsPage = () => (
    <>
        <PodcastHero block={heroBlock} />
        <JoinSection block={JoinBlock} />
        <PodcastArchive block={podcastArchive} />
        <PodcastBanner block={podcastBanner} />
    </>
)

export const Head = () => <Seo title="Page two" />

export default PodcastsPage
