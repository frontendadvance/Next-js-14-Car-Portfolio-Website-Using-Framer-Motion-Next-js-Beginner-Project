import { 
    NavLink, 
    countUpItemsProps,
    ProjectProps,
    ServiceProps,
    ContactsProps
} from "@/Types";

// Services Logo
import { BsFillTaxiFrontFill, BsBriefcaseFill, BsTelephoneInboundFill, BsStarFill, BsAirplaneFill, BsFillCarFrontFill, BsFillPinMapFill, BsFillSendCheckFill } from "react-icons/bs"; 

const navLinks: NavLink[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/cars", label: "Cars" },
    { path: "/services", label: "Services" },
    { path: "/skilllevel", label: "Skills" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
];

const countUpItems: countUpItemsProps[] = [
    {
        id: 1,
        number: 21,
        text: "Years Of Experience",
    },
    {
        id: 2,
        number: 157,
        text: "Satisfied Customers",
    },
    {
        id: 3,
        number: 743,
        text: "Design Items",
    },
    {
        id: 4,
        number: 112,
        text: "Clients Served",
      },  
];

const projects: ProjectProps[] = [
    {
        id: 1,
        img: "/project1.jpg",
        name: "Porche Taycan Sport ",
        des: "Lorem ipsum dolor sit do amet, elit sed, adipiscing Lorem ipsum dolor sit do amet, elit sed, adipiscing ",
        detail: ["+ More Details"],
      },
      {
        id: 2,
        img: "/project2.jpg",
        name: "Rolls Royce Ghost 3 ",
        des: "Lorem ipsum dolor sit do amet, elit sed, adipiscing Lorem ipsum dolor sit do amet, elit sed, adipiscing ",
        detail: ["+ More Details"],
      },
      {
        id: 3,
        img: "/project3.jpg",
        name: "Range Rover Evoque ",
        des: "Lorem ipsum dolor sit do amet, elit sed, adipiscing Lorem ipsum dolor sit do amet, elit sed, adipiscing ",
        detail: ["+ More Details"],
      },
      {
        id: 4,
        img: "/project4.jpg",
        des: "Lorem ipsum dolor sit do amet, elit sed, adipiscing Lorem ipsum dolor sit do amet, elit sed, adipiscing ",
        name: "Ferrari 365 Daytona ",
        detail: ["+ More Details"],
      },
      {
        id: 5,
        img: "/project1.jpg",
        name: "Porche Taycan Sport ",
        des: "Lorem ipsum dolor sit do amet, elit sed, adipiscing Lorem ipsum dolor sit do amet, elit sed, adipiscing ",
        detail: ["+ More Details"],
      },
      {
        id: 6,
        img: "/project2.jpg",
        name: "Rolls Royce Ghost 3 ",
        des: "Lorem ipsum dolor sit do amet, elit sed, adipiscing Lorem ipsum dolor sit do amet, elit sed, adipiscing ",
        detail: ["+ More Details"],
      },
];

const services: ServiceProps[] = [
    { id: 1, title: "Car Rental with Driver", icon: <BsFillTaxiFrontFill />, description: "Enhance your rental experience with additional options." },
    { id: 2, title: "Business Car Rental", icon: <BsBriefcaseFill />, description: "Enhance your rental experience with additional options." },
    { id: 3, title: "Airport Transportation", icon: <BsAirplaneFill />, description: "Enhance your rental experience with additional options." },
    { id: 4, title: "Chauffeur Side Services", icon: <BsFillSendCheckFill />, description: "Enhance your rental experience with additional options." },
    { id: 5, title: "VIP Luxury Transportation", icon: <BsStarFill />, description: "Enhance your rental experience with additional options." },
    { id: 6, title: "Private Transportation", icon: <BsFillCarFrontFill />, description: "Enhance your rental experience with additional options." },
    { id: 7, title: "Roadside Assitance Service", icon: <BsFillPinMapFill />, description: "Enhance your rental experience with additional options." },
    { id: 8, title: "Event Transportation", icon: <BsTelephoneInboundFill />, description: "Enhance your rental experience with additional options." },
];

const skills = [
    { name: "Professional", level: 90 },
    { name: "Available", level: 80 },
    { name: "Comfortable", level: 95 },
    { name: "International", level: 80 },
];

const gallery = [
    {
      id: 1,
      name: 'Lamborghini Urus',
      image: '/7.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'Bentley Continental',
      image: '/14.jpg',
      link: '',
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      image: '/12.jpg',
      link: '',
    },
    {
        id: 4,
        name: 'Bugatti Mistral W16',
        image: '/9-1.jpg',
        link: '',
      },
      {
        id: 5,
        name: 'Aston Martin DBX',
        image: '/8-1.jpg',
        link: '',
      },
      {
        id: 6,
        name: 'Lamborghini Urus',
        image: '/7.jpg',
        link: '',
      },
  ];

  const contacts: ContactsProps[] = [
    { id: 1, title: "Address", text: "Schoonboomstraat 109, Nederland" },
    { id: 2, title: "Phone", text: "Office: +123 4567 8901" },
    { id: 3, title: "Available", text: "Mon-Sat 9:00-23:00; Sunday closed" },
  ]

export {navLinks, countUpItems, projects, services, skills, gallery, contacts };