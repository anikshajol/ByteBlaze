import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px-52px)]">
      <ScaleLoader size={100} color="#F56FD0" />
    </div>
  );
};

export default Loader;
