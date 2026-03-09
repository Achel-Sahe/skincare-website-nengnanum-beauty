import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Products", ariaLabel: "Learn about us", link: "/products" },
  { label: "Articles", ariaLabel: "View our services", link: "/articles" },
  { label: "About", ariaLabel: "Get in touch", link: "/about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Facebook", link: "https://twitter.com" },
  { label: "TikTok", link: "https://github.com" },
  { label: "Shopee", link: "https://linkedin.com" },
];



export default function NavbarMenu() {
  return (
    <StaggeredMenu
      position="left"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      menuButtonColor="#000000"
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen
      colors={["#bfeff0", "#86d6d3"]}
      accentColor="#86d6d3"
      isFixed={true}
    />
  );
}