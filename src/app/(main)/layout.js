import InitialUserDataFetching from "@/components/InitialUserDataFetching"

export const metadata = {
    title: "EMS Dashboard",
    discription: "Dashboard for the user"
}


export default function MainLayout({ children }) {
    return (
        <>
            <InitialUserDataFetching />
            {children}
        </>
    )
}