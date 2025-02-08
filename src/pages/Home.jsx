import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Book from "../components/Book";
import Palace from "../models/Palace";
import CameraAnimation from "../components/CameraAnimation";
import { useRef, useEffect } from "react";

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const adjustModelSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = 0.2;
      screenPosition = [0, -2, 0];
    } else {
      screenScale = 0.3;
      screenPosition = [65, -10, -120];
    }

    return [screenScale, screenPosition];
  };

  const [modelScale, modelPosition] = adjustModelSize();

  return (
    <section ref={scrollContainerRef} className="relative w-full h-[200vh]">
      {/* Fixed position container for 3D scene */}
      <div className="fixed top-0 left-0 w-full h-screen">
        <Canvas
          camera={{
            near: 1,
            far: 1000,
            position: [0, 0, 100],
          }}
        >
          <Suspense fallback={<Loader />}>
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000"
              intensity={1}
            />
            <Sky />
            <Palace scale={modelScale} position={modelPosition} />
            <CameraAnimation scrollContainer={scrollContainerRef} />
          </Suspense>
        </Canvas>

        <div className="absolute top-4 right-4 z-50">
          <Book />
        </div>
      </div>
      <div className="fixed bottom-4 left-4 text-white text-sm z-50">
        Scroll to explore
      </div>
    </section>
  );
};

export default Home;
