import { useForm } from "react-hook-form";
import Field from "../common/Field";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <div className="bg-white p-6 border border-gray-300 mb-3">
        {/* <!-- Headline --> */}
        <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
          Sign up to see photos and videos from your friends.
        </h2>

        <form onSubmit={handleSubmit(submitForm)}>
          {/* <!-- Email/Phone Field --> */}
          <div className="mb-2">
            <div className="relative">
              <Field  error={errors.email}>
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

          {/* <!-- Full Name Field --> */}
          <div className="mb-2">
            <div className="relative">
              <Field  error={errors.fullName}>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  type="fullName"
                  name="fullName"
                  id="fullName"
                  className={`form-input ${
                    errors.fullName ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Full Name"
                  aria-label="Full Name"
                />
              </Field>
            </div>
          </div>

          {/* <!-- Password Field --> */}
          <div className="mb-3">
            <div className="relative">
              <Field error={errors.password}>
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
                className="absolute inset-y-0 pt-5 right-0 flex items-center px-3 text-gray-500 text-xs"
              >
                Show
              </button>
            </div>
          </div>

          {/* <!-- Confirm Password Field --> */}
          <div className="mb-3">
            <div className="relative">
              <Field error={errors.confirmPassword} >
                <input
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    minLength: {
                      value: 6,
                      message: "Your password must be 6 characters",
                    },
                  })}
                  type="confirmPassword"
                  name="confirmPassword"
                  className={`form-input ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Confirm password"
                  aria-label="Confirm password"
                />
              </Field>
              <button
                type="button"
                className="absolute inset-y-0 pt-5 right-0 flex items-center px-3 text-gray-500 text-xs"
              >
                Show
              </button>
            </div>
          </div>

          {/* <!-- Sign Up Button --> */}
          <div className="mb-2">
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
