import Link from "next/link";

export default function Custom401() {
  return (
    <main className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <div className="flex w-[90vh] h-[70vh] bg-white shadow-2xl items-center justify-center p-10 ">
        <p className="font-bold text-2xl items-center justify-center text-center text-gray-600">
          You Are Anuthorized...Please click{" "}
          <span className="text-black">
            <Link href={"/"}>here</Link>
          </span>{" "}
          to log in or sign up
        </p>
      </div>
    </main>
  );
}
