interface DashboardContentProps {
    currentPage: string;
}
const DashboardContent = ({ currentPage }: DashboardContentProps) => {
    const renderContent = () => {
        switch (currentPage) {
            default:
                return (
                    <div className="space-6">
                        This id dashboard content
                    </div>
                )
            }
    }
    return (
<div className="p-6 animate-fade-in">
{renderContent()}
</div>
    )
}

export default DashboardContent;