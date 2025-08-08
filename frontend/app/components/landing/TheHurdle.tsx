export const TheHurdle = () => {
    return (
        <section
            id="hurdle"
            className="container py-24 sm:py-32"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    The {" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Hurdle
                    </span>

                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    The market for junior developers is more competitive than ever. Landing that first role isn't just about having the right skills; it's about proving them on a single sheet of paper.
                </p>
            </div>

            <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-destructive/5 rounded-2xl"></div>

                <div className="relative bg-muted/30 border border-destructive/20 rounded-2xl p-8 md:p-12">
                    <div className="space-y-8">
                        {/* Challenge 1 */}
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-destructive">Failing the Robot Test</h3>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-destructive">75%</span> of resumes are rejected by ATS systems due to formatting errors or missing keywords. Your skills become irrelevant if a machine can't read them.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-destructive/10"></div>

                        {/* Challenge 2 */}
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-destructive">The "Experience" Paradox</h3>
                                <p className="text-muted-foreground">
                                    How do you show professional value without professional experience? Most struggle to translate their projects into the language of professional achievement.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-destructive/10"></div>

                        {/* Challenge 3 */}
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-destructive">Drowning in a Sea of Sameness</h3>
                                <p className="text-muted-foreground">
                                    Hundreds of identical resumes: same skills list (React, Node.js, Python), same "ToDo List" project. A generic resume gets lost in the pile.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-destructive/10"></div>

                        {/* Challenge 4 */}
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-destructive">Missing the Metrics that Matter</h3>
                                <p className="text-muted-foreground">
                                    <span className="line-through text-muted-foreground/70">"Developed a feature"</span> is a generic task. <span className="font-medium text-foreground">"Reduced load time by 40%"</span> is an achievement. Most don't know how to measure results.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-destructive/10"></div>

                        {/* Challenge 5 */}
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                5
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-destructive">The Confidence Gap</h3>
                                <p className="text-muted-foreground">
                                    Conflicting advice from blogs, forums, and mentors creates paralysis. <em>"Is this format okay? Is my project good enough?"</em> Uncertainty leads to resumes that lack conviction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to action at bottom */}
                    <div className="mt-12 pt-8 border-t border-destructive/20 text-center">
                        <p className="text-lg font-medium text-foreground mb-2">
                            Sound familiar?
                        </p>
                        <p className="text-muted-foreground">
                            You're not alone. These are the exact challenges Resume4Tech was built to solve.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
