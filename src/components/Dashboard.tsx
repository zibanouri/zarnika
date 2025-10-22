import { useState } from 'react';
import Footer from './Footer';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import { cn } from '@/lib/utils';
// import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    // const currentPage = 'dashboard';
    // const [currentPage, setCurrentPage] = useState("dashboard");
    // const navigate = useNavigate();

    // const handlePageChange = (page: string) => {
    //     setCurrentPage(page);
    //     switch (page) {
    //         case "dashboard":
    //         default:
    //             navigate("/");
    //             break
    //     }
    // }
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true);

    const handleToggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

    return (
        <div className="min-h-screen flex flex-col">
            <DashboardHeader
                onToggleSidebar={handleToggleSidebar}
                sidebarCollapsed={sidebarCollapsed}
            />

            <div className="flex flex-1">
                <DashboardSidebar sidebarCollapsed={sidebarCollapsed} />

                <main
                    className={cn(
                        'flex-1 transition-all duration-300 pt-16 pb-6 overflow-y-auto',
                        sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
                    )}
                >
                    <DashboardContent currentPage="dashboard" />
                </main>
            </div>

            <Footer sidebarCollapsed={sidebarCollapsed} />
        </div>
    );
};

export default Dashboard;
