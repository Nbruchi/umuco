import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router-dom";

const CameraAnimation = ({ scrollContainer }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);
  const navigate = useNavigate();

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
              navigate("/about");
            }, 500);
          }
        },
      },
    });

    tl.to(cameraRef.current.position, {
      z: -100,
      duration: 0.4,
    })
      .to(cameraRef.current.rotation, {
        y: Math.PI,
        duration: 0.3,
      })
      .to(cameraRef.current.position, {
        z: 300,
        duration: 0.3,
      });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainer, navigate]);

  return null;
};

export default CameraAnimation;
