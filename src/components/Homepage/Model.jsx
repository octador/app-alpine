import React from "react";

import a110Model from '../../asset/sources-homepage/A110/Alpine-A110-1.jpg'
import a110ModelCollage from '../../asset/sources-homepage/A110/Presentation_desktop-1.png';

const Model = () => {
  return (
    <section id="model" className="py-12">
      <div className="py-8 container flex flex-col md:flex-row items-center text-center md:text-right gap-5">
        <div className="w-50 sm:w-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugiat eaque illo libero tenetur iusto eveniet fugit omnis exercitationem placeat quis consequatur expedita, asperiores sint porro debitis incidunt qui dignissimos.
        </div>

        <div className="md:w-50">
            <img src={a110Model} alt="a110" />
        </div>
      </div>

      <div className="py-8 container flex flex-col md:flex-row items-center gap-4">
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi incidunt veniam molestiae velit quo, optio nemo commodi fugit qui. Suscipit iste natus eum consectetur 
        </div>
        <div className="w-64 md:w-full">
            <img src={a110ModelCollage} alt="a110" />
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit doloribus totam necessitatibus iure non aliquid, id ea facere sequi fuga reiciendis dolore similique 
        </div>
      </div>
    </section>
  );
};

export default Model;
