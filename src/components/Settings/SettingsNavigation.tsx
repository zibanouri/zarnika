import { cn } from '@/lib/utils';
import {
    Settings,
    Users,
    Plug,
    Bell,
    Shield,
    Palette,
    CreditCard,
    Gauge,
    Cog,
    FileText,
} from 'lucide-react';

const settingsSections = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'permissions', label: 'User & Permissions', icon: Users },
    { id: 'integrations', label: 'Integrations', icon: Plug },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'performance', label: 'Performance', icon: Gauge },
    { id: 'advanced', label: 'Advanced', icon: Cog },
    { id: 'audit-log', label: 'Audit Log', icon: FileText },
];

interface SettingsNavigationProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const SettingsNavigation = ({
    activeSection,
    onSectionChange,
}: SettingsNavigationProps) => {
    return (
        <nav className="space-y-1">
            {settingsSections.map((section) => {
                const IconComponent = section.icon;
                return (
                    <button
                        key={section.id}
                        onClick={() => onSectionChange(section.id)}
                        className={cn(
                            'w-full flex items-center gap-3 px-3 py-2 text-sm text-left font-medium rounded-md',
                            activeSection === section.id
                                ? 'bg-primary text-primary-foreground'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        )}
                    >
                        <IconComponent className="h-4 w-4" />
                        {section.label}
                    </button>
                );
            })}
        </nav>
    );
};

export default SettingsNavigation;
