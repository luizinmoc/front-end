import { Outlet } from "react-router";
import TopBar from "../components/Header/top-bar";

export default function Layout() {
    return (
        <main className="h-screen w-screen flex overflow-hidden antialiased text-gray-800 bg-base-100 relative print:overflow-visible   ">
            <TopBar />
            
			<div className="mt-24 bg-gray-100 w-full h-full p-2 pb-[4.5rem] dark:bg-slate-950 dark:text-slate-200 print:m-0 print:p-0 overflow-auto">
				<Outlet />
			</div>
            
        </main>
    );
}
