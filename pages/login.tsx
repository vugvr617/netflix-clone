import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/LoginForm/LoginForm";
import { useAppSelector } from "../store/hooks";
import { selectUserLoading } from "../store/usersReducer";

const Login = () => {
  const userLoading = useAppSelector(selectUserLoading);

  if (!userLoading) {
    return (
      <div className="relative transition-all px-4 md:px-10 flex flex-col h-screen w-screen">
        <Head>
          <title>Login</title>
        </Head>
        <Image
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/93fc0101-f25b-4c76-9e88-fc098d983227/HU-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          layout="fill"
          className="absolute -z-10 hidden md:block opacity-50"
          alt="Background"
          objectFit="cover"
        />
        <div className="w-[100%] relative flex items-center h-[70px]">
          <img
            width={150}
            src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
          />
        </div>
        <div className="h-screen w-[100%] flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    );
  }
};

export default Login;
