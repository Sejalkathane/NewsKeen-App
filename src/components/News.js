import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Asha Thapa, Kathleen Magramo",
            "title": "At least 68 killed in Nepal's worst airplane crash in 30 years - CNN",
            "description": "At least 68 people were killed Sunday when an aircraft went down near the city of Pokhara in central Nepal, a government official said, the country's deadliest plane crash in more than 30 years.",
            "url": "https://www.cnn.com/2023/01/15/asia/nepal-yeti-airlines-crash-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230115050553-02-pokhara-plane-crash-011523.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-15T12:22:00Z",
            "content": "At least 68 people were killed Sunday when an aircraft went down near the city of Pokhara in central Nepal, a government official said, the countrys deadliest plane crash in more than 30 years. \r\nSev… [+3708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SamMobile"
            },
            "author": "SamMobile, Mihai Matei",
            "title": "Here's what the Galaxy S23 Ultra S-View Flip Cover looks like - SamMobile - Samsung news",
            "description": "The entire Galaxy S23 lineup has leaked by now. And since the design no longer appears to be a mystery, ...",
            "url": "https://www.sammobile.com/news/here-is-the-galaxy-s23-ultra-s-view-flip-cover/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/01/FmcjcC6XoAILIfu-1-720x388.png",
            "publishedAt": "2023-01-15T10:12:00Z",
            "content": "The entire Galaxy S23 lineup has leaked by now. And since the design no longer appears to be a mystery, the leaks are now changing focus on other aspects, such as the official accessories Samsung pla… [+1665 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Michael David Smith",
            "title": "Brandon Staley on Chargers’ collapse: I’m hurting for everybody in that locker room - NBC Sports",
            "description": "Chargers head coach Brandon Staley said after Saturday night’s epic collapse against the Jaguars that it hurt to see his players and coaches in pain.After ratting off all the things the Chargers did well — including jumping out to a 27-0 lead and winning the …",
            "url": "https://profootballtalk.nbcsports.com/2023/01/15/brandon-staley-on-chargers-collapse-im-hurting-for-everybody-in-that-locker-room/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/01/GettyImages-1246245000-e1673777141311.jpg",
            "publishedAt": "2023-01-15T10:06:00Z",
            "content": "Chargers head coach Brandon Staley said after Saturday nights epic collapse against the Jaguars that it hurt to see his players and coaches in pain.\r\nAfter ratting off all the things the Chargers did… [+748 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Emma Tucker",
            "title": "A 6-year-old shot a Virginia teacher with his mother's gun. The tragedy highlights the lack of strong secure storage laws across the nation - CNN",
            "description": "In the week since a six-year-old boy in Newport News, Virginia took a gun from his home, brought it to school and shot his teacher, community members and officials are grappling with an unsettling question: How did the child get access to a loaded firearm?",
            "url": "https://www.cnn.com/2023/01/15/us/virginia-child-shooting-secure-storage-laws/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230109113435-02-richneck-elementary-shooting-0109.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-15T10:03:00Z",
            "content": "In the week since a six-year-old boy in Newport News, Virginia took a gun from his home, brought it to school and shot his teacher, community members and officials are grappling with an unsettling qu… [+9159 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WABC-TV"
            },
            "author": null,
            "title": "Mega Millions numbers: 1 winning ticket for the $1.35B jackpot; $1M tickets sold in Manhattan, Long Island City - WABC-TV",
            "description": "A single ticket-holder in Maine is the only one to match all six numbers drawn in Friday night's Mega Millions drawing.",
            "url": "https://abc7ny.com/mega-millions-drawing-megamillions-jackpot-winning-numbers/12701043/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12701302_011423-wabc-mega-img.jpg?w=1600",
            "publishedAt": "2023-01-15T08:37:57Z",
            "content": "NEW YORK (WABC) -- A single ticket-holder in Maine will be celebrating a very happy new year after that ticket is the only one to match all six numbers drawn in Friday night's Mega Millions drawing.\r… [+5448 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Repaired German Leopard tanks for Ukraine ready in 2024 at earliest, armsmaker says - Yahoo News",
            "description": "German armsmaker Rheinmetall could only deliver repaired Leopard 2 battle tanks to Ukraine in 2024 at the earliest, its chief executive was quoted as saying ...",
            "url": "https://news.yahoo.com/repaired-german-leopard-tanks-ukraine-074854757.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/56fa2b86862b839f2b449af88fb9a2a7",
            "publishedAt": "2023-01-15T07:48:00Z",
            "content": "BERLIN (Reuters) - German armsmaker Rheinmetall could only deliver repaired Leopard 2 battle tanks to Ukraine in 2024 at the earliest, its chief executive was quoted as saying by Bild newspaper on Su… [+1123 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sports Illustrated"
            },
            "author": "Conor Orr",
            "title": "The Jaguars’ Comeback Playoff Win Was Symbolic of a New Beginning - Sports Illustrated",
            "description": "We will look back at the second half of Saturday’s comeback as the moment Trevor Lawrence arrived. The way it played out was fitting.",
            "url": "https://www.si.com/nfl/2023/01/15/jaguars-comeback-playoff-win-trevor-lawrence-arrives",
            "urlToImage": "https://www.si.com/.image/t_share/MTk1MTczMDMxODMwNjI4MDY2/trevor-lawrence-comeback.jpg",
            "publishedAt": "2023-01-15T07:40:47Z",
            "content": "After the field goal went through, after the idea of the third-largest comeback in postseason history became real, Trevor Lawrence wheeled around in circles with his head leaned forward, running towa… [+5280 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Erin Moriarty",
            "title": "Melissa Turner, a cosplay model, claims she stabbed fiancé Matthew Trussler in self-defense; prosecutors say security cameras prove otherwise - CBS News",
            "description": "Melissa Turner initially told detectives she didn't know what happened to Matthew Trussler, but when investigators found a security camera that held clues to what happened — her story changed.",
            "url": "https://www.cbsnews.com/news/melissa-turner-cosplay-model-matthew-trussler-stabbing-self-defense-security-cameras-48-hours/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/03/2ce1133d-72c2-4370-9550-7d97625d10c2/thumbnail/1200x630/07e98af29e0400a443827d6847673b6f/trussler-02.jpg",
            "publishedAt": "2023-01-15T07:20:00Z",
            "content": "Melissa Turner called 911 saying she had discovered her fiancé Matthew Trussler lying unresponsive near their swimming pool in Riverview, Florida. He was pronounced dead at the scene and an autopsy l… [+37466 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Sally Jenkins",
            "title": "49ers, Brock Purdy blitz Seahawks with second-half deluge - The Washington Post",
            "description": "The 49ers are quickly becoming a force of nature, and the Seahawks learned that quickly in Saturday's first-round playoff matchup.",
            "url": "https://www.washingtonpost.com/sports/2023/01/14/49ers-seahawks-brock-purdy/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4AZ5ZRMGFBETXP3CRMMDSLJ6SM.jpg&w=1440",
            "publishedAt": "2023-01-15T05:56:00Z",
            "content": "Comment on this story\r\nSANTA CLARA, Calif. The thunderheads were everywhere you looked but the least of them were in the sky over Levis Stadium. The San Francisco 49ers opened the NFL postseason Satu… [+6218 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Israelis rally in three cities against Netanyahu legal reforms - Reuters.com",
            "description": "Tens of thousands of Israelis demonstrated in three major cities on Saturday against Prime Minister Benjamin Netanyahu's judicial reform plans, with organisers accusing him of undermining democratic rule weeks after his reelection.",
            "url": "https://www.reuters.com/world/middle-east/thousands-israelis-protest-against-netanyahus-legal-reforms-2023-01-14/",
            "urlToImage": "https://www.reuters.com/resizer/qdRFV38RJgOU4hYWfYpF6hXM_jM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KK67SOFFJVM3DFPGEPO3Q76DEU.jpg",
            "publishedAt": "2023-01-15T04:48:00Z",
            "content": "TEL AVIV, Jan 14 (Reuters) - Tens of thousands of Israelis demonstrated in three major cities on Saturday against Prime Minister Benjamin Netanyahu's judicial reform plans, with organisers accusing h… [+2964 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2023 NFL playoff schedule, bracket: Dates, times, TV, streaming for every round of NFC and AFC postseason - CBS Sports",
            "description": "Here are the dates and times for every round of the NFL playoffs",
            "url": "https://www.cbssports.com/nfl/news/2023-nfl-playoff-schedule-bracket-dates-times-tv-streaming-for-every-round-of-nfc-and-afc-postseason/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/09/218a444e-9c56-4a42-922c-d545a0d2c85d/thumbnail/1200x675/b5f41bb7a8b49192e067ca41af7faecc/2022bracket-sea.png",
            "publishedAt": "2023-01-15T04:43:00Z",
            "content": "After just two games, Super Bowl Wild Card Weekend has already lived up to its name by giving NFL fans a super wild Saturday. \r\nAlmost all of the drama from Day 1 of the NFL playoff came Saturday nig… [+4671 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By Kathleen Magramo",
            "title": "Asian American R'Bonney Gabriel crowned Miss Universe - CNN",
            "description": "R'Bonney Gabriel from the United States was crowned the 71st Miss Universe on Saturday night.",
            "url": "https://www.cnn.com/style/article/miss-universe-crowned-rbonney-gabriel-usa-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230114230051-01-miss-usa-011423-super-tease.jpg",
            "publishedAt": "2023-01-15T04:28:43Z",
            "content": "When Gabriel entered the Top 5, she was asked, \"Miss Universe recently made an inclusive change allowing mothers and married women to compete this year. What's another change you'd like to see and wh… [+97 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Patrick Reilly",
            "title": "NYC Mayor Eric Adams to tour migrant shelters, visit southern border during El Paso trip - New York Post ",
            "description": "Mayor Eric Adams has a stacked schedule Sunday in El Paso, Texas — where he’ll set eyes on the border crisis that has his own city stretched to the absolute limit.",
            "url": "https://nypost.com/2023/01/14/mayor-adams-to-tour-migrant-shelters-visit-southern-border-during-el-paso-trip/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/01/adams-comp-1.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-01-15T04:11:00Z",
            "content": "Mayor Eric Adams has a stacked schedule Sunday in El Paso, Texas — where he’ll set eyes on the border crisis that has his own city stretched to the absolute limit. \r\nHizzoner will spend the day visit… [+2513 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Old mice regain eyesight and develop younger brain in new study - The Jerusalem Post",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiLGh0dHBzOi8vd3d3Lmpwb3N0LmNvbS9zY2llbmNlL2FydGljbGUtNzI4NTUy0gEuaHR0cHM6Ly9tLmpwb3N0LmNvbS9zY2llbmNlL2FydGljbGUtNzI4NTUyL2FtcA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-01-15T03:23:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Russia-Ukraine war at a glance: what we know on day 326 of the invasion - The Guardian",
            "description": "Russian missile attacks in Dnipro kill at least 14; UK pledges to send Ukraine tanks to ‘push Russian troops back’; power outages across Ukraine",
            "url": "https://www.theguardian.com/world/2023/jan/15/russia-ukraine-war-at-a-glance-what-we-know-on-day-326-of-the-invasion",
            "urlToImage": "https://i.guim.co.uk/img/media/0e1a2d307ec034dda2736bd96ee5c1734236583b/0_345_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f140e725fc7f4eea3ef1944c69f4c165",
            "publishedAt": "2023-01-15T03:16:00Z",
            "content": "<li>Russia carried out two mass rocket attacks on Ukraine on Saturday, devastating an apartment block in Dnipro and leaving at least 14 people deadand64 injured, at least a dozen of them children. Re… [+2877 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lloyd Lee",
            "title": "Trump used deposition in E. Jean Carroll defamation case to boast, complain - Business Insider",
            "description": "During an October 2022 deposition, Donald Trump took the time to gloat about his social media platform and threatened to sue his deposer.",
            "url": "https://www.businessinsider.com/moments-trump-meandered-deposition-for-e-jean-carroll-defamation-suit-2023-1",
            "urlToImage": "https://i.insider.com/63c39113b4171f001957ee75?width=1200&format=jpeg",
            "publishedAt": "2023-01-15T03:02:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Ed O'Keefe",
            "title": "White House's response to Biden documents frustrates Democrats inside and outside the West Wing - CBS News",
            "description": "West Wing staffers, officials across the Biden administration and Democratic Party officials expressed frustration to CBS News with how the White House has explained the situation.",
            "url": "https://www.cbsnews.com/news/biden-documents-classified-white-house-response-democrats/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/01/14/df1d5679-d0dd-4694-b738-5e5867986108/thumbnail/1200x630/dc45483dd3db68553811ed0a56f90770/gettyimages-1456008302.jpg",
            "publishedAt": "2023-01-15T00:45:00Z",
            "content": "Washington — Over the course of the week, West Wing staffers, officials across the Biden administration and Democratic Party officials more broadly expressed frustration to CBS News with how the Whit… [+5443 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Russia fires new waves of missiles at Ukraine and hits energy infrastructure - BBC",
            "description": "Several cities were struck including Dnipro, where an apartment block was hit, killing at least 20.",
            "url": "https://www.bbc.com/news/world-europe-64278733",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BCAC/production/_128300384_75bea032e6179ece35beb89c5f2f7d80b3c4613d0_352_5184_29161000x563.jpg",
            "publishedAt": "2023-01-15T00:33:22Z",
            "content": "Media caption, Aftermath of missile strike in Dnipro\r\nRussia launched fresh waves of missile attacks across Ukraine on Saturday, killing at least 20 people in a strike on an apartment block in the ea… [+3128 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Another powerful storm front hits California amid flooding woes - CBS Evening News",
            "description": "The latest in series of powerful storms hit California Saturday, causing widespread damage and forcing emergency evacuations. Danya Bacchus has the details.\"...",
            "url": "https://www.youtube.com/watch?v=OEP3YE6jIls",
            "urlToImage": "https://i.ytimg.com/vi/OEP3YE6jIls/maxresdefault.jpg",
            "publishedAt": "2023-01-14T23:55:47Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "fox8.com"
            },
            "author": "Eric Henrikson",
            "title": "Green comet to streak across the sky in 2023 for first time since Stone Age - WJW FOX 8 News Cleveland",
            "description": "This month, skygazers will be treated to a once-in-a-civilization sight: a green comet named C/2022 E3 (ZTF) approaching Earth.",
            "url": "https://fox8.com/news/green-comet-streaks-across-the-sky-in-2023-for-first-time-since-stone-age/",
            "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2023/01/CometGettyImages-1357346926.jpg?w=1280",
            "publishedAt": "2023-01-14T23:50:00Z",
            "content": "AUSTIN, Texas (KXAN) This month, skygazers will be treated to a once-in-a-civilization sight: a green comet named C/2022 E3 (ZTF) approaching Earth. \r\nThe comet, which last passed through our solar s… [+2408 chars]"
        }
    ]

    constructor() {
        super();
        console.log('Hello i am const from news component ');
        this.state = {
            articles: this.articles,
            loading: false
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h2>News Keen Top Headline</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                  return  <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    
                    </div>
                })}

                </div>
            </div>
        );
    }
}

export default News;
