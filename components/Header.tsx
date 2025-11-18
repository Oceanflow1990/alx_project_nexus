import HeaderMenu from "./HeaderMenu";
import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CardIcon from "./CardIcon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="border-b border-b-gray-300 py-3">
      <Container className="flex justify-between items-center gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 justify-center flex items-center gap-2.5 ">
          <MobileMenu />
          <Logo>E-commerce</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CardIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-darkColor text-white w-3.5 h-3.5 rounded-full text-sm font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="px-2 py-1 bg-green-400 hover:bg-green-600 text-white font-semibold rounded-full hoverEffect">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
