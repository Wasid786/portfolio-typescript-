import Logo from "@/assets/my_logo.png";
import { IconWrapper } from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" className="" src={Logo} />
          <p className="my-5">
            Thank you for visiting my portfolio. Connect with me on social media, or reach out via email for collaborations. Let’s create something amazing together.
          </p>
          <p>© Wasid All Rights Reserved.</p>
          <IconWrapper />

        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Wasidansari5284@gmail.com</p>
          <p className="my-5"> https://rb.gy/ix6ony </p>
          <p>https://shorturl.at/jF9hz </p>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">10/157  Cross Street Aligarh</p>
          <p>(+91)9353436825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
