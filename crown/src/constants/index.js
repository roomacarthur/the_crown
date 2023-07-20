import { facebook, instagram, untappd, meal1, steak, sundayLunch, wine, kidsMeal } from "../assets";

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
        id: "menus",
        title: "Our Menus",
    },
    {
        id: "bookings",
        title: "Bookings",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

export const footerLinks = [
      {
        title: "Follow Us",
        links: [
          {
            name: "Facebook",
            link: "https://www.facebook.com/thecrownpubhawes/",
            target: "_blank",
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/thecrownhawes/",
            target: "_blank",
          },
          {
            name: 'Untappd',
            link: "https://untappd.com/v/the-crown/654131",
            target: "_blank",
          },
        ],
      },
      {
        title: "Menus",
        links: [
          {
            name: "Lunch",
            link: "/lunch_menu",
            target: "_self",
          },
          {
            name: "Evening",
            link: "/evening_menu",
            target: "_self",
          },
          {
            name: "Sunday",
            link: "/sunday_menu",
            target: "_self",
          },
          {
            name: "Children's",
            link: "/childrens_menu",
            target: "_self",
          },
        ],
      },
      {
        title: "Useful Links",
        links: [
          {
            name: "Google",
            link: "https://g.page/r/CciBYIFEwuQKEBM/review",
            target: "_blank",
          },
          {
            name: "Trip Advisor",
            link: "https://www.tripadvisor.com/Restaurant_Review-g504001-d3505876-Reviews-The_Crown_Hawes-Hawes_Yorkshire_Dales_National_Park_North_Yorkshire_England.html",
            target: "_blank",
          },
        ],
      },
]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/thecrownhawes/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/thecrownpubhawes/",
  },
  {
    id: "social-media-4",
    icon: untappd,
    link: "https://untappd.com/v/the-crown/654131",
  },
];

const heroImages = [
  {
    link: meal1,
    alt: "Cajun chicken evening meal",
  },
]

export const menuImages = [
  {
    id: "lunch_menu",
    title: "Lunch Menu",
    img: meal1,
    alt: "Lunch Menu Image",
    body: "Our Lunch Menu is packed with all your favorites and light bites ",
    times: "Mon-Sat | 12:00 - 16:00"
  },
  {
    id: "evening_menu",
    title: "Evening Menu",
    img: steak,
    alt: "Evening Menu Image",
    body: "",
    times: "",
  },
  {
    id: "sunday_menu",
    title: "Sunday Lunch Menu",
    img: sundayLunch,
    alt: "Sunday Lunch Menu Image",
    body: "",
    times: "",
  },
  {
    id: "childrens_menu",
    title: "Children's Menu",
    img: kidsMeal,
    alt: "Sunday Lunch Menu Image",
    body: "",
    times: "Available all week.",
  },
  {
    id: "wine_menu",
    title: "Wine Menu",
    img: wine,
    alt: "Sunday Lunch Menu Image",
    body: "",
  },
]