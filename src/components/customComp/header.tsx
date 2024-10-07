import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <nav className="flex w-full items-center justify-between py-4">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            className="h-20 w-32"
            width={100}
            height={100}
          />
        </Link>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
};

export default Header;
//SZYVSI4whL4ramt9
