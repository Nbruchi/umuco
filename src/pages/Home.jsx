import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Book from "../components/Book";
import { OrbitControls } from "@react-three/drei";
import Museum from "../models/Museum";

const Home = () => {
    const adjustModelSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = 0.2;
            screenPosition = [0, -2, 0];
        } else {
            screenScale = 0.3;
            screenPosition = [45, -2, -80];
        }

        return [screenScale, screenPosition];
    };

    const [modelScale, modelPosition] = adjustModelSize();

    return (
        <div className="h-[300vh] w-full relative">
            <div className="sticky top-0 h-full w-full">
                <Canvas
                    className="w-full h-full bg-transparent"
                    camera={{
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 0],
                    }}
                >
                    <Suspense fallback={<Loader />}>
                        <hemisphereLight
                            skyColor="#b1e1ff"
                            groundColor="#000"
                            intensity={1}
                        />
                        <Museum scale={modelScale} position={modelPosition} />
                        <Sky />
                        <OrbitControls enableZoom enablePan />
                    </Suspense>
                </Canvas>

                {/* Reintegrate Book component */}
                <div className="absolute top-4 right-4 z-50">
                    <Book />
                </div>
            </div>
        </div>
    );
};

export default Home;
