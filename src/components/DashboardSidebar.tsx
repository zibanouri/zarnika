import { Button } from './ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    CreditCard,
    Bell,
    Database,
    Shield,
    TicketIcon,
    User,
    Settings,
    BarChart3,
    ChevronDown,
    BarChart2,
    Activity,
    HelpCircle,
    MessagesSquare,
} from 'lucide-react';

const DashboardSidebar = () => {
    const menuItem = [
        {
            id: 'dashboard',
            label: 'dashboard',
            icon: LayoutDashboard,
            href: '/',
        },
        { id: 'users', label: 'Users', icon: Users, href: '/users' },
        { id: 'orders', label: 'Orders', icon: ShoppingCart, href: '/orders' },
        {
            id: 'payments',
            label: 'Payments',
            icon: CreditCard,
            href: '/payments',
        },
        {
            id: 'notifications',
            label: 'Notifications',
            icon: Bell,
            href: '/notifications',
        },
        {
            id: 'database',
            label: 'Database',
            icon: Database,
            href: '/database',
        },
        { id: 'security', label: 'Security', icon: Shield, href: '/security' },
        { id: 'tickets', label: 'Tickets', icon: TicketIcon, href: '/tickets' },
        { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
        {
            id: 'settings',
            label: 'Settings',
            icon: Settings,
            href: '/settings',
        },
    ];
    const analyticsItems = [
        {
            id: 'analytics-overview',
            label: 'Overview',
            icon: BarChart2,
            href: '/analytics/overview',
        },
        {
            id: 'analytics-realtime',
            label: 'Real-Time',
            icon: Activity,
            href: '/analytics/realtime',
        },
    ];
    return (
        <aside className="fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background border-r border-pink-100 hover:border-pink-200 duration-300 overflow-hidden w-64">
            <div className="flex flex-col h-full">
                <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
                    {menuItem.map((item) => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            className="w-full justify-start gap-3 h-10"
                        >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            <span className="truncate">{item.label}</span>
                        </Button>
                    ))}

                    {/* Analytics */}
                    <div className="relative">
                        <Collapsible>
                            <CollapsibleTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start gap-3 h-10"
                                >
                                    <BarChart3 className="h-5 w-5 flex-shrink-0" />
                                    <span className="truncate flex-1 text-left">
                                        Analitics
                                    </span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="overflow-hidden">
                                <div className="space-y-1 mt-1">
                                    {analyticsItems.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant="ghost"
                                            className="w-full justify-start gap-3 h-9 ml-6"
                                        >
                                            <item.icon className="h-4 w-4 flex-shrink-0" />
                                            <span className="truncate text-sm">
                                                {item.label}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </nav>
                {/* help */}
                <div className="border-t p-3">
                    <div className="space-y-1">
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-9"
                        >
                            <HelpCircle className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm">HelpCenter</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-9"
                        >
                            <MessagesSquare className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm">Suport</span>
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
