import { facebook, instagram, untappd, meal1, steak, sundayLunch, wine, kidsMeal } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        url: "/",
    },
    {
        id: "menus",
        title: "Our Menus",
        url: "/menus",
    },
    {
        id: "bookings",
        title: "Bookings",
        url: "/bookings",
    },
    {
        id: "contact",
        title: "Contact",
        url: "/contact",
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
    body: "Our Lunch Menu is packed with all your favorites and light bites.",
    times: "Mon-Sat | 12:00 - 15:00"
  },
  {
    id: "evening_menu",
    title: "Evening Menu",
    img: steak,
    alt: "Evening Menu Image",
    body: "The perfect way to end your day of exploring the Yorkshire Dales.",
    times: "Mon-Sat | 17:00 - 20:30",
  },
  {
    id: "sunday_menu",
    title: "Sunday Lunch Menu",
    img: sundayLunch,
    alt: "Sunday Lunch Menu Image",
    body: "Your sunday favorites cooked for you.",
    times: "Sun | 12:00 - 19:00",
  },
  {
    id: "childrens_menu",
    title: "Children's Menu",
    img: kidsMeal,
    alt: "Childrens Menu Image",
    body: "Healthy childrens meals to keep the little ones fueled.",
    times: "Available all week.",
  },
  {
    id: "wine_menu",
    title: "Wine Menu",
    img: wine,
    alt: "Wine Menu Image",
    body: "Our favorite hand picked wines.",
  },
]

