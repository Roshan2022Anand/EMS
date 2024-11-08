import CompanyDataFetch from "@/components/CompanyDataFetch";
import ManagerNav from "@/components/navbars/ManagerNav"
import InitialFetch from "@/components/InitialFetch";
export const metadata = {
    title: "Employee management",
    description: "This is the landing page for the employee management system",
};

export default function managerHome({ children }) {
    return (<>
        <CompanyDataFetch />
        <InitialFetch />
        <main className="h-full w-full flex">
            <ManagerNav />
            {children}
        </main>
    </>
    )
}
