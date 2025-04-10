import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="max-w-[98%]">
      <Navbar />
      <div>{children}</div>
    </main>
  );
}