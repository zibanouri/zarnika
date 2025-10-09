import WelcomeSection from '@/components/Dashboard/WelcomeSection';
import StatsCards from '@/components/Dashboard/StatsCards';
interface DashboardContentProps {
    currentPage: string;
}
export const DashboardContent = ({ currentPage }: DashboardContentProps) => {
    const renderContent = () => {
        switch (currentPage) {
            default:
                return (
                    <div className="space-y-6">
                        <WelcomeSection />
                        <StatsCards />
                    </div>
                );
        }
    };

    return <div className="p-6 animate-fade-in">{renderContent()}</div>;
};

export default DashboardContent;
