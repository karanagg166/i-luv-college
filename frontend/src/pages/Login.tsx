import LoginForm from "@/components/LoginandSignup/LoginForm";
import { AuthHero } from "@/constants/images";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="relative   flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-primary-content lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />

        <div className="relative z-20 mt-auto">
          <h1 className="text-2xl font-bold mb-4">
            Share The Worst About Your College!
          </h1>
          <p className="mb-4">
            Create an account to unlock the full experience. By joining, you
            can:
          </p>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Post Anonymously:</span> Share
              your college frustrations and experiences without revealing your
              identity.
            </li>
            <li>
              <span className="font-semibold">Engage with Others:</span> Connect
              with fellow students and comment on their stories.
            </li>
            <li>
              <span className="font-semibold">Get Real-Time Feedback:</span> See
              how others react to your posts.
            </li>
          </ul>
          <p className="mt-6">
            Join our community today—your anonymous voice can make a difference!
          </p>
        </div>
      </div>
      <div className="flex min-h-screen pt-20 items-center bg-base-100 p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center  space-y-6 sm:w-[350px]">
          <img src={AuthHero} className="w-72 mx-auto" />

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to your account
            </h1>
          </div>
          <LoginForm />
          <div className="flex px-8 w-full text-center text-sm text-muted-foreground space-x-2 ">
            <p>Don't have an account ?</p>
            <Link to={"/auth/signup"}>
              <p className=" font-semibold">Sign Up</p>
            </Link>
          </div>
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>
            and
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </div>
    </div>
  );
}
