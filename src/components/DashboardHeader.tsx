import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
    Menu,
    Moon,
    Bell,
    Settings,
    User,
    LogOut,
    LogIn,
    UserPlus,
    Github,
    Search,
    Sun,
    ChevronDown,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

const mockNotifications = [
    {
        id: 1,
        title: 'New User Registered',
        time: '2 min ago',
        unread: true,
    },
    { id: 2, title: 'Payment Received', time: '10 min ago', unread: true },
    {
        id: 3,
        title: 'Server Maintenance Scheduled',
        time: '1 hour ago',
        unread: false,
    },
];
interface DashboardHeaderProps {
    onToggleSidebar: () => void;
    sidebarCollapsed: boolean;
}
const DashboardHeader = ({
    onToggleSidebar,
    sidebarCollapsed,
}: DashboardHeaderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-background hover:border-amber-200 duration-300">
            <div className="flex items-center justify-between h-full px-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden rounded-full"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    <button
                        onClick={onToggleSidebar}
                        className={cn(
                            'hidden md:flex h-8 w-8 rounded-lg border-2 transition-all duration-300 items-center justify-center',
                            'hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20',
                            'group active:scale-95 relative cursor-pointer',
                            sidebarCollapsed
                                ? 'border-border/50 bg-background/50'
                                : 'border-primary/20 bg-primary/5'
                        )}
                    >
                        <div
                            className={cn(
                                'flex items-center justify-center transition-all duration-300',
                                'group-hover:rotate-13 group-active:rotate-45'
                            )}
                        >
                            {' '}
                            {sidebarCollapsed ? (
                                <ChevronDown
                                    className={cn(
                                        'h-4 w-4 -rotate-90 transition-all duration-300',
                                        'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                                    )}
                                />
                            ) : (
                                <ChevronDown
                                    className={cn(
                                        'h-4 w-4 rotate-90 transition-all duration-300',
                                        'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                                    )}
                                />
                            )}
                        </div>
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-300 rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">
                                C
                            </span>
                        </div>
                        <span className="font-bold text-lg hidden sm:block">
                            zarnika
                        </span>
                    </div>
                </div>
                <div className="hidden md:flex flex-1 max-w-md">
                    <form className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search Anything"
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-foreground"
                        />
                    </form>
                </div>
                {/* Right Section */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="relative rounded-full"
                            >
                                <Bell className="h-5 w-5" />
                                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-white bg-red-400 flex items-center justify-center">
                                    3
                                </Badge>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-0">
                            <div className="p-4 border-b">
                                <h3 className="font-semibold">Notifications</h3>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {mockNotifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className="p-3 border-b hover:bg-muted/50"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-green-500' : 'bg-slate-300'}`}
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">
                                                    {notification.title}
                                                </p>
                                                <p className="text-xs font-medium text-muted-foreground">
                                                    {notification.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full"
                                >
                                    View All Notifications
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Button variant="ghost" size="sm" className="rounded-full">
                        <Settings className="h-5 w-5" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="relative"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src="/zarnika/avatar/image6.webp"
                                        alt="profile"
                                    />
                                    <AvatarFallback>ZN</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56" align="end">
                            <DropdownMenuItem>
                                <User className="h-4 w-4 mr-2" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="h-4 w-4 mr-2" />
                                Settings
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <a href="/zarnika/register">
                                    <UserPlus className="h-4 w-4 mr-2" />
                                    Register
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="/zarnika/login">
                                    <LogIn className="h-4 w-4 mr-2" />
                                    Login
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <a
                                    href="https://github.com/zibanouri"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    Repository
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
