import { LogoIcon } from "./Icons";

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
                <div className="col-span-full">
                    <a
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        <LogoIcon />
                        Resume4Tech
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow US</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/LeTanPhuc-01/resume4tech"
                            className="opacity-60 hover:opacity-100"
                        >
                            Github
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://x.com/Resume4Tech"
                            className="opacity-60 hover:opacity-100"
                        >
                            Twitter
                        </a>
                    </div>

                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="/about"
                            className="opacity-60 hover:opacity-100"
                        >
                            About Me
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#FAQ"
                            className="opacity-60 hover:opacity-100"
                        >
                            FAQ
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Community</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Discord
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Twitch
                        </a>
                    </div>
                </div>
            </section>
            <p className="text-center my-3">© 2025 Resume4Tech. All rights reserved</p>

        </footer>
    );
};