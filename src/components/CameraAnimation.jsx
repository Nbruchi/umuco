import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const CameraAnimation = () => {
    const { camera } = useThree();
    const cameraRef = useRef(camera);

    useEffect(() => {
        // Log initial camera position and rotation
        console.log("Initial Camera Position:", cameraRef.current.position);
        console.log("Initial Camera Rotation:", cameraRef.current.rotation);

        // Create a GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky", // The container element to trigger the animation
                start: "top top", // Start animation when the top of the trigger hits the top of the viewport
                end: "bottom bottom", // End animation when the bottom of the trigger hits the bottom of the viewport
                scrub: true, // Smoothly animate based on scroll position
                markers: true, // Add markers for debugging (remove in production)
            },
        });

        // First animation: Move the camera forward into the palace
        tl.to(
            cameraRef.current.position,
            {
                z: -500, // Move the camera forward
                duration: 2, // Duration of the animation (in scroll distance)
                onUpdate: () => {
                    console.log(
                        "Camera Position (Forward):",
                        cameraRef.current.position
                    );
                },
            },
            0 // Start at the beginning of the timeline
        );

        // Second animation: Rotate the camera to turn around
        tl.to(
            cameraRef.current.rotation,
            {
                y: Math.PI, // Rotate 180 degrees (π radians)
                duration: 1, // Duration of the rotation
                onUpdate: () => {
                    console.log(
                        "Camera Rotation (Turnaround):",
                        cameraRef.current.rotation
                    );
                },
            },
            "+=0.5" // Add a small delay after the first animation
        );

        // Third animation: Move the camera backward to exit the palace
        tl.to(
            cameraRef.current.position,
            {
                z: 0, // Move the camera back to its original position
                duration: 2, // Duration of the animation
                onUpdate: () => {
                    console.log(
                        "Camera Position (Backward):",
                        cameraRef.current.position
                    );
                },
            },
            "+=0.5" // Add a small delay after the second animation
        );
    }, []);

    return null; // This component doesn't render anything
};

export default CameraAnimation;
