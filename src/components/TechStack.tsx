import { useState } from "react";
import { techStack } from "../constants";
import { styles } from "../styles";

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={`h-auto w-full ${styles.padding} flex flex-col gap-4`}>
      <div className={`${styles.sectionHeadText} flex gap-3 mx-auto `}>
        <p>Our Tech</p>
        <p className="text-[#0766FF]">Stack</p>
      </div>
      <p className="text-justify font-serif line-clamp-6 sm:line-clamp-none text-[12px] sm:text-[14px] sm:leading-relaxed px-2">
        At SajiloDev, our technological framework is meticulously crafted to
        empower our development endeavors with efficiency and scalability. Our
        comprehensive tech stack comprises a diverse assortment of cutting-edge
        tools and technologies, thoughtfully chosen to meet the demands of
        modern software engineering. From robust programming languages and
        frameworks to advanced deployment and monitoring solutions, each
        component is selected with precision to facilitate seamless development
        workflows. This approach enables us to deliver solutions that not only
        meet but exceed expectations, ensuring reliability and scalability
        across all our projects.
      </p>
      <div className="h-auto w-full flex  gap-4 items-center justify-between">
        <div className="w-[25%] sm:w-[20%] h-auto flex flex-col gap-3">
          {techStack?.map((item, index) => {
            return (
              <p
                key={index}
                className={`text-[14px] sm:text-[18px] cursor-pointer underline ${
                  currentIndex === index ? "text-black" : "text-slate-400"
                }`}
                onMouseOver={() => setCurrentIndex(index)}
              >
                {item?.title}
              </p>
            );
          })}
        </div>
        <div className="w-[70%] sm:w-[50%] h-auto justify-around flex flex-wrap gap-3 p-3 border-2 border-[#0766FF] rounded-md">
          {techStack[currentIndex]?.stack?.map((item, index) => {
            return (
              <div key={index} className="h-[80px] w-[20%]">
                <img
                  src={item}
                  alt="stack"
                  className=" w-full h-full object-contain"
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TechStack;
