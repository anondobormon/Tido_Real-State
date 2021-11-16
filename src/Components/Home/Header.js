import { HomeIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <div className="custom-bg bg-header h-vh bg-indigo-200">
      <div className="max-w-screen-2xl py-8 m-auto grid grid-cols-1 md:grid-cols-2 z-in">
        <div className="mx-2 md:m-0 py-20  py-12 md:py-52 md:text-left">
          <p className="text-base flex color-primary">
            <span className="mr-4">
              <HomeIcon className="w-6 text-white h-6" />
            </span>
            Real State Agency
          </p>
          <p className="text-7xl mt-4 text-white font-bold">
            Find Your Own <br /> <span className="color-primary">Dream</span>{" "}
            House
          </p>
          <p className="text-sm my-4 my-6 text-white border-l-8 px-8 border-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            animi molestias hic a tenetur expedita ipsa voluptates sunt rem
            voluptatum explicabo qui deleniti natus, tempora repellendus
            distinctio vitae iste nam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias itaque atque voluptatibus, cumque accusamus
            iure quidem eum modi ipsa! Velit?
          </p>
          <button className=" mt-8 glow-on-hover" type="button">
            Get Start!
          </button>
        </div>
        <div className="py-12 md:py-64">
          <a class="play-btn" href="#"></a>
        </div>
      </div>
    </div>
  );
};
