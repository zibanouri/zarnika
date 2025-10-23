import { cn } from '@/lib/utils';

interface FooterProps {
    sidebarCollapsed: boolean;
}

const Footer = ({ sidebarCollapsed }: FooterProps) => {
    return (
        <footer
            className={cn(
                'bg-background border-t py-4 transition-all duration-300',
                sidebarCollapsed ? 'md:pl-16' : 'md:pl-64',
                'pl-4' 
            )}
        >
            <div className="max-w-7xl mx-auto px-2 md:px-4">
                <div className="text-center text-sm">
                    Zarnika© 2025 Ziba Nouri. All Rights Reserved. Made with love ✨
                    <a
                        className="pl-1 text-amber-950 hover:text-amber-700 duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/zibanouri"
                    >
                       by Ziba
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
