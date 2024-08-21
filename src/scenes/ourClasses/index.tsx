import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image01.png";
import image2 from "@/assets/image02.png";
import image3 from "@/assets/image03.png";
import image4 from "@/assets/image04.png";
import image5 from "@/assets/image05.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "National Charitable Pathology Lab",
    description:
      "The National Charitable Pathology Lab website offers comprehensive features, including authentication, home page, test booking, contact info, about us, nearest center locator, report downloads, and donation options, providing a seamless and user-friendly experience for all visitors.( https://nationalcharitablepathologylab.vercel.app/ ) ",
    image: image1,

  },
  {
    name: "Pet Market Place (Purrfect)",
    description:
      "Purrect is an online pet marketplace where users can buy and sell pets directly, similar to OLX. It offers a seamless platform for connecting pet owners with potential buyers without any intermediate.",
    image: image3,
  },
  {
    name: "Pathology Lab Report Expert",
    description:
      "A platform where user can create pathology lab test report with an easy interface.",
    image: image2,
  },
  {
    name: "WeCare",
    description:
      "A Clinical Website where doctor can prepare patient treatment card and store the data for future query.",
    image: image4,
  },
  {
    name: "Personal Protfolio",
    description: "basic personal portfolio using html and tailwind css and a little bit of javascript",
    image: image5,
  },

];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Projects</HText>
            <p className="py-5">
              These are a quick overview of my projects. When you hover over the screenshot, you get information about the project.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
