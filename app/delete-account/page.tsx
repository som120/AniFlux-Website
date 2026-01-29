import React from "react";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Delete Account",
    description: "Learn how to delete your AniFlux account and understand what data will be removed.",
};

export default function DeleteAccount() {
    return (
        <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                    Delete Account
                </h1>

                <p className="text-lg text-neutral-400 mb-12">
                    This page applies to the mobile application <span className="text-white font-semibold">&quot;AniFlux&quot;</span> developed by <span className="text-white font-semibold">Som</span>.
                </p>

                <div className="space-y-10 text-neutral-300 leading-relaxed">
                    {/* How to Delete Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-600/10 rounded-full text-red-400">
                                {/* Trash/Delete Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 6h18" />
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
                            </span>
                            How to Delete Your Account
                        </h2>
                        <div className="pl-14 space-y-4">
                            <p className="text-neutral-400 mb-4">
                                Follow these simple steps to delete your AniFlux account:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-bold text-sm">
                                        1
                                    </span>
                                    <p>Open the <span className="text-white font-medium">AniFlux app</span> and log in to your account.</p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-bold text-sm">
                                        2
                                    </span>
                                    <p>Navigate to <span className="text-white font-medium">Profile</span> → <span className="text-white font-medium">Account Settings</span> → <span className="text-white font-medium">Delete Account</span>.</p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-bold text-sm">
                                        3
                                    </span>
                                    <p>Confirm the deletion by following the on-screen prompts.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What Data is Deleted Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-600/10 rounded-full text-red-400">
                                {/* Database Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                </svg>
                            </span>
                            What Data is Deleted
                        </h2>
                        <div className="pl-14 space-y-4">
                            <p className="text-neutral-400 mb-4">
                                When you delete your account, the following data will be permanently removed:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                    <span>User account information (email / user ID)</span>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                    <span>Saved anime lists and watch progress</span>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                    <span>App preferences and settings</span>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                    <span>Any user-generated content associated with the account</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Retention Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-600/10 rounded-full text-red-400">
                                {/* Clock Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </span>
                            Data Retention
                        </h2>
                        <div className="pl-14">
                            <div className="p-5 bg-gradient-to-r from-red-950/30 to-orange-950/30 rounded-xl border border-red-900/30">
                                <p className="text-neutral-200">
                                    All personal data is <span className="text-red-400 font-semibold">permanently deleted immediately</span> after confirmation. No personal data is retained after account deletion.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Need Help Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-600/10 rounded-full text-red-400">
                                {/* Help/Question Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                            </span>
                            Need Help?
                        </h2>
                        <div className="pl-14">
                            <p className="text-neutral-400">
                                If you encounter any issues while deleting your account or have questions, please contact us at{" "}
                                <a href="mailto:aniflux.dev@gmail.com" className="text-red-400 hover:text-red-300 hover:underline transition-colors">
                                    aniflux.dev@gmail.com
                                </a>
                                . You can also reach out via our{" "}
                                <a href="https://github.com/som120/AniFlux" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline transition-colors">
                                    GitHub repository
                                </a>
                                .
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
