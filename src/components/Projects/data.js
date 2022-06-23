import rentalVideo from "../../images/rental-video.mp4";
import burgerVideo from "../../images/burger-video.mp4";
import emailVideo from "../../images/email-video.mp4";
import assemblyVideo from "../../images/assembly-vide.mp4";

const data = [
    {
        name: "Rental Marketplace",
        description: "My biggest MERN project",
        date: "June 2021",
        routeName: "rental-marketplace",
        video: rentalVideo,
    },
    {
        name: "Email template engine",
        date: "April 2022",
        description: "Create email templates by simple drag and drop",
        routeName: "email-template-engine",
        video: emailVideo,
    },
    {
        name: "Admin Panel hoodies",
        date: "March 2022",
        description: "Manage user hoodies through as admin",
        routeName: "admin-panel-hoodies",
        video: assemblyVideo,
    },
    {
        name: "Custom Burger Builder",
        description: "Hobby project",
        date: "August 2021",
        routeName: "burger-builder",
        video: burgerVideo,
    },
]

export default data