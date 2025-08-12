// import { Form } from "react-router";
import { useState, type FormEvent, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from "react-confetti";
import { Button } from "../ui/button";
import { Input } from "../ui/input";



export const EmailForm = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const formRef = useRef<HTMLFormElement>(null);

    // Ensure component only renders on client-side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
    const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const recaptchaResponse = recaptchaRef.current?.getValue();
        if (!recaptchaResponse) {
            setError("Please complete the reCAPTCHA.");
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({ email, recaptchaResponse }),
            });
            const result = await response.json();
            if (result.success) {
                setShowConfetti(true);
                formRef.current?.reset();
                // Hide confetti after 5 seconds
                setTimeout(() => setShowConfetti(false), 5000);
            } else {
                setError(result.error || "Unknown error occured.");
            }
        } catch (e) {
            setError("CAPTCHA error. Please try again later.")
        } finally {
            setIsSubmitting(false);
            recaptchaRef.current?.reset();
        }
    };

    // Don't render on server-side to avoid SSR issues with ReCAPTCHA and Confetti
    if (!isMounted) {
        return (
            <section id="emailform" className="sm:mt-48">
                <hr className="w-11/12 mx-auto" />
                <div className="container py-24 sm:py-32">
                    <h3 className="text-center text-4xl md:text-5xl font-bold">
                        Join Our{" "}
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Waitlist
                        </span>{" "}
                        Now
                    </h3>
                    <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                        Enter your email for early access, totally safe. Trust me bro.
                    </p>
                    <div className="text-center">Loading...</div>
                </div>
                <hr className="w-11/12 mx-auto" />
            </section>
        );
    }

    return (
        <section id="emailform" className="sm:mt-48">
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.3}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999
                    }}
                />
            )}
            <hr className="w-11/12 mx-auto" />

            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Join Our{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Waitlist
                    </span>{" "}
                    Now
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Enter your email for early access, totally safe. Trust me bro.
                </p>

                <form
                    className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="youremail@abc.com"
                        className="bg-muted/50 dark:bg-muted/80"
                        aria-label="Email address"
                        required
                        name="email"
                        type="email"
                        id="email"
                        autoComplete="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                    />
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                    />
                    <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Subscribe"}
                    </Button>
                </form>
                {error && (
                    <p className="text-center mt-4" style={{ color: "red" }}>
                        {error}
                    </p>
                )}
            </div>

            <hr className="w-11/12 mx-auto" />
        </section>
    );
};