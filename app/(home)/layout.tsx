import Sidebar from "./SideBar/sidebar";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    );
  }