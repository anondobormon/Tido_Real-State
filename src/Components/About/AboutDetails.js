import React, { useContext } from "react";
import { LevelContext } from "../Context";
import { PropertyVideo } from "../SingleProperties/PropertyVideo";

export const AboutDetails = () => {
  const level = useContext(LevelContext);
  console.log(level);

  return (
    <div className="2xl:max-w-screen-2xl max-w-7xl m-auto p-4">
      <p className="text-3xl font-bold">Who We are?</p>
      <div className="w-24 h-1 my-2 bg-primary"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-xl font-thin md:py-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          commodi unde expedita quis eum rerum, quae voluptatum consequuntur
          saepe incidunt autem sed consequatur amet dolores ad sint dolore
          quaerat debitis, quibusdam ea! Sequi, nihil. Quam earum maiores ad
          dicta hic sapiente sed quaerat fuga pariatur a corporis ab, voluptatem
          distinctio aspernatur, harum iste at tempora impedit dignissimos,
          labore cupiditate porro libero et. Sit totam distinctio, labore
          tempore nostrum temporibus sunt quas placeat, repudiandae maxime
          delectus in accusamus. Ipsam, neque? Debitis molestiae corrupti optio,
          reprehenderit at excepturi voluptatum maxime quibusdam. Dicta sint
          odio incidunt voluptatem voluptatum quidem non voluptates magni
          laudantium!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          aspernatur at perspiciatis est debitis laborum culpa voluptatum sit
          temporibus, nesciunt ipsam sapiente rem tempore labore aut ab
          quibusdam fugiat veritatis totam laudantium sequi rerum veniam esse
          cum! Dolorum itaque quidem odio iusto, cum labore illo quod
          consectetur facere mollitia ullam?
        </p>
        <div>
          <PropertyVideo />
        </div>
      </div>
    </div>
  );
};
