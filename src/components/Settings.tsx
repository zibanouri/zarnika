import { useState } from 'react';
import SettingsHeader from '@/components/Settings/SettingsHeader';
import SettingsNavigation from '@/components/Settings/SettingsNavigation';
import SettingsGeneral from '@/components/Settings/SettingsGeneral';
import SettingsAdvanced from '@/components/Settings/SettingsAdvanced';
import SettingsAppearance from '@/components/Settings/SettingsAppearance';
import SettingsAudit from '@/components/Settings/SettingsAudit';
import SettingsBilling from '@/components/Settings/SettingsBilling';
import SettingsIntegrations from '@/components/Settings/SettingsIntegrations';

const Settings = () => {
    const [activeSection, setActiveSection] = useState<string>('general');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'general':
                return <SettingsGeneral />;
            case 'advanced':
                return <SettingsAdvanced />;
                 case 'appereance':
                return <SettingsAppearance />;
                 case 'audit':
                return <SettingsAudit />;
                  case 'billing':
                return <SettingsBilling />;
                  case 'integrations':
                return <SettingsIntegrations />;
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
