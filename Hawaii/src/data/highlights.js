import { navigationStrings } from '../utils/strings'

const highlightsData=[
    {
        image:require('../assets/images/surfing.png'),
        title:navigationStrings.SURFING,
        description:"Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.",
        tagline:"Best Hawaiian islands for surfing.",
        top_spots:[{
            name:"Maui",
            image:require('../assets/images/muai.png'),
        },
        {
            name:"Kauai",
            image:require('../assets/images/kuaui.png'),
        },
        {
            name:"Honolulu",
            image:require('../assets/images/honolulu.png'),
        }]
    },
    {
        image:require('../assets/images/hula.png'),
        title:navigationStrings.HULA,
        description:"Hula is a Hawaiian dance that originated with Native Hawaiians and is often performed as part of a ceremony. It's a storytelling dance that's characterized by fluid steps, graceful arm movements, and undulating gestures to instruments and chant. ",
        tagline:"Try it yourself.",
        top_spots:[{
            name:"Maui",
            image:require('../assets/images/muai.png'),
        },
        {
            name:"Kauai",
            image:require('../assets/images/kuaui.png'),
        },
        {
            name:"Honolulu",
            image:require('../assets/images/honolulu.png'),
        }]
    },
    {
        image:require('../assets/images/vulcanos.png'),
        title:navigationStrings.VULCANO,
        description:"Hawaii's volcanoes are shield volcanoes, which produce lava flows that create gently sloping mountains. The Hawaiian Islands were formed by a volcanic hot spot, a plume of magma that creates new islands as the Pacific Plate moves over it.",
        tagline:"Volcanic conditions can change at any time.",
        top_spots:[{
            name:"Maui",
            image:require('../assets/images/muai.png'),
        },
        {
            name:"Kauai",
            image:require('../assets/images/kuaui.png'),
        },
        {
            name:"Honolulu",
            image:require('../assets/images/honolulu.png'),
        }]
    }
]

const categories=[
    "Adventures","Culinary","Eco-tourism","Family","Sport"
]

const travelGuide={
    name:"Hadwin Malone",
    image:require('../assets/images/guide.png'),
    guide_since:"Guide since 2012"
}

export {travelGuide,categories,highlightsData}