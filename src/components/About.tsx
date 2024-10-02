import Globe from "react-globe.gl";
import Button from "./Button";
import RotatingGlobe from "./RotatingGlobe";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("omsatapathy05@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-6 xl:grid-rows-5 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-auto gap-4 sm:gap-4 ">
        {/* <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-5 gap-4"> */}

        <div className="xl:col-span-2 col-span-1 xl:row-span-2 md:row-span-1">
          <div className="grid-container ">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hello I'm Om</p>
              <p className="grid-subtext">
                I have immense curiosity of how things that drive our daily
                lives work under the hood
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 col-span-1 xl:row-span-2 md:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <div className="grid-headtext">Tech Stack</div>
              <div className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React /
                Next.js ecosystems.
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 col-span-1 xl:row-span-3 md:row-span-2 md:h-auto h-max">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[376px] h-fit flex justify-center items-center">
              <RotatingGlobe />
            </div>
            <div>
              <p className="grid-headtext">Flexible Work</p>
              <p className="grid-subtext">
                I'm based in India, available for remote work
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 col-span-1 xl:row-span-2 md:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion</p>
              <p className="grid-subtext">
                I think it’s really cool how text typed on a computer can turn
                into real-life solutions!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 col-span-1 xl:row-span-2 md:row-span-1 md:h-auto h-max">
          <div className="grid-container">
            <img
              src="/assets/grid4v2.png"
              alt="grid-4"
              className="w-full sm:h-[200px] h-fit object-contain"
            />
            <div className="pb-10">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container " onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className="h-7 w-7"
                />
                <p className="font-medium text-gray_gradient sm:text-xl text-lg">
                  omsatapathy05@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
