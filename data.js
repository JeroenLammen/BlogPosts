var allBlogPosts = [
    {
        title:      "Google launches underwater Street View",
        bodyText:   "Today Google Maps unveils a new Street View feature: " +
                    "underwater panoramic views of six special sea spots. " +
                    "The idea is to create a virtual map of the oceans, " +
                    "documenting the state of fragile ecosystems as they " +
                    "change over time, and sharing a vivid experience of " +
                    "part of our world that few humans get to see up close " +
                    "and in person, in real life." +
                    "The ocean collection on Google Street View is now " +
                    "available at maps.google.com/ocean, and includes coral " +
                    "reefs and the creatures who live in them, in Australia, " +
                    "the Philippines and Hawaii.",
        link:       "http://boingboing.net/2012/09/25/google-launches-underwater-str.html",
        author:     "Xeni Jardin",
        image:      "http://www.magultima.com/wp-content/uploads/2015/05/Google-Steet-View-logo.png",
        ranking:    "3",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); }
    },
    {
        title:      "What to expect from Microsoft's Windows 10 device event",
        bodyText:   "Microsoft may be tight-lipped about what will be revealed at its October 6th device event, but" +
                    "that doesn't mean that everything is a mystery. In some cases, a slew of leaks have telegraphed" +
                    "Redmond's plans in advance. More Lumia phones, anyone? However, there are still a few questions" +
                    "left. What about the fabled Surface Pro 4? When does Windows 10 reach your existing phone? And" +
                    "will there be any wearable tech? We'll answer as many of those questions as we can so that" +
                    "you have a good idea of what to expect when Microsoft's execs take the stage.",
        link:       "http://www.engadget.com/2015/10/05/windows-10-device-event-preview/",
        author:     "Jon Fingas",
        image:      "http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/5184x3240+0+215/resize/1200x750!/format/jpg/quality/85/http://hss-prod.hss.aol.com/hss/storage/midas/9c7d3ba769cc14017c49081b88a063ec/201431312/6c3e4544d0474b30ac8b15f9d841ae69.jpeg",
        ranking:    "2",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "MotorMouth",
                text: "How could you all but ignore HoloLens? We haven't seen it for more than six months so I reckon the chance that we won't see it today is exactly zero. And for me it is the only thing that I will have even the slightest interest in.",
                ranking: "5",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "The_kicker",
                text: "Won't it be kind of pointless to put windows 10 on arm chip equipped phones?",
                ranking: "3",
                showComment: function(){ return generateComment(this) }
            }
        ]
    },
    {
        title:      "Chromecast Audio review: Give your old speakers a new brain",
        bodyText:   "It's been a little over two years since Google introduced the first Chromecast, " +
                    "a cheap and easy way to turn any TV in your house into a smart TV. The tiny little " +
                    "dongle has taken the market by storm, racking up sales of over 20 million since launch. " +
                    "Now, the company has replaced it with not one but two streaming devices: a direct "+
                    "successor to the original video-focused Chromecast and a new, audio-only device " +
                    "appropriately called the Chromecast Audio.",
        link:       "http://www.engadget.com/2015/10/05/chromecast-audio-review/",
        author:     "Nathan Ingraham",
        image:      "http://o.aolcdn.com/hss/storage/midas/b3353d005f835b219d973e9ad982b06c/202743851/P1000791.jpg",
        ranking:    "2",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "Narom",
                text: "So because neither Apple nor Tidal have chromecast support its a con against it? iPhone 6 doesn't have a slot for me to slot my CD's directly in to the device, can that count as a con for that? What a ludicrous review.",
                ranking: "5",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "Facedogg",
                text: "If you turn on the 'HDR audio' in the Chromecast app you get much better sound quality",
                ranking: "4",
                showComment: function(){ return generateComment(this) }
            }
        ]
    },
    {
        title:      "Here's where you're most likely to take an Instagram photo",
        bodyText:   "Certain locations are obviously Instagram photo magnets, like the Golden Gate Bridge" +
                    " or Times Square. Have you wondered which locations are actually the most popular, " +
                    "though? Busbud has done some legwork to find out. The tourism site recently published " +
                    "an interactive map that shows the most popular locations on Instagram in each US state " +
                    "and Canadian province... and they're not necessarily the ones you're expecting. It makes " +
                    "sense that Disneyland would be a hotspot for Californians, for example, but you might " +
                    "not know that Dollywood gets the most attention in Tennessee -- sorry, Elvis.",
        link:       "http://www.engadget.com/2015/10/04/instagram-popularity-map/",
        author:     "Jon Fingas",
        image:      "http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/2048x1365+0+170/resize/1200x800!/format/jpg/quality/85/http://hss-prod.hss.aol.com/hss/storage/midas/1586df5df7832e9b80de20ffb7e25f63/200613530/478957327.jpg",
        ranking:    "1",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "piusg",
                text: "The map says that in Florida, South Beach is the most instagram'd spot. But the cover pic isn't South Beach.Before I moved to Portland, Oregon, I lived very near this place. It's a beautiful little beach in South Florida called Pompano (POM-puh-no, not pom-PAE-no!) Beach. This photo looks north to Lighthouse Point, Lighthouse Point is also the name of the little town surrounding the lighthouse (hence the name). I used to live in Boca Raton, and my friends and I would switch between Boca Inlet and Lighthouse Point for late-night shenanigans.Pompano Beach is also noteworthy because of the Goodyear Blimp base at PMP (Pompano Air Park). If you see a shot of Dolphins Stadium (or Sun Life, or whatever they're calling it this bloody week) from the blimp, chances are the blimp flew only a few miles away from Pompano.",
                ranking: "2",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "mai-linh",
                text: "Ah yes the new state of mental stagnation where people can waste their lives away proving to everybody that there not even up to the caliper of an amateur photographer. There is a simple dystopic formula that fits these people perfectly.  (Head) + (Perfect Vacuum) = Useless Entity.",
                ranking: "3",
                showComment: function(){ return generateComment(this) }
            }
        ]
    },
    {
        title:      "'RoboHon' is the tiny robot smartphone you never knew you needed",
        bodyText:   "Watch the teaser video after the break. Skip along then come back to me. " +
                    "Sharp's RoboHon is so damn adorable, I can't look away from this kawaii singularity. " +
                    "This robot smartphone may be cute, but it's also jammed full of skills and features. " +
                    "A projector, articulated animated arms and legs, talkative but in a charming Japanese " +
                    "robot sort of way. You're old, Pepper the robot. There I said it.",
        link:       "http://www.engadget.com/2015/10/05/roboho-tiny-robot-smartphone-only-in-japan/",
        author:     "Mat Smith",
        // removed image field
        ranking:    "5",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "MJay",
                text: "Cutest robot ever!  When can I buy this in the US?  Robots for the win!",
                ranking: "1",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "Jeffey",
                text: "If  it can work as the center control of a smart home , then it can become popular.",
                ranking: "4",
                showComment: function(){ return generateComment(this) }
            }
        ]
    },
    {
        title:      "The new Roku does 4K and finds the remote for you",
        bodyText:   "It's clearly video-streaming box season. Apple finally dropped an updated Apple TV, " +
                    "the Chromecast got all colorful and the Fire TV upped its resolution to 4K. Now it's Roku's " +
                    "turn with the new Roku 4. The flatter and wider set-top box sports 4K, has a remote locator " +
                    "(YES!), an updated OS and a redesigned app that makes it easier to travel with your favorite " +
                    "shows. The new device joins the rest of the Roku line instead of replacing anything. " +
                    "Priced at $129, it sits between the Apple TV and Fire but without all the recent drama.",
        link:       "http://www.engadget.com/2015/10/06/roku-4-4k/",
        author:     "Roberto Baldwin",
        image:      "http://o.aolcdn.com/hss/storage/midas/42d904656b7725b59cf7d85606db088c/202755098/1006_roku4_hed-1.jpg",
        ranking:    "4",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "Ric",
                text: "first remote I've had with the select function not being at the center of the navigation keys......after 2 months with the roku 3 I still screw up. I see this is still the same.....bad design imo.",
                ranking: "3",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "boe_d",
                text: "I have all my movies ripped to my PC.  Does this let me stream DTS-MA, True-HD etc to my preamp?  4K is important to me but so is my sound; if anyone has any recommendations.  Still streaming from my Oppo which doesn't do 4K or have a nice interface but does have very good video and audio.",
                ranking: "2",
                showComment: function(){ return generateComment(this) }
            }
        ]
    },
    {
        title:      "2016 Chevrolet Volt first drive",
        bodyText:   "There's a hit vehicle hiding in GM's formula for the Chevy Volt. You can sense it" +
                    "in the enthusiasm that current Volt drivers have for their cars. You can see it in " +
                    "the amount of money GM has poured into its extended-range electric vehicle project. " +
                    "And perhaps most importantly, you can feel it from the driver's seat of the new, " +
                    "second-gen model. The big question is whether or not GM will be able to turn its " +
                    "much-hyped 'halo car' into a best-seller this time around. After driving it in " +
                    "northern California, I can tell you that the Volt is tremendous. But we all know " +
                    "it takes more than that to create a hit.",
        link:       "http://www.engadget.com/2015/10/02/2016-chevrolet-volt-first-drive/",
        author:     "Autoblog",
        // removed image field
        ranking:    "3",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "sae89194",
                text: "I've had my 2015 Volt for about 5 weeks now and love it. Put about 1,000 miles on it so far.  I've only filled the gas tank once and it only cost $18.96 and that's Premium UL. Having a Gen 1 is great, so I'm sure the improvements in this Gen 2 will be even better. ",
                ranking: "5",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "SiliconAddict",
                text: "And of course I'm ready to put 30K down on a 2016 Volt but its not available until next Spring as a 2017 model.  *slow golf clap* Well done Chevy.  It's like you are trying to hose your rollout or something.  Fantastic car.  Shit management.   I mean when I got my '07 Prius I had to wait half a year.  But it was still the same damn model year.",
                ranking: "1",
                showComment: function(){ return generateComment(this) }
            }
        ]
    },
    {
        title:      "iPhone 6s and 6s Plus review: more than just a refresh",
        bodyText:   "Some people look a little unkindly on the so-called 'S' years -- those years " +
                    "when Apple updates the iPhone, but doesn't change how it looks, and then sells " +
                    "that while secretly working on something flashier that will debut 12 months later. " +
                    "I don't think that's exactly fair. Those 'S' years are when Apple adds some of its most " +
                    "useful features. Siri? Touch ID? Both valuable additions to the iPhone platform that have " +
                    "since grown in importance. This year we get 3D Touch, a potentially awesome way to " +
                    "interact with iPhones. The thing is, a device's worth isn't just tied up in one feature: " +
                    "It's about how all those moving parts work together. That's why the new 6s and 6s Plus " +
                    "(starting at $649 and $749, respectively, for 16GB models) are such great phones. " +
                    "The combination of much-improved hardware and some polished software makes this year's " +
                    "release far more than just a modest refresh.",
        link:       "http://www.engadget.com/2015/10/01/iphone-6s-and-6s-plus-review/",
        author:     "Chris Velazco",
        // removed image field
        ranking:    "2",
        generate:   function() { generateSingleBlogPost(this); },
        returnRating: function() { return ratingResult(this); },
        comments:   [
            {
                name: "Timmmay",
                text: "The real point is most other flagship phones from other OEM's have ditched the 16GB model. Every phone that costs over $600, except the iPhone, has more than 16GB of storage. It's time for Apple to get with the times. It doesn't help that many people can't even install updates on their iPhone because they don't have enough spare room. For those that don't know, only 12GB of 16GB is available to the user on a 16GB iPhone running IOS8+ and after a few apps, photos and music albums you might not have the ~4GB needed to install IOS9, etc. This is why 32GB is important. And 32GB would have been fine for me, but it wasn't an option and I had to go with the 64GB iPhone 6 last year. ",
                ranking: "4",
                showComment: function(){ return generateComment(this) }
            },
            {
                name: "Mahadragon",
                text: "iPhone 6S Plus Cons: 'Base model still only has 16GB of storage' Since when do you know what's best for everybody? I have plenty of patients in my clinic who are senior citizens. The iPhone 6S Plus with 16GB of storage looks mighty attractive to them because they aren't power users and they don't need 64GB of storage. The 16GB iterations of every iPhone are the best sellers, incidentally, so it's not just senior citizens that are buying them.",
                ranking: "1",
                showComment: function(){ return generateComment(this) }
            }
        ]

    },
    {
        title:      "Moto X Pure Edition review: the third time really is the charm",
        bodyText:   "The Moto X line is a smartphone that's always been dancing around greatness. The first one was a lovely, underpowered experiment in smartphone customization and thoughtfulness. The second added some much-needed Moto Maker style and some more powerful silicon. Now Motorola's at it again with the Moto X Pure Edition, a phone that appears to sit right at the intersection of price and power. It's unlocked, ready for any US carrier and -- more importantly -- it's priced as low as $400 off contract. In other words, it's a serious contender for the 'Best Smartphone Out There' crown, at least on paper. The thing is, the market for cheap unlocked smartphones has exploded in popularity this year, and it'll take something really special for it to capture the title. So, how does Motorola's new flagship fare? Spoiler alert: really damned well.",
        link:       "http://www.engadget.com/2015/09/02/moto-x-pure-edition-review/",
        sponsorURL: "http://www.motorola.com",
        author:     "Chris Velazco",
        image:      "http://o.aolcdn.com/hss/storage/midas/f6edf6c340d0757c2c9524cfe4f715ca/202549289/xpure-fullbleed.jpg",
        ranking:    "5",
        generate:   function() { generateSponsoredBlogPost(this); },
        returnRating: function() { return ratingResult(this); }
    },
    {
        title:      "Samsung Galaxy S6 Edge+ review: beauty in curves -- with a cost",
        bodyText:   "The Galaxy S6 Edge+ is the closest thing we've got to a 'Samsung greatest hits' phone. There's the sleek, curved glass from the S6 Edge coupled with the larger 5.7-inch screen from the Note lineup. Together, they make up one of Samsung's most memorable smartphones yet. But while the Galaxy S6 Edge+ ($300 on-contract; $768 to $815 off) is certainly striking, the Korean electronics giant clearly still has some kinks to work out around curved screens. It's a feature that's slightly more useful here than on the S6 Edge, but fundamentally it's still just about aesthetics, rather than function. That might not be a problem for some, but Samsung still has to prove why curved screens are more than a gimmick.",
        link:       "http://www.engadget.com/2015/08/26/samsung-galaxy-s6-edge-plus-review/",
        sponsorURL: "http://www.samsung.com",
        author:     "Devindra Hardawar",
        image:      "http://o.aolcdn.com/hss/storage/midas/9e7a2c11eea091a5f791250d5a3c0f7e/202529845/Galaxy+S6+edge+plus+fullbleed+2.jpg",
        ranking:    "5",
        generate:   function() { generateSponsoredBlogPost(this); },
        returnRating: function() { return ratingResult(this); }
    },
    {
        title:      "Hands-on with LG's dual-screen, dual-selfie camera V10",
        bodyText:   "If you were wondering how LG might keep up with Samsung's experimentation with extra screen real estate on its Edge phones -- and really, isn't that the first thing we all think about after we wake up, pour a cup of coffee and question the insignificance of our existence -- the V10 is your answer. It's the beginning of a new series of phones for LG, ostensibly replacing the G Pro phablet line. Whereas the company's 'G' series remains its flagship, it seems like the 'V line will be where LG experiments a bit (even moreso than its curved Flex models). To that end, the V10 includes a few unique features: A second, tiny screen right above the main 5.7-inch display, and two front-facing cameras for the selfie-afflicted. It's also the company's first phone to include metal (it has steel around the sides), it sports a tough new silicon-based rear cover, and it packs in two Gorilla Glass 4 panels on its display. Clearly, there are a lot of ideas at play here, but how do they come together?",
        link:       "http://www.engadget.com/2015/10/01/lg-v10-hands-on/",
        author:     "Devindra Hardawar",
        video:      "https://www.youtube.com/embed/ZER3FhStPvE",
        ranking:    "3",
        generate:   function() { generateVideoBlogPost(this); },
        returnRating: function() { return ratingResult(this); }
    },
    {
        title:      "Google finally has a Surface competitor in the Pixel C",
        bodyText:   "Say hello to the first-ever Android tablet built by Google. It's the Pixel C, and just like how the Chromebook Pixel was the creme de la creme of Chromebooks, the Pixel C looks to be Google's attempt at making the best-ever 2-in-1 Android tablet it could possibly make. And yes, it appears to be Google's answer to the Microsoft Surface as well. My initial impression? It's gorgeous. Crafted out of anodized aluminum, the Pixel C is superslim, smooth to the touch, light as a feather and is quite simply one of the most elegant tablets -- nay, gadgets period -- that I've ever held in my hands.",
        link:       "http://www.engadget.com/2015/09/29/google-pixel-c-hands-on/",
        author:     "Nicole Lee",
        video:      "https://www.youtube.com/embed/LJpvo0yWLbg",
        ranking:    "2",
        generate:   function() { generateVideoBlogPost(this); },
        returnRating: function() { return ratingResult(this); }
    }
];