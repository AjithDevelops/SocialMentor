import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, 
    start,
    research,
    cut,
    funnel,
    script, } from "@/public/assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "services",
        title: "Services",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: start,
        title: "Setting up foundation",
        content:
            "We start by building brand positioning, story constitution document, and a solid content strategy that aligns with your personality and goals.",
    },
    {
        id: "feature-2",
        icon: research,
        title: "Research and ideation",
        content:
            "Our expert copywriters get into the research mode to come up with ideas that leave you with no other option other predictable organic growth.",
    },
    {
        id: "feature-3",
        icon: script,
        title: "Scripting",
        content:
            "80% of any videos success depends on how a video is scripted and structured. Our copywriters make sure every idea is scripted properly before we send you the scripts.",
    },
    {
        id: "feature-4",
        icon: cut,
        title: "Editing and distribution",
        content:
            "Once you record the scripts and send us the raw videos, Our editors get to work and create a unique editing style for your brand and managers distribute the content.",
    },
    {
        id: "feature-5",
        icon: funnel,
        title: "Organic marketing funnel setup",
        content:
            "The work doesn't stop here. Now marketers take over and setup backend systems and automations to bring you predictable organic leads ands sales.",
    }
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Happy Clients",
        value: "500+",
    },
    {
        id: "stats-2",
        title: "Followers Gained",
        value: "100K+",
    },
    {
        id: "stats-3",
        title: "Global Reach",
        value: "10M+",
    },
];

export const footerLinks = [
    {
        id: "footerLinks-1",
        title: "Policy",
        links: [
            {
                name: "Privacy Policy",
                link: "/privacyPolicy",
            },
            {
                name: "Refund Policy",
                link: "/refundPolicy",
            },
            // {
            //     name: "Create",
            //     link: "https://www.hoobank.com/create/",
            // },
            // {
            //     name: "Explore",
            //     link: "https://www.hoobank.com/explore/",
            // },
            // {
            //     name: "Terms & Services",
            //     link: "https://www.hoobank.com/terms-and-services/",
            // },
        ],
    },
    {
        id: "footerLinks-2",
        title: "Help Center",
        links: [
            {
                name: "Contact Us",
                link: "/contactUs",
            },
            // {
            //     name: "Partners",
            //     link: "https://www.hoobank.com/partners/",
            // },
            // {
            //     name: "Suggestions",
            //     link: "https://www.hoobank.com/suggestions/",
            // },
            // {
            //     name: "Blog",
            //     link: "https://www.hoobank.com/blog/",
            // },
            // {
            //     name: "Newsletters",
            //     link: "https://www.hoobank.com/newsletters/",
            // },
        ],
    },
    {
        id: "footerLinks-3",
        title: "Contract",
        links: [
            {
                name: "Terms of Use",
                link: "/termsOfUse",
            },
            // {
            //     name: "Become a Partner",
            //     link: "https://www.hoobank.com/become-a-partner/",
            // },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];

export const servicesData = [
    {
        type: "YouTube",
        category: "Exclusive Offer | 🟢 YouTube",
        services: [
            {
                id: "service-1",
                service: "YouTube Subscribers | Instant | [ Non - Drop ] [ 300-500 / Day ] [ Lifetime Refill♻️]",
                rate: "₹196.81 per 1000",
                minOrder: 50,
                maxOrder: 150000,
                averageTime: "251 hours and 21 minutes",
            },
            {
                id: "service-2",
                service: "YouTube Monetization Package | 5K Subscribers + 4000 WatchHours | 𝐁𝐞𝐬𝐭 𝐃𝐞𝐚𝐥 𝐄𝐯𝐞𝐫🚀 [ 𝗥𝗲𝗮𝗱 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 ]",
                rate: "₹1299.00 per 1000",
                minOrder: 1000,
                maxOrder: 4000,
                averageTime: "Not Enough Data",
            },
            {
                id: "service-3",
                service: "YouTube Watchtime [ 2000 / Day ] [ OWN server ] [ Lifetime Refill ]",
                rate: "₹1500.00 per 1000",
                minOrder: 2000,
                maxOrder: 4000,
                averageTime: "Not Enough Data",
            },
        ],
    },
    {
        type: "Instagram",
        category: "IG followers | [ No Matter Flag ON or OFF ]",
        services: [
            {
                id: "service-4",
                service: "🌟💎 Instagram Followers | Instant | [ Zero Drop ] [ 100K/Day ] [ Lifetime Refill♻️]",
                rate: "₹110.00 per 1000",
                minOrder: 50,
                maxOrder: 2500000,
                averageTime: "12 minutes",
            },
        ],
    },
    {
        type: "Instagram",
        category: "Instagram Followers [ WORKING AFTER UPDATE ]",
        services: [
            {
                id: "service-5",
                service: "Instagram Followers | Instant | [ Non Drop ] [ 50K / Day ] [ Old Accounts Mix ] [ 365 Days♻️]",
                rate: "₹46.12 per 1000",
                minOrder: 10,
                maxOrder: 450000,
                averageTime: "26 minutes",
            },
            {
                id: "service-6",
                service: "Instagram Followers | Instant | [ Non Drop💧] [ 100K / Day⚡] [ Old Accounts with 15+Post🌟] [ 365 Days Refill♻️]",
                rate: "₹55.14 per 1000",
                minOrder: 10,
                maxOrder: 8000000,
                averageTime: "48 minutes",
            },
            {
                id: "service-7",
                service: "Instagram Followers | Instant | [ Non Drop☔] [ Old Account🌟] [ 100K / Day⚡] [ 365 Days Refill♻️]",
                rate: "₹60.21 per 1000",
                minOrder: 100,
                maxOrder: 100000,
                averageTime: "09 hours and 42 minutes",
            },
            {
                id: "service-8",
                service: "Instagram Followers | Instant | [ 100K / Day ] [🧑‍🤝‍🧑 𝐨𝐥𝐝 𝐚𝐜𝐜𝐨𝐮𝐧𝐭𝐬 ] [ 365 Days Refill♻️]",
                rate: "₹64.03 per 1000",
                minOrder: 10,
                maxOrder: 100000,
                averageTime: "52 minutes",
            },
            {
                id: "service-9",
                service: "Instagram Followers | Instant | [ 100K / Day ] [ 🔥𝐎𝐥𝐝 𝐀𝐜𝐜𝐨𝐮𝐧𝐭𝐬 ] [ Lifetime Refill ⚡]",
                rate: "₹102.47 per 1000",
                minOrder: 10,
                maxOrder: 1000000,
                averageTime: "13 hours and 04 minutes",
            },
            {
                id: "service-10",
                service: "Instagram | 𝐄𝐦𝐞𝐫𝐠𝐞𝐧𝐜𝐲 𝐒𝐞𝐫𝐯𝐞𝐫 | [ 100K / Day ] [ 🔥𝐈𝐧𝐝𝐢𝐚𝐧 𝐐𝐮𝐚𝐥𝐢𝐭𝐲 ] [ Lifetime Refill ⚡]",
                rate: "₹150.91 per 1000",
                minOrder: 10,
                maxOrder: 500000,
                averageTime: "43 hours and 38 minutes",
            },
            {
                id: "service-11",
                service: "Instagram 🇮🇳 Indian Followers | Instant | [ 100k/Day ] [ 🇮🇳Premium Indian Followers ] [ 365 Days Refill♻️]",
                rate: "₹173.07 per 1000",
                minOrder: 10,
                maxOrder: 1000000,
                averageTime: "04 hours and 06 minutes",
            },
        ],
    },
    {
        type: "Instagram",
        category: "IG views [ Currently Working ]",
        services: [
            {
                id: "service-12",
                service: "IG Reel Views | 10M / Day | Always Best ❤️",
                rate: "₹0.31 per 1000",
                minOrder: 100,
                maxOrder: 100000,
                averageTime: "4 minutes",
            },
            {
                id: "service-13",
                service: "Instagram Views [ Video / Reel / IGTV ⚡] [ 𝐂𝐡𝐞𝐚𝐩𝐞𝐬𝐭 ]",
                rate: "₹1.66 per 1000",
                minOrder: 100,
                maxOrder: 5000000,
                averageTime: "02 hours and 33 minutes",
            },
            {
                id: "service-14",
                service: "Instagram Views | [ Cheapest ] | [ 1M / Day ] [ Stable ] [ Start : 0-15 Min ]",
                rate: "₹3.66 per 1000",
                minOrder: 100,
                maxOrder: 100000000,
                averageTime: "31 minutes",
            },
            {
                id: "service-15",
                service: "Instagram Views [ 𝟏𝐌 / 𝐃𝐚𝐲 ] [ 𝐌𝐚𝐱 : 𝟏𝟎𝐌 ] [ 𝐂𝐡𝐞𝐚𝐩𝐞𝐬𝐭 𝐈𝐧 𝐖𝐡𝐨𝐥𝐞 𝐌𝐚𝐫𝐤𝐞𝐭 ]",
                rate: "₹5.62 per 1000",
                minOrder: 100,
                maxOrder: 100000000,
                averageTime: "15 minutes",
            },
        ],
    },
    {
        type: "Instagram",
        category: "Instagram Likes | [ One Click Done ]",
        services: [
            {
                id: "service-16",
                service: "Instagram Likes | [ One Click Done⚡] | [ 500K / Day ] [ Non Drop ] [ Lifetime Refill ♻️]",
                rate: "₹6.63 per 1000",
                minOrder: 10,
                maxOrder: 300000,
                averageTime: "06 hours and 42 minutes",
            },
        ],
    },
    // Add more categories and services as needed
];