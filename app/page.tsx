import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Image
        src="/orange-juice.svg"
        alt="Orange juice"
        width={180}
        height={180}
      />
      <h1 className="text-4xl font-extrabold mt-6">Ini Jus Oren</h1>
      <p className="text-orange-600 text-sm mt-5">
        &copy; {new Date().getFullYear()} Jus Oren - All rights reserved
      </p>
    </main>
  );
}
