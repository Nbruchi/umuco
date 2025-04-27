import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
   const { progress } = useProgress();

   return (
      <Html center>
         <div className="flex items-center justify-center relative">
            <div className="w-40 h-40 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
            <div className="text-blue-500 text-2xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
               {Math.round(progress)}%
            </div>
         </div>
      </Html>
   );
};

export default Loader;
