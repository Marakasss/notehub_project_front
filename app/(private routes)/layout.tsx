import Header from "@/components/Header/Header";
import css from "./notes/filter/NotesLayout.module.css";

interface NotesLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const PrivateRoutesLayout = ({ children, sidebar }: NotesLayoutProps) => {
  return (
    <>
      {" "}
      <Header />
      <section className={css.container}>
        <aside className="border-r border-cyan-900 w-12 sm:min-w-64 p-2 ">
          {sidebar}
        </aside>
        <div className="p-1 w-full sm:p-2 ">{children}</div>
      </section>
    </>
  );
};
export default PrivateRoutesLayout;
