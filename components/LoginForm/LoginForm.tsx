import { useForm, SubmitHandler } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/usersReducer";
import { useState } from "react";

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IFormValues>();

  const passwordErrorMessage =
    "Your password must contain between 6 and 60 characters.";

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (isLogin) {
      signIn(data.email, data.password);
    } else {
      signUp(data.email, data.password);
    }
  };

  const signUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onRegister = () => {
    setLogin(false);
  } 

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-transparent flex flex-col justify-between transition-all md:bg-[#000000cb] w-[100%] min-h-[660px] rounded md:p-14 md:w-[460px]"
    >
      <div className="space-y-7">
        <p className="text-3xl font-medium">Sign In</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className={`login-input ${
              errors.email && "border-b-2 border-[#E50914]"
            }`}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p>
              <p className="p-1 text-[13px] -mt-2 font-light  text-[#E50914]">
                Please enter a valid email.
              </p>
            </p>
          )}
          <input
            type="password"
            placeholder="Password"
            className={`login-input ${
              errors.password && "border-b-2 border-[#E50914]"
            }`}
            {...register("password", {
              required: true,
              minLength: { value: 6, message: passwordErrorMessage },
              maxLength: { value: 60, message: passwordErrorMessage },
            })}
          />
          {errors.password && (
            <p>
              <p className="p-1 text-[13px] -mt-2 font-light  text-[#E50914]">
                {errors.password.message}
              </p>
            </p>
          )}
        </div>
        <button type="submit" className="w-[100%] bg-[#E50914] h-[50px] py-2 font-medium text-sm rounded">
          Sign In
        </button>
      </div>
      <p className="mb-20 md:mb-10">
        <span className="text-[gray]">New to Netflix?</span>{" "}
        <button type="submit" onClick={onRegister}>Sign up now</button>.
      </p>
    </form>
  );
};

export default LoginForm;
