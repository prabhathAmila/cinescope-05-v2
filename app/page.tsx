import Link from "next/link";
import Image from "next/image";
import MainNav from "@/components/main-nav";

// RSC - React Server Component
// SSR - Server Side Rendering - Enabled by default in Next.js 13 app directory

export default function HomePage() {
  return (
    <div className="man-h-screen flex flex-col ">
      <MainNav />
      <main className="flex flex-col justify-center items-center gap=4 flex-12  text-4xl py-16">
        This is my Home page content
        <Link href="/movies" className="inline-block text-white text-sm bg-black p-4 rounded-full mt-4">Go to Movies Page</Link>

        <Image
          src="/assets/cinescope-logo.jpg"
          alt="Cinescope Logo"
          width={200}
          height={200}
          className="mt-8"
        />
      </main>
    </div>
  );
}
