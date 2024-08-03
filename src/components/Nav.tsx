import { Menu, Search } from "lucide-react";
import { Button } from "@components/ui/button";
import logo from "@assets/Logo.svg";
import { Input } from "@components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
function Nav() {
  return (
    <header className="sticky top-0 flex flex-row-reverse md:flex-row h-16 items-center gap-4 border-b px-3 md:px-9">
      <nav className="hidden flex-col gap-6 text-2xl font-medium md:flex md:flex-row md:items-center md:gap-10 md:text-lg lg:gap-10 ">
        <img src={logo} className="h-40 w-40" />
        <a
          href="#"
          className="text-foreground transition-colors hover:text-foreground "
        >
          Home
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Services
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Vision
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground w-20"
        >
          Contact us
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-4 text-lg font-medium">
            <img src={logo} className="h-32 w-32" />
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              About Us
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Vision
            </a>
            <a href="#" className="hover:text-foreground">
              Contact us
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <img src={logo} className="h-32 w-32 md:hidden block" />
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
      </div>
    </header>
  );
}

export default Nav;
