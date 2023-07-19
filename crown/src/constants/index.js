import { facebook, instagram, untappd, meal1 } from "../assets";

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
            data: "www.google.com",
            target: "_self",
          },
          {
            name: "Evening",
            link: "www.google.com",
            target: "_self",
          },
          {
            name: "Sunday",
            link: "www.google.com",
            target: "_self",
          },
          {
            name: "Children",
            link: "www.google.com",
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

const menuImages = [
  {
    id: "lunchMenu",
    title: "Lunch Menu",
    img: "",
    alt: "Lunch Menu Image",
    body: "Our Lunch Menu packed with all your favorites and light bites is available 12-4 Mon - Sat.",
    link: "",
  },
  {
    id: "eveningMenu",
    title: "Evening Menu",
    img: "",
    alt: "Evening Menu Image",
    body: "",
    link: "",
  },
  {
    id: "sundayMenu",
    title: "Sunday Lunch Menu",
    img: "",
    alt: "Sunday Lunch Menu Image",
    body: "",
    link: "",
  },
  {
    id: "kidsMenu",
    title: "Childrens Menu",
    img: "",
    alt: "Sunday Lunch Menu Image",
    body: "",
    link: "",
  },
  {
    id: "wineMenu",
    title: "Wine Menu",
    img: "",
    alt: "Sunday Lunch Menu Image",
    body: "",
    link: "",
  },
]