import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "🛠 What is Resume4Tech?",
        answer:
            "Resume4Tech is a resume optimization tool designed to help college students and recent grads in tech fields land internships and entry-level positions. We provide clear, tailored feedback—just like a hiring manager would—so your resume stands out.",
        value: "item-1",
    },
    {
        question: "🤖 Can you help improve my ATS compatibility?",
        answer:
            "Absolutely. Resume4Tech is built with Applicant Tracking Systems (ATS) in mind. We evaluate your formatting, keyword usage, and section structure to ensure your resume is machine-readable—so your skills don't get lost in the shuffle.",
        value: "item-2",
    },
    {
        question: "💻 Is this only for Computer Science majors?",
        answer:
            "Not at all. Resume4Tech supports a range of tech-related majors—Computer Science, Data Science, Cybersecurity, and more. If you're pursuing a tech career, we’ll help your resume follow industry standards that recruiters expect.",
        value: "item-3",
    },
    {
        question: "🔐 Is my resume data stored or shared?",
        answer:
            "Your privacy is a top priority. Personally identifiable information is automatically redacted before analysis, and we never store, sell, or share your resume data. Period.",
        value: "item-4",
    },
    {
        question: "⏳ Can I use Resume4Tech now?",
        answer:
            "Resume4Tech is currently in development. You can join our waitlist, and we'll notify you as soon as it's ready for public access.",
        value: "item-5",
    },      
];

export const FAQ = () => {
    return (
        <section
            id="faq"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Questions
                </span>
            </h2>

            <Accordion
                type="single"
                collapsible
                className="w-full AccordionRoot"
            >
                {FAQList.map(({ question, answer, value }: FAQProps) => (
                    <AccordionItem
                        key={value}
                        value={value}
                    >
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <h3 className="font-medium mt-4">
                Still have questions?{" "}
                <a
                    rel="noreferrer noopener"
                    href="#"
                    className="text-primary transition-all border-primary hover:border-b-2"
                >
                    Contact us
                </a>
            </h3>
        </section>
    );
};