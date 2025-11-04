import { useState } from 'react';
import SettingsHeader from '@/components/Settings/SettingsHeader';
import SettingsNavigation from '@/components/Settings/SettingsNavigation';
import SettingsGeneral from '@/components/Settings/SettingsGeneral';
import SettingsAdvanced from '@/components/Settings/SettingsAdvanced';
import SettingsAppearance from '@/components/Settings/SettingsAppearance';
import SettingsAudit from '@/components/Settings/SettingsAudit';
import SettingsBilling from '@/components/Settings/SettingsBilling';
import SettingsIntegrations from '@/components/Settings/SettingsIntegrations';
import SettingsNotifications from '@/components/Settings/SettingsNotifications';
import SettingsPerformance from '@/components/Settings/SettingsPerformance';
import SettingsPermissions from '@/components/Settings/SettingsPermissions';
import SettingsSecurity from '@/components/Settings/SettingsSecurity';
const Settings = () => {
    const [activeSection, setActiveSection] = useState<string>('general');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'general':
                return <SettingsGeneral />;
            case 'advanced':
                return <SettingsAdvanced />;
            case 'appearance':
                return <SettingsAppearance />;
            case 'audit-log':
                return <SettingsAudit />;
            case 'billing':
                return <SettingsBilling />;
            case 'integrations':
                return <SettingsIntegrations />;
            case 'notifications':
                return <SettingsNotifications />;
            case 'performance':
                return <SettingsPerformance />;
            case 'permissions':
                return <SettingsPermissions />;
            case 'security':
                return <SettingsSecurity />;
        }
    };
    return (
        <div className="space-y-6 p-4 md:p-6 overflow-hidden max-w-full">
            <SettingsHeader />
            <div className="flex flex-col lg:flex-row gap-6 min-h-0">
                <div className="lg:w-64 flex-shrink-0">
                    <SettingsNavigation
                        activeSection={activeSection}
                        onSectionChange={setActiveSection}
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="bg-card rounded-lg border hover:border-primary/30 duration-300 p-6 min-h-[600px]">
                        {renderActiveSection()}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Settings;
