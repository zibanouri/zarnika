import { useState } from 'react';
import Footer from './Footer';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
// import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const currentPage = 'dashboard';
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

    const handleToggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="min-h-screen">
            <DashboardHeader
                onToggleSidebar={handleToggleSidebar}
                sidebarCollapsed={sidebarCollapsed}
            />

            <div className="flex">
                <DashboardSidebar sidebarCollapsed={sidebarCollapsed} />

                <main className="flex-1 transition-all duration-300 ml-64 pt-16 min-h-screen flex flex-col overflow-x-hidden">
                    <div className="flex-1 mb-13">
                        <DashboardContent currentPage={currentPage} />
                    </div>
                    <Footer sidebarCollapsed={sidebarCollapsed} />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
