const HomePageHeader = () => {
  return (
    <div>
      <div
        className="w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto h-[80vh] max-h-max"
        style={{
          background: `url("/images/3.jpg") rgba(0,0,0,0.6)`,
          backgroundBlendMode: "darken",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "15px",
        }}
      >
        <div className="flex items-center justify-around flex-wrap h-full">
          <div className="p-8 px-12 my-6 flex flex-col border-pink-500 ">
            <h1 className="text-white text-6xl mt-8 font-Poppins">
              Word Busters
            </h1>
            <h3 className="text-md text-pink-500 font-semibold font-Poppins text-right">
              developed by ab devs
            </h3>
          </div>

          <form className="flex flex-col items-center justify-center">
            <input
              type="text"
              className="p-4 my-2 w-[350px] md:w-[500px] lg:w-[500px] xl:w-[500px] focus:outline-pink-500 focus:border-pink-500"
              placeholder="Name"
            />
            <input
              type="text"
              className="p-4 my-2 w-[350px] md:w-[500px] lg:w-[500px] xl:w-[500px] focus:outline-pink-500 focus:border-pink-500"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="p-4 my-2 w-[350px] md:w-[500px] lg:w-[500px] xl:w-[500px] focus:outline-pink-500 focus:border-pink-500"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="p-4 my-2 w-[350px] md:w-[500px] lg:w-[500px] xl:w-[500px] focus:outline-pink-500 focus:border-pink-500"
              placeholder="Message"
            />
            <button
              type="submit"
              className="p-4 my-2 w-[350px] md:w-[500px] lg:w-[500px] xl:w-[500px] bg-pink-500 text-lg font-bold text-white font-Poppins hover:bg-pink-800 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
