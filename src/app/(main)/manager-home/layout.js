import ManagerNav from "@/components/ManagerNav"

export const metadata = {
    title: "EMS Dashboard",
    discription: "Dashboard for the user"
}


export default function MainLayout({ children }) {
    return (
        <main className="flex h-full">
            <ManagerNav />
            {children}
        </main>
    )
}