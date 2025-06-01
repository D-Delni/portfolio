import clsx from "clsx/lite";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navigation({ children }: { children: React.ReactNode; }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center gap-12">

            <AnimatePresence>
                {isOpen &&
                    <>
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(20px)", opacity: 0 }}
                            className="hidden lg:flex gap-4">
                            {children}
                        </motion.div>

                        <motion.dialog
                            open={isOpen}
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.25 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(20px)", opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden absolute z-50 w-full h-full flex flex-col gap-4 top-0 bg-zinc-900/20 backdrop-blur-md">

                            <div className="fixed bottom-20 sm:bottom-32 left-4 sm:left-8 flex flex-col items-start justify-center gap-4">
                                <MobileLink href="/blog">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                                        <title>Blog Icon</title>
                                        <path fill="currentColor" fillRule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161c-.097.023-.195.04-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clipRule="evenodd" />
                                        <path fill="currentColor" d="M16.415 17.975a4 4 0 0 1-1.068 1.677c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592c.426-.114.813-.218 1.165-.309l-.244.906l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73" opacity=".75" />
                                    </svg>
                                    Blog
                                </MobileLink>

                                <MobileLink href="/about">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                                        <title>Info Icon</title>
                                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22" />
                                    </svg>
                                    About
                                </MobileLink>

                                <MobileLink href="/contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden xmlSpace="preserve">
                                        <title>People Icon</title>
                                        <path fill="currentColor" d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M4,12.999 L12.8093956,13.000184 C11.6887317,14.1680611 11,15.7535996 11,17.5 C11,18.5873606 11.266999,19.6123603 11.7390124,20.5130144 C10.6887116,20.8629701 9.53056842,21 8.5,21 C5.77786667,21 2.16469531,20.0439506 2.00545418,16.7296461 L2,16.5 L2,14.999 C2,13.895 2.896,12.999 4,12.999 Z M17.5,14.0015812 L17.4101244,14.0096369 C17.2060313,14.0466809 17.0450996,14.2076126 17.0080557,14.4117056 L17,14.5015812 L17,16.9995812 L14.5,17 L14.4101244,17.0080557 C14.2060313,17.0450996 14.0450996,17.2060313 14.0080557,17.4101244 L14,17.5 L14.0080557,17.5898756 C14.0450996,17.7939687 14.2060313,17.9549004 14.4101244,17.9919443 L14.5,18 L17,17.9995812 L17,20.5 L17.0080557,20.5898756 C17.0450996,20.7939687 17.2060313,20.9549004 17.4101244,20.9919443 L17.5,21 L17.5898756,20.9919443 C17.7939687,20.9549004 17.9549004,20.7939687 17.9919443,20.5898756 L18,20.5 L18,17.9995812 L20.5,18 L20.5898756,17.9919443 C20.7939687,17.9549004 20.9549004,17.7939687 20.9919443,17.5898756 L21,17.5 L20.9919443,17.4101244 C20.9549004,17.2060313 20.7939687,17.0450996 20.5898756,17.0080557 L20.5,17 L18,16.9995812 L18,14.5015812 L17.9919443,14.4117056 C17.9549004,14.2076126 17.7939687,14.0466809 17.5898756,14.0096369 L17.5,14.0015812 Z M8.5,2 C10.985,2 13,4.015 13,6.5 C13,8.985 10.985,11 8.5,11 C6.015,11 4,8.985 4,6.5 C4,4.015 6.015,2 8.5,2 Z M17.5,4 C19.433,4 21,5.567 21,7.5 C21,9.433 19.433,11 17.5,11 C15.567,11 14,9.433 14,7.5 C14,5.567 15.567,4 17.5,4 Z" />

                                    </svg>
                                    Contact
                                </MobileLink>

                                <motion.button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    initial={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 25, damping: 2, mass: 0.1 }}
                                    animate={{ transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 }}
                                    exit={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
                                    className="w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                                        <title>Close Icon</title>
                                        <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5" />
                                        <path fill="currentColor" d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" />
                                    </svg>
                                    Close
                                </motion.button>
                            </div>
                        </motion.dialog>
                    </>
                }
            </AnimatePresence>

            <button type="button" onClick={() => setIsOpen(prev => !prev)} className="w-6 sm:w-8 h-fit text-white cursor-pointer hover:outline-2 focus-visible:outline-2 outline-offset-1 outline-zinc-100/20 focus-visible:outline-white rounded-lg">
                {isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                        <title>Close Menu Icon</title>
                        <path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5" />
                        <path fill="currentColor" fillRule="evenodd" d="M6.47 17.53a.75.75 0 0 1 0-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.22 2.22a.75.75 0 0 1-1.06 0m10.78-7.03a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-2.22 2.22h1.19a.75.75 0 0 1 .75.75" clipRule="evenodd" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                        <title>Open Menu Icon</title>
                        <path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".4" />
                        <path fill="currentColor" fillRule="evenodd" d="M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0" clipRule="evenodd" />
                    </svg>
                }
            </button>
        </div>
    );
}

type MobileLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

function MobileLink({ href, className, children }: MobileLinkProps) {
    return (
        <motion.a
            href={href}
            initial={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
            transition={{ type: "spring", stiffness: 25, damping: 2, mass: 0.1 }}
            animate={{ transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 }}
            exit={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
            className={clsx("w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer", className)}>
            {children}
        </motion.a>
    );
}