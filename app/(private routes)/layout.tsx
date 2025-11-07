import Header from "@/components/Header/Header";

interface NotesLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const PrivateRoutesLayout = ({ children, sidebar }: NotesLayoutProps) => {
  return (
    <>
      {" "}
      <Header />
      <section className="flex ">
        <aside className="border-r border-cyan-900 w-14 md:min-w-64 p-3 flex flex-col align-middle gap-6 h-[calc(100vh-74px)] sm:h-[calc(100vh-81px)]  ">
          {sidebar}
        </aside>
        <div className="p-1 w-full sm:p-2 h-[calc(100vh-74px)] sm:h-[calc(100vh-81px)] flex flex-col ">
          {children}
        </div>
      </section>
    </>
  );
};
export default PrivateRoutesLayout;
