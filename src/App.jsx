import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";
import Sky from "./models/Sky";
import { OrbitControls } from "@react-three/drei";
import Museum from "./models/Museum";

const Home = () => {
    const adjustModelSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = 0.2;
            screenPosition = [0, -2, 0];
        } else {
            screenScale = 0.3;
            screenPosition = [75, -10, -60];
        }

        return [screenScale, screenPosition];
    };

    const [modelScale, modelPosition] = adjustModelSize();

    return (
        <main className="h-full w-full">
            <section className="w-full h-screen relative">
                <Canvas
                    className={`w-full h-screen bg-transparent`}
                    camera={{
                        near: 0.1,
                        far: 10000,
                    }}
                >
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <hemisphereLight
                            skyColor="#b1e1ff"
                            groundColor="#000"
                            intensity={1}
                        />
                        <Museum scale={modelScale} position={modelPosition} />
                        <Sky />
                        <OrbitControls
                            enablePan={true}
                            screenSpacePanning={true}
                            panSpeed={0.5}
                            enablePanY={false} // Disable vertical panning
                            enablePanX={true} // Enable horizontal panning
                            enableZoom={true}
                            minZoom={1}
                            maxZoom={10000}
                            zoomSpeed={1.2}
                        />
                    </Suspense>
                </Canvas>
            </section>
        </main>
    );
};

export default Home;
