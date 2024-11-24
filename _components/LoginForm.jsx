"use client";
import Link from "next/link";

import { Button } from "@/_components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/Card";
import { Input } from "@/_components/ui/Input";
import { Label } from "@/_components/ui/Label";
import { signInWithGoogleOAuth, signUpNewUser, signInUser } from "@/_lib/actions";

import { useState } from "react";

export function LoginForm() {
  const [signUpOrSignIn, setSignUpOrSignIn] = useState("SignIn");

  const handleGoogleLogin = async () => {
    await signInWithGoogleOAuth();
  };

  if (signUpOrSignIn === "SignIn") {
    return (
      <Card className="mx-auto w-[23rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your email below to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" action={signInUser}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={handleGoogleLogin}
              >
                Sign in with Google
              </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <button
              onClick={() => setSignUpOrSignIn("SignUp")}
              className="underline"
            >
              Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (signUpOrSignIn === "SignUp") {
    return (
      <Card className="mx-auto w-[23rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            Enter your email and set a password to sign up
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" action={signUpNewUser}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={handleGoogleLogin}
            >
              Sign up with Google
            </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <button
              onClick={() => setSignUpOrSignIn("SignIn")}
              className="underline"
            >
              Sign in
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }
}
