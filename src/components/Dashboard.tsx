import { useState } from 'react';
import Footer from './Footer';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import { cn } from '@/lib/utils';

const Dashboard = () => {
    const currentPage = 'Dashboard';
// import { useNavigate } from 'react-router-dom';

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


    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

    const handleToggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="h-screen overflow-hidden bg-background">
            <DashboardHeader
                onToggleSidebar={handleToggleSidebar}
                sidebarCollapsed={sidebarCollapsed}
            />

            <div className="flex h-full pt-16">
                <DashboardSidebar sidebarCollapsed={sidebarCollapsed} />
                <main
                    className={cn(
                        'flex flex-col flex-1 overflow-y-auto transition-all duration-300',
                        sidebarCollapsed ? 'md:pl-16' : 'md:pl-64',
                        'pl-0'
                    )}
                >
                    <div className="flex-1 px-4 md:px-6 pb-8">
                        <DashboardContent currentPage={currentPage} />
                    </div>
                    <Footer sidebarCollapsed={sidebarCollapsed} />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
