import { cn } from '@/lib/utils';

interface FooterProps {
    sidebarCollapsed: boolean;
}

const Footer = ({ sidebarCollapsed }: FooterProps) => {
    return (
        <footer
            className={cn(
                'bg-background border-t px-6 py-4',
                sidebarCollapsed ? 'ml-16 md:ml-16' : 'ml-64 md:ml-64'
            )}
        >
            <div className="text-center text-sm">
                Zarnika© 2025 Ziba Nouri. All Rights Reserved. Made with love
                by ✨
                <a
                    className="pl-1 text-amber-950 hover:text-amber-700 duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/zibanouri"
                >
                    Ziba
                </a>
            </div>
        </footer>
    );
};

export default Footer;
