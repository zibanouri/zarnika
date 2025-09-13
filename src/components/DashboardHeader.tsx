import { Button } from "./ui/button";
import {  Menu, Moon, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
                {/* Right Section */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                        <Moon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="relative">
                        <Bell className="h-5 w-5" />
                         <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 bg-red-400 flex items-center justify-center">
                            28
                        </Badge>
                    </Button>
                    </div>
            </div>
        </header>
    )
}

export default DashboardHeader;