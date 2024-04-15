import Image from "next/image";
import FindTodo from "@/components/FindTodo";
import DummyData from "@/components/DummyData";

export default function Home() {
  return (
    <main className="">
      <header className="w-500 bg-white shadow p-5 rounded mx-auto my-5">
        <h1 className="text-center text-3xl mb-3">Todo App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis laboriosam similique ipsa laudantium repellat.</p>
        <FindTodo />
      </header>

      <section className="w-500 bg-white shadow p-5 rounded mx-auto my-5">
        <h2 className="text-2xl mb-3">JSON Request</h2>
        <DummyData/>
      </section>
    </main>
  );
}
