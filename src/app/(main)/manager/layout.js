import ManagerNav from "@/components/ManagerNav"
import InitialFetch from "@/components/initialFetch";
export const metadata = {
    title: "Employee management",
    description: "This is the landing page for the employee management system",
};

export default function managerHome({ children }) {
    return (
        <main className="flex h-full">
            <InitialFetch />
            <ManagerNav />
            {children}
        </main>
    )
}
