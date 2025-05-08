import Form from "../components/Form";

export default function App() {
  return (
    <>
      <main className="w-full pt-12 pr-1 pb-13 pl-1 flex items-center justify-center bg-[#234997] md:pt-22 md:pb-23">
        <Form />
      </main>
      <footer className="p-10 flex items-center justify-center bg-[#fc5e03] shadow-[-5px_-5px_10px_rgba(0,0,0,0.3)]">
        <small>Todos los derechos reservados</small>
      </footer>
    </>
  );
}
