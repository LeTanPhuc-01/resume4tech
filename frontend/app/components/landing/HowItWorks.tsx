import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { AIIcon, BullseyesIcon, MagnifyingGlassIcon, PrivacyIcon, } from "./Icons";
import type { JSX } from "react";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <MagnifyingGlassIcon />,
        title: "Deep-Scan",
        description:
            "We examine every keyword, section, and formatting choice—pinpointing what recruiters notice first and what might be holding you back.",
    },
    {
        icon: <AIIcon />,
        title: "Custom Model",
        description:
            "Not your average parser. Our proprietary AI is fine-tuned on thousands of tech resumes to give feedback that helps you stand out.",
    },
    {
        icon: <PrivacyIcon />,
        title: "Privacy",
        description:
            "Your data is safe with us. We follow the strictest U.S. security and privacy practices. No third-party sharing. Ever.",
    },
    {
        icon: <BullseyesIcon />,
        title: "ATS-Friendly",
        description:
            "Built with Applicant Tracking Systems in mind. We scan your resume against real ATS criteria to boost your chances of getting past the filter.",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                How It{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Works{" "}
                </span>
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Simple. Accurate. Secure. Straightforward
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/60"
                    >
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};