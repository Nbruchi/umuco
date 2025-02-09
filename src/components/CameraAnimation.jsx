import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const CameraAnimation = ({ scrollContainer }) => {
    const { camera } = useThree();
    const cameraRef = useRef(camera);

    useEffect(() => {
        if (!scrollContainer?.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scrollContainer.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    if (self.progress > 0.98) {
                        setTimeout(() => {
                            window.location.href = "http://10.12.73.109:7860/";
                        }, 500);
                    }
                },
            },
        });

        tl.to(cameraRef.current.position, {
            z: -100,
            duration: 5,
        })
            .to(cameraRef.current.rotation, {
                y: Math.PI,
                duration: 5,
            })
            .to(cameraRef.current.position, {
                z: 300,
                duration: 10,
            });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [scrollContainer]);

    return null;
};

export default CameraAnimation;
