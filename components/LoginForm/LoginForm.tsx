import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-transparent flex flex-col justify-between transition-all md:bg-[#000000cb] w-[100%] min-h-[660px] rounded md:p-14 md:w-[460px]"
    >
      <div className="space-y-7">
        <p className="text-3xl font-medium">Sign In</p>
        <div className="space-y-3">
          <input type="email" placeholder="Email" className={`login-input ${errors.email && "border-b-2 border-[#E50914]"}`} {...register('email', {required: true})} />
          <input
            type="password"
            placeholder="Password"
            className={`login-input ${errors.password && "border-b-2 border-[#E50914]"}`}
            {...register('password', {required: true})}
          />
        </div>
        <button className="w-[100%] bg-[#E50914] h-[50px] py-2 font-medium text-sm rounded">
          Sign In
        </button>
      </div>
      <p className="mb-20">
        <span className="text-[gray]">New to Netflix?</span> Sign up now.
      </p>
    </form>
  );
};

export default LoginForm;
