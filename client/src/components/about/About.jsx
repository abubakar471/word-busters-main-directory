const About = () => {
  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto my-40 ">
        <div>
          <h1 className="text-center text-6xl text-pink-500 mb-10 font-Poppins">
            Our Avatars
          </h1>
          <div className="flex items-center flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between">
            <img
              src="/images/about1.jpg"
              className="w-[250px] h-[250px] rounded-full object-cover"
              alt=""
            />
            <img
              src="/images/about2.jpg"
              className="w-[250px] h-[250px] rounded-full object-cover"
              alt=""
            />
            <img
              src="/images/about3.jpg"
              className="w-[250px] h-[250px] rounded-full object-cover"
              alt=""
            />
            <img
              src="/images/about4.jpeg"
              className="w-[250px] h-[250px] rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto my-40 ">
        <div>
          <h1 className="text-center text-6xl text-pink-500 mb-10 font-Poppins">
            How I Was Built
          </h1>
          <div className="flex flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between">
            <div className="w-2/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <img src="/images/node_python.png" className="w-full object-cover rounded-lg" alt="" />
            </div>
            <div className="w-2/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="text-right mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                <h1 className="text-2xl">A story from the developer</h1>
            </div>
            <div className="font-Poppins font-semibold pl-6 mt-8">
                It is a demo game project about integreting a Python Server with a Node jS server and showing their output using the React JS frontend. 
                I used flask to built the python backend and hosed it online. Simplifying thing I can say that , this works something like this. First of 
                all frontend send request to the node js server's backend. From that node hs server we forward that request to the python flask backend. 
                After hitting the '/game-start' end point we get a secret word and word to display as display word in the frontend. Then our player has to 
                guess a single word at one time, than they can see, if their word is correct or not. Players get 5 retry chance , after that the game 
                will be over. And If the player can complete this game guessing all the letter correctly in secret word, they will see a congratulation message.
                I did not use any state management service like context or redux but for only general purpose I used local sorage to store game info.
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
