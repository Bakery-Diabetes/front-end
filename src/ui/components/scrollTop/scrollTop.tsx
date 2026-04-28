"use client";

import { Button } from "@/ui/design-system/button/button";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { BsArrowUp } from "react-icons/bs";

export const ScrollTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);

    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"})
    }

    return (
        <div className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[999] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

            <Button
                onClick={scrollToTop}
                variant="ico"
                iconTheme="primary"
                aria-label="Revenir en haut"
            >
                <BsArrowUp />
            </Button>
        </div>
    )

}