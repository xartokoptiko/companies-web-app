import Link from "next/link";

export default function Custom500() {
  return (
    <main className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <div className="flex w-[90vh] h-[70vh] bg-white shadow-2xl items-center justify-center p-10 ">
        <p className="font-bold text-2xl items-center justify-center text-center text-gray-600">
          An Error Occured on the server...Please try again in a while...We are working in it ;)
        </p>
      </div>
    </main>
  );
}