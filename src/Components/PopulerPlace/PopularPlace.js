import React from "react";

export const PopularPlace = () => {
  const Cities = [
    {
      city: "New York",
      id: "1",
      url: "https://i.ibb.co/xC4xxXr/pexels-craig-adderley-1525612.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid vel maxime fugiat debitis mollitia, nulla nemo dolore perferendis dolorum provident voluptas, quis facilis cupiditate asperiores! Fugit odio rem sit nam! Aliquid culpa error enim incidunt blanditiis necessitatibus vel nemo recusandae? Temporibus eaque aliquam aspernatur perferendis exercitationem, veritatis neque dolores!",
    },
    {
      city: "California",
      id: "2",
      url: "https://i.ibb.co/0GZ2dXm/pexels-pixabay-258447.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid vel maxime fugiat debitis mollitia, nulla nemo dolore perferendis dolorum provident voluptas, quis facilis cupiditate asperiores! Fugit odio rem sit nam! Aliquid culpa error enim incidunt blanditiis necessitatibus vel nemo recusandae? Temporibus eaque aliquam aspernatur perferendis exercitationem, veritatis neque dolores!",
    },
    {
      city: "Texas",
      id: "3",
      url: "https://i.ibb.co/MkhwpF5/pexels-olga-lioncat-7244362.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid vel maxime fugiat debitis mollitia, nulla nemo dolore perferendis dolorum provident voluptas, quis facilis cupiditate asperiores! Fugit odio rem sit nam! Aliquid culpa error enim incidunt blanditiis necessitatibus vel nemo recusandae? Temporibus eaque aliquam aspernatur perferendis exercitationem, veritatis neque dolores!",
    },
    {
      city: "Florida",
      id: "4",
      url: "https://i.ibb.co/VJwsTnT/pexels-stein-egil-liland-5704791.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid vel maxime fugiat debitis mollitia, nulla nemo dolore perferendis dolorum provident voluptas, quis facilis cupiditate asperiores! Fugit odio rem sit nam! Aliquid culpa error enim incidunt blanditiis necessitatibus vel nemo recusandae? Temporibus eaque aliquam aspernatur perferendis exercitationem, veritatis neque dolores!",
    },
    {
      city: "Ageles",
      id: "5",
      url: "https://i.ibb.co/rZxmwTm/pexels-quang-nguyen-vinh-6711266.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid vel maxime fugiat debitis mollitia, nulla nemo dolore perferendis dolorum provident voluptas, quis facilis cupiditate asperiores! Fugit odio rem sit nam! Aliquid culpa error enim incidunt blanditiis necessitatibus vel nemo recusandae? Temporibus eaque aliquam aspernatur perferendis exercitationem, veritatis neque dolores!",
    },
  ];
  return (
    <div className="py-4 md:py-8 lg:py-20">
      <h1 className="text-3xl mt-4 md:mt-8 font-bold text-center">
        Mos Popular Places
      </h1>
      <h1 className="text-base my-2 text-center">
        Which is the most beautiful places in the country
      </h1>
      <div className=" max-w-screen-2xl py-8 m-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border populer-place relative">
          <div className="country text-center text-white w-full h-full absolute flex items-center justify-center">
            <div>
              <p className="text-3xl font-bold">{Cities[0].city}</p>
              <p className="text-base">145 Properties</p>
            </div>
          </div>
          <div className="rounded relative populer-place-overly overflow-hidden h-full">
            <img src={Cities[0].url} alt="" className="h-full " />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <div className="border populer-place relative">
              <div className="country text-center text-white w-full h-full absolute flex items-center justify-center">
                <div>
                  <p className="text-3xl font-bold">{Cities[1].city}</p>
                  <p className="text-base">100 Properties</p>
                </div>
              </div>
              <div className="rounded relative populer-place-overly overflow-hidden h-345">
                <img src={Cities[1].url} alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border populer-place relative">
              <div className="country text-center text-white w-full h-full absolute flex items-center justify-center">
                <div>
                  <p className="text-3xl font-bold">{Cities[2].city}</p>
                  <p className="text-base">100 Properties</p>
                </div>
              </div>
              <div className="rounded relative populer-place-overly overflow-hidden h-345">
                <img src={Cities[2].url} alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border populer-place relative">
              <div className="country text-center text-white w-full h-full absolute flex items-center justify-center">
                <div>
                  <p className="text-3xl font-bold">{Cities[3].city}</p>
                  <p className="text-base">100 Properties</p>
                </div>
              </div>
              <div className="rounded relative populer-place-overly overflow-hidden h-345">
                <img src={Cities[0].url} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
