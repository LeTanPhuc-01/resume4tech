import type { Route } from "./+types/about";
import aboutpng from "/about.png"
import { Link } from "react-router"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About - Resume4Tech" },
        { name: "description", content: "About Resume4Tech - Helping junior developers land their dream jobs" },
    ];
}

export default function About() {
    return (
        <div
            id="about"
            className="container py-24 sm:py-32"
        >
            <Link to="/">Go home</Link>
            <div className="bg-muted/40 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src={aboutpng}
                        alt=""
                        className="size-auto md:w-1/3 object-contain rounded-lg"
                    />

                    <div className="pb-6 md:pt-35">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                About{" "}
                            </span>
                            Company
                        </h2>
                        <p className="text-xl text-muted-foreground mt-4">
                            Like many new grads, I kept getting ghosted by tech recruiters—turns out my resume was the problem. After months of research and testing different approaches, I built <b>Resume4Tech</b> to help fellow CompSci majors and junior developers craft resumes that actually get noticed. It's everything I learned about beating ATS systems and appealing to hiring managers, packaged into one tool.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};