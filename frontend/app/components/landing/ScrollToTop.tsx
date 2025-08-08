import { Button } from "../ui/button";
import { ChevronsUp } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
        });
    };

    return (
        <>
            {showTopBtn && (
                <Button
                    onClick={goToTop}
                    className="fixed bottom-4 right-4 opacity-80 shadow-md"
                    size="icon"
                >
                    <ChevronsUp className="size-5 animate-bounce" />
                </Button>
            )}
        </>
    );
};
