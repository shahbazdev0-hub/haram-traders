import { ThemeImage } from "./ThemeImage";

export const services = [
    {
        id: 1,
        imgName: ThemeImage.ServicesPic1,        
        title: "Web Development",
    },
    {
        id: 2,
        imgName: ThemeImage.ServicesPic2,        
        title: "Strategy & Research",
    },
    {
        id: 3,
        imgName: ThemeImage.ServicesPic3,        
        title: "Growth Tracking",
    },
];

export const features = [
    {
        id: 1,
        iconName: "flaticon-idea",  
        colorStyle:"text-red",      
        title: "Idea & Analysis Gathering",
    },
    {
        id: 2,
        iconName: "flaticon-line-graph",  
        colorStyle:"text-yellow ",      
        title: "Design & Developing",
    },
    {
        id: 3,
        iconName: "flaticon-rocket",
        colorStyle:"text-green",
        title: "Testing & Lunching",
    },
];

export const serviceBlog = [
    {
        imageName:ThemeImage.ServicesPic1,
        title:'Web Development',
    },
    {
        imageName:ThemeImage.ServicesPic2,
        title:'Strategy & Research',
    },
    {
        imageName:ThemeImage.ServicesPic3,
        title:'Growth Tracking',
    },
    {
        imageName:ThemeImage.ServicesPic4,
        title:'Web Solution',
    },
    {
        imageName:ThemeImage.ServicesPic5,
        title:'Company Branding',
    },
    {
        imageName:ThemeImage.ServicesPic6,
        title:'24x7 Support',
    },
];

export const progressbar = [
    {
        title:'SEO',
        value:'80%'
    },
    {
        title:'Designing',
        value:'90%'
    },
    {
        title:'Development',
        value:'85%'
    },
    {
        title:'Marketing',
        value:'70%'
    }
]; 


export const awesomeServices = [
    {
        id: 1,
        iconName: "flaticon-pie-charts",
        title: "Product Research & Selection",
        desc: "Understanding what to sell and how to choose profitable products.",
        cardStyle: "shadow-yellow bg-yellow",
    },
    {
        id: 2,
        iconName: "flaticon-office",
        title: "Marketplace Strategy",
        desc: "Insights on how to succeed on platforms like Amazon, eBay, and others.",
        cardStyle: "shadow-red bg-red",
    },
    {
        id: 3,
        iconName: "flaticon-website",
        title: "Branding & Positioning",
        desc: "Creating a strong, recognizable brand that appeals to customers.",
        cardStyle: "shadow-green bg-green",
    },
    {
        id: 4,
        iconName: "flaticon-line-graph",
        title: "Logistics & Fulfillment",
        desc: "Best practices for inventory management, shipping, and fulfillment.",
        cardStyle: "bg-skyblue shadow-skyblue",
    },
    {
        id: 5,
        iconName: "flaticon-line-chart",
        title: "Digital Marketing",
        desc: "How to leverage social media, SEO, and paid advertising to drive sales.",
        cardStyle: "bg-orange shadow-orange",
    },
];

export const allServices = [
    ...services,
    ...features,
    ...serviceBlog,
    ...progressbar,
    ...awesomeServices
];