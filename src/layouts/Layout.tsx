import { Outlet } from "react-router";
import TopBar from "../components/Header/top-bar";

type LayoutProps = {
    className?:{
        section?:string,
        div?:string,
    }
};

export default function Layout({className}:LayoutProps) {
    return (
        <main className="h-screen w-screen flex overflow-hidden antialiased text-gray-800 bg-base-100 relative print:overflow-visible   ">
            <TopBar />

            <div className={`${className?.div} bg-gray-100 w-full h-full p-2 pb-[4.5rem] dark:bg-slate-950 dark:text-slate-200 print:m-0 print:p-0 overflow-auto`}>
                <section className={`${className?.section} mx-auto pt-36 h-full flex justify-center`}>
                    <div className="flex flex-col items-center gap-5 w-full">
                        
                		<Outlet />	
                    </div>
                </section>
            </div>
        </main>
    );
}
