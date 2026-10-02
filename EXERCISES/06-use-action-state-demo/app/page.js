// import Image from "next/image";

import FetchUsers from "./_components/FetchUsers";
import Greeter from "./_components/Greeter";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold m-10 text-center">
        useActionState Demo
      </h1>
      <section>
        <Greeter></Greeter>
      </section>
      <section>
        <FetchUsers></FetchUsers>
      </section>
    </>
  );
}
