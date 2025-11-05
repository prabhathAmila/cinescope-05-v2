
import Link from "next/link";
import MainNav from "@/components/main-nav";

export default function MoviesPage() {

  return (
    <div className="man-h-screen flex flex-col">
      <MainNav />
      <main className="flex flex-col justify-center items-center gap=4 flex-12  text-4xl py-16">
        This is my Movie page content
        <Link href="/" className="tinline-block text-white text-sm bg-black p-4 rounded-full mt-4">Go to Home Page</Link>
        </main>
    </div>
  );
}