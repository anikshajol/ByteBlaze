import Hero from "../Components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className=" flex flex-col relative justify-center items-center min-h-[calc(100vh-64px-52px)] ">
      <Hero />
      <img src={wave} alt="" className="absolute bottom-0 w-screen" />
    </div>
  );
};

export default Home;
