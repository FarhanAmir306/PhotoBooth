import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { api } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const {setAuth } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    console.log("login Form click");
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
     
      if (response.status === 200) {
        const { accessToken } = response.data;
       
        if (accessToken) {
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;
          const user = response.data;
          setAuth({ user, accessToken, refreshToken });
          // console.log('user',user);
          // console.log('accessTOken',accessToken);
          // console.log('refreshtoken',refreshToken);
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with emil ${formData.email} is not found `,
      });
    }
  };



  return (
    <>
      <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
        <form onSubmit={handleSubmit(submitForm)}>
          {/* <!-- Username/Email Field --> */}
          <div className="mb-3">
            <div className="relative">
              <Field error={errors.email}>
                <input
                  {...register("email", { required: "email is required" })}
                  type="email"
                  name="email"
                  id="email"
                  className={`form-input ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Phone number, username, or email"
                  aria-label="Phone number, username, or email"
                />
              </Field>
            </div>
          </div>

          {/* <!-- Password Field --> */}
          <div className="mb-3">
            <div className="relative">
              <Field>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Your password must be 6 characters",
                    },
                  })}
                  type="password"
                  name="password"
                  className={`form-input ${
                    errors.password ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Password"
                  aria-label="Password"
                />
              </Field>
              <button
                type="button"
                className="absolute  inset-y-1 pt-5 right-0 flex items-center px-3 text-gray-500 text-xs"
              >
                Show
              </button>
            </div>
          </div>

          {/* <!-- Login Button --> */}
          <div className="mb-4">
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>

          {/* <!-- OR Separator --> */}
          <div className="or-separator">OR</div>

          <div className="mb-4">
            <button type="submit" className="login-button">
              Log in with Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
