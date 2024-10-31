import React from 'react';

const Main = () => {
  return (
    <section id="Main" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#18848e]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#18848e] to-transparent" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Oi, me chamo<br/> <span className="text-[#18819e]">Beatriz</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            Desenvolvimento FullStack há 1 ano, <br className="sm:block hidden" />
            Mobile e Web.
          </p>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1y3cBthW1UydkFEBRigx7wkxA0OrlAxjD/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#18819e] text-white text-[20px] font-bold py-4 px-6 rounded-2xl shadow hover:bg-white hover:text-[#18819e] transition duration-300"
            >
              CV_Beatriz
            </a>
          </div>
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#About'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <div className='w-3 h-3 rounded-full bg-secondary mb-1 animate-bounce' />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Main;
