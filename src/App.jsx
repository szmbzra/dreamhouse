import Navbar from "./components/Navbar";
import Banner from "./components/Home/Banner";
import Footer from "./components/Footer";
import Title from "./components/Title";

export default function App() {
  const Menu = [
    { id: 1, linkUrl: "/", name: "home" },
    { id: 2, linkUrl: "property", name: "Property" },
    { id: 3, linkUrl: "page", name: "Page" },
    { id: 4, linkUrl: "blog", name: "Blog" },
    { id: 5, linkUrl: "contact", name: "contact" },
  ];
  return (
    <div>
      <Navbar menuItems={Menu} />
      <Banner />
      <Title
        mainTitle="Explore our listings"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      />
      <Footer footerItems={Menu} />
    </div>
  );
}
