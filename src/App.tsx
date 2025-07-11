import gsapIcon from "/gsap-hero-icon.svg";
import "./App.css";
import Slider from "./components/DraggableSlider/Slider/Slider";

function App() {
  const items = [
    {
      id: 1,
      url: "/slider-images/laika-img1.webp",
      alt: "laika img1",
      content: {
        text: "Coraline Curious Creator Kit",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 2,
      url: "/slider-images/laika-img2.webp",
      alt: "laika img2",
      content: {
        text: "ParaNorman Cat Toy Set",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 3,
      url: "/slider-images/laika-img2.webp",
      alt: "laika img2",
      content: {
        text: "Coraline Pink Palace Enamel Pin",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 4,
      url: "/slider-images/laika-img1.webp",
      alt: "laika img3",
      content: {
        text: "ParaNorman Cat Toy Set",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 5,
      url: "/slider-images/laika-img3.webp",
      alt: "laika img3",
      content: {
        text: "Coraline's Other World 3D Viewer",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 6,
      url: "/slider-images/laika-img2.webp",
      alt: "laika img3",
      content: {
        text: "Coraline's Other World 3D Viewer",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 7,
      url: "/slider-images/laika-img1.webp",
      alt: "laika img3",
      content: {
        text: "ParaNorman Zombie Collar",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
  ];

  const itemsWithoutImg = [
    {
      id: 1,
      alt: "laika img1",
      content: {
        text: "Coraline Curious Creator Kit",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 2,
      alt: "laika img2",
      content: {
        text: "ParaNorman Cat Toy Set",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    {
      id: 3,
      alt: "laika img2",
      content: {
        text: "Coraline Pink Palace Enamel Pin",
      },
      categories: [
        { text: "Arts & Crafts", highlight: true },
        { text: "Book", highlight: false },
      ],
      cta: {
        text: "VIEW PRODUCT",
        link: "#",
      },
    },
    // {
    //   id: 4,
    //   alt: "laika img3",
    //   content: {
    //     text: "ParaNorman Cat Toy Set",
    //   },
    //   categories: [
    //     { text: "Arts & Crafts", highlight: true },
    //     { text: "Book", highlight: false },
    //   ],
    //   cta: {
    //     text: "VIEW PRODUCT",
    //     link: "#",
    //   },
    // },
    // {
    //   id: 5,
    //   alt: "laika img3",
    //   content: {
    //     text: "Coraline's Other World 3D Viewer",
    //   },
    //   categories: [
    //     { text: "Arts & Crafts", highlight: true },
    //     { text: "Book", highlight: false },
    //   ],
    //   cta: {
    //     text: "VIEW PRODUCT",
    //     link: "#",
    //   },
    // },
    // {
    //   id: 6,
    //   alt: "laika img3",
    //   content: {
    //     text: "ParaNorman Zombie Collar",
    //   },
    //   categories: [
    //     { text: "Arts & Crafts", highlight: true },
    //     { text: "Book", highlight: false },
    //   ],
    //   cta: {
    //     text: "VIEW PRODUCT",
    //     link: "#",
    //   },
    // },
  ];

  return (
    <>
      <div>
        <h1>Carousel Challenge</h1>
        <img src={gsapIcon} width="40%" className="logo" alt="GSAP logo" />
      </div>
      <hr />
      {/* Slide */}
      <div style={{ padding: "50px 0" }}>
        <Slider items={items} />
      </div>
      <hr />
      {/* Slide without images */}
      <div style={{ padding: "50px 0" }}>
        <Slider items={itemsWithoutImg} />
      </div>
    </>
  );
}

export default App;
