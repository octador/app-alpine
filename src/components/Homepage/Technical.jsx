import React from "react";

// dimensions
import dimensions from "../../asset/sources-homepage/caractéristiques/dimensions-tech.png";

// design
import design1 from "../../asset/sources-homepage/design/duo-left.jpg";
import design2 from "../../asset/sources-homepage/design/duo-right.jpg";
import design3 from "../../asset/sources-homepage/design/Moteur_desktop.png";

// interieur
import interieur1 from "../../asset/sources-homepage/interieur/interieur_desktop.png";

// motorisation
import moteurvideo from "../../asset/video/MOTEUR_CINEMAGRAPH-.mp4";

// technologie
import technovideo from "../../asset/video/Center-of-gravity-FR_LOW.mp4";

const Technical = () => {
  return (
    // dimensions of the car
    <section id="technical">
      <article className="bg-[#e1e1e1]">
        <div className="container py-20 px-12 flex md:flex-row flex-col gap-20 items-center">
          <div className="md:h-[200px] md:border-r-4 border-b-4 border-slate-400 flex items-center justify-center px-8">
            <h2 className="font-semibold text-2xl md:text-5xl">Dimensions</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <img
              className="w-[300px] object-cover"
              src={dimensions}
              alt="dimensions"
            />

            <p className="md:w-50 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              blanditiis, ratione qui, fugiat expedita laborum officiis magni
              molestiae accusantium cum odio obcaecati rem iusto deleniti.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-5 px-12 flex flex-col items-center gap-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div>
              <img
                className="w-[700px] object-cover"
                src={design3}
                alt="design"
              />
            </div>
            <div className="md:h-[300px] w-fit md:border-l-4 border-b-4 border-slate-400 flex items-center md:justify-end px-8">
              <h2 className="font-semibold text-2xl md:text-5xl text-right">Design</h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <img
              className="w-[300px] object-cover"
              src={design1}
              alt="design"
            />
            <p className="w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              blanditiis, ratione qui, fugiat expedita laborum officiis.
            </p>
            <img
              className="w-[300px] object-cover"
              src={design2}
              alt="design"
            />
          </div>
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-20 px-12 flex flex-col md:flex-row justify-center gap-20 items-center">
          <div className="md:h-[200px] md:border-r-4 border-b-4 border-slate-400 flex items-center px-8">
            <h2 className="font-semibold text-2xl md:text-5xl">Interieur</h2>
          </div>

          <div className="flex justify-center items-center gap-10">
            <img
              className="w-[340px] object-cover"
              src={interieur1}
              alt="interieur"
            />
            
          </div>
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-5 px-12 flex flex-col gap-20">
          <div className="flex flex-col-reverse items-center md:flex-row justify-center gap-16 ">
            <div>
              <video className="w-[500px]" autoPlay loop muted src={moteurvideo}/>
            </div>
            <div className="md:h-[300px] w-fit border-b-4 md:border-l-4 border-slate-400 flex items-center justify-end px-8">
              <h2 className="font-semibold text-2xl md:text-5xl text-right">Moteur</h2>
            </div>
          </div>

         
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-20 px-12 flex flex-col md:flex-row justify-center gap-20 items-center">
          <div className="md:h-[300px] border-b-4 md:border-r-4 border-slate-400 flex items-center px-8">
            <h2 className="font-semibold text-2xl md:text-5xl">Technologie</h2>
          </div>

          <div className="flex justify-center items-center gap-10">
            <video className="w-[500px]" autoPlay loop muted src={technovideo}/>

          </div>
        </div>
      </article>
    </section>
  );
};

export default Technical;
