import Link from 'next/link';

export default function Footer(){
    const linkStyle = `cursor-pointer text-[#9597a6] hover:text-white transition ease-out`;

    const footerSections = [
        {
            title: "Topics",
            links: [
                { label: "Research methods", href: "#" },
                { label: "User experience (UX)", href: "#" },
                { label: "Market research", href: "#" },
                { label: "Surveys", href: "#" },
                { label: "Product development", href: "#" }
            ]
        },
        {
            title: "Solutions",
            links: [
                { label: "Video fingerprints", href: "#" },
                { label: "Audio fingerprints (UX)", href: "#" },
                { label: "UX research platform", href: "#" },
                { label: "Channels", href: "#" },
                { label: "Sample Rates", href: "#" },
                { label: "Dimensionality reduction", href: "#" },
                { label: "Feature extraction", href: "#" }
            ]
        },
        {
            title: "Product",
            links: [
                { label: "Slack community", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Github", href: "#" }
            ]
        },
        {
            title: "Community",
            links: [
                { label: "Slack community", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Github", href: "#" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Legal", href: "#" }
            ]
        },
        {
            title: "Help",
            links: [
                { label: "Help center", href: "#" },
                { label: "Feedback", href: "#" },
                { label: "FAQs", href: "#" }
            ]
        },
        {
            title: "Help",
            links: [
                { label: "Help center", href: "#" },
                { label: "Feedback", href: "#" },
                { label: "FAQs", href: "#" }
            ]
        },
        {
            title: "Help",
            links: [
                { label: "Help center", href: "#" },
                { label: "Feedback", href: "#" },
                { label: "FAQs", href: "#" }
            ]
        },
    ];

    return (
        <footer className="w-screen bg-background flex flex-col items-center text-white">
            <div className="flex flex-row flex-wrap gap-16 my-8 lg:my-16 lg:w-full lg:max-w-4xl items-start justify-center">
                {footerSections.map((section, index) => (
                    <div key={index} className="min-w-[150px]">
                        <h4 className="text-lg font-semibold">{section.title}</h4>
                        <ul className="mt-4">
                            {section.links.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <Link href={link.href} className={linkStyle}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="lg:w-full lg:max-w-4xl text-center">
                <h2 className="text-4xl md:text-6xl xl:text-8xl 2xl:text-[9.9rem] mb-8">Media Match</h2>
                <div className="flex flex-col md:flex-row items-center justify-between text-xs md:text-sm mb-2 md:mb-4">
                    <p>© Media Match</p>
                    <div>
                        <ul className="flex gap-4">
                            <li><Link href="#" className="cursor-pointer">Terms</Link></li>
                            <li><Link href="#" className="cursor-pointer">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
