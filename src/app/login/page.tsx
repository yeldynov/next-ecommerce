"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const wixClient = useWixClient();
  const router = useRouter();

  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    router.push("/");
  }

  const [mode, setMode] = useState(MODE.LOGIN);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
        ? "Register"
        : MODE.RESET_PASSWORD
          ? "Reset Your Password"
          : "Verify Your Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
        ? "Register"
        : MODE.RESET_PASSWORD
          ? "Reset"
          : "Verify";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    let response;

    try {
      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email,
            password,
          });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: username },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href,
          );
          setMessage("Password reset email sent. Please check your e-mail.");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;

        default:
          break;
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage(
            "Successfully logged in, you are being redirected to main page.",
          );
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken!,
          );

          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break;

        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response.errorCode === "resetPassword") {
            setError("You need to reset your password");
          } else {
            setError("Something went wrong.");
          }
          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
          break;
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");

        default:
          break;
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              className="rounded-md p-4 ring-2 ring-gray-300"
              name="username"
              placeholder="Johnny"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="rounded-md p-4 ring-2 ring-gray-300"
              name="email"
              placeholder="johnny@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              className="rounded-md p-4 ring-2 ring-gray-300"
              name="emailCode"
              placeholder="Code"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password </label>
            <input
              type="password"
              className="rounded-md p-4 ring-2 ring-gray-300"
              name="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="cursor-pointer text-sm underline underline-offset-4"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        <button
          disabled={isLoading}
          className="rounded-md bg-softRed p-2 text-white disabled:cursor-not-allowed disabled:bg-pink-200"
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="cursor-pointer text-sm underline underline-offset-4"
            onClick={() => setMode(MODE.REGISTER)}
          >
            Do not have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="cursor-pointer text-sm underline underline-offset-4"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Already Have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="cursor-pointer text-sm underline underline-offset-4"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {message && <div className="text-sm text-green-600">{message}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
