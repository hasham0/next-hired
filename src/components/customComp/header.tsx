"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { PenBox } from "lucide-react";
type Props = {};

const Header: FC<Props> = ({}) => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  const handleOverlayClick = () => {};

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
        <div className="flex gap-8">
          <SignedOut>
            <Button
              variant={"outline"}
              onClick={() => setShowSignIn((pre) => !pre)}
            >
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Link href={"/post-job"}>
              <Button variant={"destructive"} className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a Job
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            // path="/sign-in"
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
//SZYVSI4whL4ramt9
