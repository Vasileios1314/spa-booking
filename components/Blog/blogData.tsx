import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Netherlands is the best place to live for expat families.",
    paragraph:
      "The Netherlands is the best place to live for expat families? It’s true!",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["families"],
    publishDate: "2023",
    link: "https://dutchreview.com/culture/best-place-to-live-for-expat-families-netherlands/",
  },
  {
    id: 2,
    title: "Our Top 5 Best Cities to Work in the Netherlands.",
    paragraph:
      "The Netherlands is becoming more and more one of the top destinations for internationals.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["job"],
    publishDate: "2025",
    link: "https://jimble.nl/blog/expats/best-cities-to-work-in-the-netherlands/",
  },
  {
    id: 3,
    title: "Top 7 Reasons to Study in the Netherlands.",
    paragraph: "Taking the challenge of going abroad for studies.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["studies"],
    publishDate: "2025",
    link: "https://www.topuniversities.com/blog/top-7-reasons-study-netherlands",
  },
];
export default blogData;
