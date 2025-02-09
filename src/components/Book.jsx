import { useRef, useEffect } from "react";
import gsap from "gsap";

const Book = () => {
    const bookRef = useRef(null);
    const overlayRef = useRef(null);

    const handleBookClick = () => {
        console.log("Book clicked!");

        if (!bookRef.current) {
            console.error("Book ref is not attached");
            return;
        }

        // Book expansion animation
        gsap.to(bookRef.current, {
            duration: 1.5,
            scale: 50,
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            transformOrigin: "top right", // Scale from top-right corner
            ease: "power2.inOut",
            onStart: () => console.log("Animation started"),
            onComplete: () => console.log("Animation completed"),
        });

        // Overlay fade in
        if (overlayRef.current) {
            gsap.to(overlayRef.current, {
                duration: 1.5,
                opacity: 1,
                visibility: "visible",
                ease: "power2.inOut",
            });
        } else {
            console.error("Overlay ref is not attached");
        }

        // Navigation after animation
        setTimeout(() => {
            window.location.href = "http://10.12.73.109:7860/";
        }, 2000);
    };

    useEffect(() => {
        // Hover shake animation
        const book = bookRef.current;

        if (!book) {
            console.error("Book ref not attached in useEffect");
            return;
        }

        const hoverAnimation = gsap.timeline({
            paused: true,
            repeat: -1,
            yoyo: true,
        });

        hoverAnimation
            .to(book, {
                rotation: 5,
                duration: 0.1,
            })
            .to(book, {
                rotation: -5,
                duration: 0.1,
            });

        book.addEventListener("mouseenter", () => hoverAnimation.play());
        book.addEventListener("mouseleave", () =>
            hoverAnimation.pause().progress(0)
        );

        return () => {
            book.removeEventListener("mouseenter", () => hoverAnimation.play());
            book.removeEventListener("mouseleave", () =>
                hoverAnimation.pause().progress(0)
            );
        };
    }, []);

    return (
        <>
            <div
                ref={bookRef}
                className="cursor-pointer w-32 h-28 bg-amber-900 rounded-lg shadow-lg p-2 hover:scale-105 transition-transform flex items-center justify-center"
                onClick={handleBookClick}
            >
                <p className="text-sm font-bold text-white animate-bounce">
                    Gacurabwenge
                </p>
            </div>

            <div
                ref={overlayRef}
                className="fixed inset-0 bg-amber-900 z-50 flex items-center justify-center opacity-0"
                style={{ visibility: "hidden" }}
            >
                <div className="text-white text-4xl font-bold">
                    Gacurabwenge...
                </div>
            </div>
        </>
    );
};

export default Book;
