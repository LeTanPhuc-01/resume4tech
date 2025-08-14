import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
// import { HeroCards } from "./HeroCards";
import { TwitterLogoIcon } from "./Icons";
import resume_img from "/resume_img.png";
import { SquigglyArrow } from "./Icons";
export const Hero = () => {
    //Behavior for button
    const scrollToEmailForm = () => {
        const emailForm = document.getElementById('emailform');
        if (emailForm) {
            emailForm.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 isolate">
            <div className="text-center lg:text-start space-y-6 lg:-mt-48">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#6bd992]  to-[#048230] text-transparent bg-clip-text">
                            Resume
                        </span>{" "}
                    </h1>{" "}
                    that lands offer for{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#2987eb] to-[#3516e3d3] text-transparent bg-clip-text">
                            Junior developer
                        </span>{" "}
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Stop guessing. Our engine scores your resume against real job ads and tells you how to rise to the top of the pile.
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button
                        onClick={scrollToEmailForm}
                        className="w-full md:w-1/3"
                    >
                        Get Started
                    </Button>

                    <a
                        rel="noreferrer noopener"
                        href="https://x.com/Resume4Tech"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        Official Channel
                        <TwitterLogoIcon />
                    </a>
                </div>
            </div>

            {/* Hero cards sections
            <div className="z-10">
                <HeroCards />
            </div> */}

            <div className="flex justify-center mt-8 md:mt-0">
                <div className="relative inline-block shadow-2xl shadow-black/25 dark:shadow-[0_0_50px_rgba(255,255,255,0.3)] mt-16 md:mt-8 lg:mt-0">
                    {/* Annotation with squiggly arrow - responsive positioning */}
                    <div className="absolute -top-17 right-0 z-10 sm:right-2 md:-right-2 lg:-right-4">
                        <div className="text-right mb-2">
                            <p className="text-base md:text-lg lg:text-xl text-foreground font-caveat font-medium whitespace-nowrap">
                                This is the industry standard
                            </p>
                        </div>
                        {/* Squiggly arrow SVG */}
                        <SquigglyArrow />
                    </div>

                    <img
                        src={resume_img}
                        alt="Resume preview"
                        className="w-full h-auto object-contain opacity-95 dark:opacity-85"
                    />
                </div>
            </div>
            <div className="shadow"></div>
        </section>
    );
};