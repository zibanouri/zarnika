import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
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
    MessageSquare,
} from 'lucide-react';

interface DashboardSidebarProps {
    sidebarCollapsed: boolean;
    onPageChange: (page: string) => void;
    currentPage: string;
}

export const DashboardSidebar = ({
    sidebarCollapsed,
    onPageChange,
    currentPage,
}: DashboardSidebarProps) => {
    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: LayoutDashboard
        },
        {
            id: 'users',
            label: 'Users',
            icon: Users
        },
        {
            id: 'orders',
            label: 'Orders',
            icon: ShoppingCart
        },
        {
            id: 'payments',
            label: 'Payments',
            icon: CreditCard
        },
        {
            id: 'notifications',
            label: 'Notifications',
            icon: Bell
        },
        {
            id: 'database',
            label: 'Database',
            icon: Database
        },
        {
            id: 'security',
            label: 'Security',
            icon: Shield
        },
        {
            id: 'tickets',
            label: 'Tickets',
            icon: TicketIcon
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: User
        },
        {
            id: 'settings',

            label: 'Settings',
            icon: Settings
        },
    ];

    const analyticsItems = [
        { id: 'analytics-overview', label: 'Overview', icon: BarChart2 },
        { id: 'analytics-realtime', label: 'Real-Time', icon: Activity },
    ];

    const supportItems = [
        { id: 'help', label: 'Help Center', icon: HelpCircle },
        { id: 'support', label: 'Support', icon: MessageSquare },
    ];

    return (
        <aside
            className={cn(
                'fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] transition-all duration-300 overflow-hidden',
                'bg-background border-r border-border md:translate-x-0',
                sidebarCollapsed
                    ? '-translate-x-full md:w-16'
                    : 'translate-x-0 w-64'
            )}
        >
            <div className="flex flex-col h-full">
                <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Button
                                key={item.id}
                                variant={
                                    currentPage === item.id
                                        ? 'secondary'
                                        : 'ghost'
                                }
                                className="w-full justify-start gap-3 h-10 cursor-pointer"
                                onClick={() => onPageChange(item.id)}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" />
                                {!sidebarCollapsed && (
                                    <span className="truncate">
                                        {item.label}
                                    </span>
                                )}
                            </Button>
                        );
                    })}

                    {/* Analytics */}
                    <Collapsible defaultOpen>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-3 h-10 cursor-pointer"
                            >
                                <BarChart3 className="h-5 w-5 flex-shrink-0" />
                                {!sidebarCollapsed && (
                                    <>
                                        <span className="truncate flex-1 text-left">
                                            Analytics
                                        </span>
                                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                    </>
                                )}
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-hidden">
                            <div className="space-y-1 mt-1">
                                {analyticsItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Button
                                            key={item.id}
                                            variant={
                                                currentPage === item.id
                                                    ? 'secondary'
                                                    : 'ghost'
                                            }
                                            className="w-full justify-start gap-3 h-9 ml-6 cursor-pointer"
                                            onClick={() =>
                                                onPageChange(item.id)
                                            }
                                        >
                                            <Icon className="h-4 w-4 flex-shrink-0" />
                                            {!sidebarCollapsed && (
                                                <span className="truncate text-sm">
                                                    {item.label}
                                                </span>
                                            )}
                                        </Button>
                                    );
                                })}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </nav>

                {/* Help & Support */}
                <div className="border-t p-3">
                    <div className="space-y-1">
                        {supportItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Button
                                    key={item.id}
                                    variant={
                                        currentPage === item.id
                                            ? 'secondary'
                                            : 'ghost'
                                    }
                                    className="w-full justify-start gap-3 h-9 cursor-pointer"
                                    onClick={() => onPageChange(item.id)}
                                >
                                    <Icon className="h-4 w-4 flex-shrink-0" />
                                    {!sidebarCollapsed && (
                                        <span className="text-sm">
                                            {item.label}
                                        </span>
                                    )}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
