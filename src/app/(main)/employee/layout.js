import InitialFetch from "@/components/InitialFetch";
import EmployeeNav from "@/components/navbars/EmployeeNav";
export const metadata = {
  title: "Employee management",
  description: "This is the landing page for the employee management system",
};

export default function managerHome({ children }) {
  return (
    <main className="flex h-full">
      <InitialFetch />
      <EmployeeNav/>
      {children}
    </main>
  )
}
