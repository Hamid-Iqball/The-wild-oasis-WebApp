import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini({color}) {
  return (
    <div className="flex justify-center items-center">


    <BiLoaderAlt 
      className="w-6 h-6 animate-spin" 
      style={{ animationDuration: "1.5s" }} 
      color={color}
      />
      </div>
  );
}

export default SpinnerMini;
