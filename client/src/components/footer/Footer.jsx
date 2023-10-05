const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-[90%] md:w-[80] lg:w-[80%] mx-auto flex justify-between flex-wrap py-8 bg-black min-h-[300px]">
        <div className="text-6xl text-pink-600 font-Poppins">Word Busters</div>
        <div className="flex flex-col">
          <h1 className="text-white text-xl font-semibold font-Poppins">
            Developed & Maintained By AB DEVS
          </h1>
          <div>
            <h3 className="text-white">email : abubakar.devs@gmail.com</h3>
            <h3 className="text-white">
              linkedin : https://www.linkedin.com/in/abubakar471/
            </h3>
            <h3 className="text-white">
              website : https://ab-devs.vercel.app/
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
