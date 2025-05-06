import { DotLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <DotLoader size={100} color="#309898"></DotLoader>
    </div>
  );
};

export default Loader;
