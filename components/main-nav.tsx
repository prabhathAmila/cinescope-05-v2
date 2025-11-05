import Logo from "./logo";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function MainNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b">
      <div className="container mx-w-[87.5rem] px-8 mx-auto flex h-16 items-center">
        
        <Link href="/" className="flex items-center gap-2">
          <Logo className = "h-30 w-30"/>
        </Link>

        <nav className="ml-auto flex items-center gap-4">
          <Link href="/movies">Movies</Link>
          <Link href="/movies">Genres</Link>
          <Link href="/movies">About</Link>
          <Link href="/movies">Admin</Link>
          <ModeToggle />
        </nav>
        
      </div>
    </header>
  );
}