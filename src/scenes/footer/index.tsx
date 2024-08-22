import Logo from "@/assets/my_logo.png";
import { IconWrapper } from "./Icon";
import { Link } from "react-router-dom";

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
          <h4 className=" my-2 font-bold">Projects Links</h4>

          <a className="  hover:underline decoration-dotted decoration-black" href="https://rb.gy/jksr25">Resume </a> <br />
          <a className="  hover:underline decoration-dotted decoration-black" href="https://rb.gy/ix6ony" > National Charitable Pathology Lab </a> <br />
          <a className="  hover:underline decoration-dotted decoration-black" href="https://shorturl.at/RYoPF">Internship Certificate </a>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
          <h4 className=" my-2 font-bold  ">Contact Us</h4>
          <p className="  hover:underline decoration-dotted decoration-black">10/157 Cross Street Aligarh</p>
          <a href="mailto:Wasidansari5284@gmail.com" className=" hover:underline decoration-dotted decoration-black">Wasidansari5284@gmail.com</a>

          <a className=" hover:underline decoration-dotted decoration-black" href="tel:+91 9353436825">(+91) 9353436825</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
