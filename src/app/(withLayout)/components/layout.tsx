import ComponentsInfoHeader from "@/componentResources/ComponentsInfoHeader/ComponentsInfoHeader";
import SidebarNav from "@/componentResources/SidebarNav/SidebarNav";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="relative">
            <ComponentsInfoHeader></ComponentsInfoHeader>
            <SidebarNav></SidebarNav>
            {children}
        </div>
    );
};

export default ComponentsLayout;