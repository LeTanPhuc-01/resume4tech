// components/landing/NavBar.tsx
import { useLocation } from "react-router"; // React Router
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon, TwitterLogoIcon } from "./Icons";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    { href: "#hurdle", label: "The Hurdle" },
    { href: "#howItWorks", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const isDashboard = location.pathname.startsWith("/dashboard");
    const isAbout = location.pathname.startsWith("/about");
    const isHome = location.pathname === "/";

    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <div className="container mx-auto">
                <div className="flex h-14 items-center justify-between px-4">

                    {/* Logo */}
                    <div className="flex items-center">
                        <a
                            rel="noreferrer noopener"
                            href="/"
                            className="font-bold text-xl flex items-center gap-2"
                        >
                            <LogoIcon />
                            Resume4Tech
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {isHome &&
                            routeList.map((route: RouteProps, i) => (
                                <a
                                    rel="noreferrer noopener"
                                    href={route.href}
                                    key={i}
                                    className={`text-[17px] ${buttonVariants({
                                        variant: "ghost",
                                    })}`}
                                >
                                    {route.label}
                                </a>
                            ))}
                    </nav>

                    {/* Desktop Right Side */}
                    <div className="hidden md:flex items-center gap-2">
                        {!isDashboard ? (
                            <a
                                rel="noreferrer noopener"
                                href="https://x.com/Resume4Tech"
                                target="_blank"
                                className={`border ${buttonVariants({ variant: "secondary" })}`}
                            >
                                <TwitterLogoIcon />
                                Stay in the loop
                            </a>
                        ) : (
                            <div className="text-sm text-muted-foreground">👤 User Info</div>
                        )}
                        <ModeToggle />
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center gap-2">
                        <ModeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu className="h-5 w-5">
                                    <span className="sr-only">Menu Icon</span>
                                </Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">Resume4Tech</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {isHome &&
                                        routeList.map(({ href, label }: RouteProps) => (
                                            <a
                                                rel="noreferrer noopener"
                                                key={label}
                                                href={href}
                                                onClick={() => setIsOpen(false)}
                                                className={buttonVariants({ variant: "ghost" })}
                                            >
                                                {label}
                                            </a>
                                        ))}

                                    {!isDashboard ? (
                                        <a
                                            rel="noreferrer noopener"
                                            href="https://x.com/Resume4Tech"
                                            target="_blank"
                                            className={`w-[110px] border ${buttonVariants({
                                                variant: "secondary",
                                            })}`}
                                        >
                                            <TwitterLogoIcon />
                                            Twitter
                                        </a>
                                    ) : (
                                        <div className="text-sm mt-4 text-muted-foreground">👤 User Info</div>
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};
