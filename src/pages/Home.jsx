import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Book from "../components/Book";
import Palace from "../models/Palace";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// CameraAnimation component
const CameraAnimation = () => {
    const { camera } = useThree(); // Use useThree inside the Canvas
    const cameraRef = useRef(camera);

    useEffect(() => {
        // Create a GSAP animation for the camera
        gsap.to(cameraRef.current.position, {
            z: -500, // Move the camera forward into the palace
            scrollTrigger: {
                trigger: "#scroll-container", // The scrollable container
                start: "top top", // Start animation when the top of the trigger hits the top of the viewport
                end: "bottom bottom", // End animation when the bottom of the trigger hits the bottom of the viewport
                scrub: true, // Smoothly animate based on scroll position
                markers: true, // Add markers for debugging (remove in production)
            },
            onUpdate: () => {
                console.log("Camera Position:", cameraRef.current.position);
            },
        });
    }, []);

    return null; // This component doesn't render anything
};

const Home = () => {
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
        <div className="w-full h-full relative overflow-y-scroll overflow-x-hidden">
            {/* Sticky 3D Canvas */}
            <div className="h-screen w-full" id="scroll-container">
                <Canvas
                    camera={{
                        near: 1,
                        far: 1000,
                        position: [0, 0, 50], // Set initial camera position
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
                        <CameraAnimation />{" "}
                        {/* Add the CameraAnimation component here */}
                    </Suspense>
                </Canvas>

                {/* Reintegrate Book component */}
                <div className="absolute top-4 right-4 z-50">
                    <Book />
                </div>
            </div>

            {/* Scrollable content */}
            <div className="h-screen bg-gray-100">Section 1</div>
            <div className="h-screen bg-gray-200">Section 2</div>
           
        </div>
    );
};

export default Home;
