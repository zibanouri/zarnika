import { Button } from "./ui/button";
import {Menu} from "lucide-react"
const DashboardHeader = () =>{
    return(
       <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-pink-100 border-b border-pink-600 hover:border-pink-400 duration-300">
            <div className="flex items-center justify-between h-full px-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5"/>
                    </Button>
                </div>
                </div>
        </header>
    )
}

export default DashboardHeader;