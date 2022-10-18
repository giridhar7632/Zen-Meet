import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import Meta from '../../layout/Meta'

const login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div
      className={
        "grid h-screen w-screen place-items-center bg-sky-100 bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat"
      }
    >
      <Meta name={'Sign In'} />
      <div
        className={`w-96 max-w-xl rounded-xl border p-12 text-base`}
        style={{
          background: `rgba(255, 255, 255, 0.25)`,
          backdropFilter: `blur(24px)`,
        }}
      >
        <h1 className="mb-6 mt-3 text-center text-3xl font-semibold lg:text-left">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="email"
              className={`form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 ${
                errors?.email ? 'border-red-500' : 'border-gray-300'
              } m-0 rounded-md transition ease-in-out focus:border-sky-600 focus:bg-white focus:text-gray-700 focus:outline-none`}
              placeholder="Email address"
              name="email"
              {...register('email', {
                required: `Email is required!`,
              })}
              autoComplete="current-email"
            />
            {errors?.email?.message && (
              <p className="text-light text-[10px] text-red-500">{errors?.email?.message}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="password"
              className={`form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 ${
                errors?.password ? 'border-red-500' : 'border-gray-300'
              } m-0 rounded-md transition ease-in-out focus:border-sky-600 focus:bg-white focus:text-gray-700 focus:outline-none`}
              placeholder="Password"
              name={'password'}
              {...register('password', {
                required: `Password is required!`,
              })}
              autoComplete="off"
            />
            {errors?.password?.message && (
              <p className="text-light text-[10px] text-red-500">{errors?.password?.message}</p>
            )}
          </div>

          <div className="mb-6">
            <a
              href={`/password-reset${getValues('email') ? '?email=' + getValues(email) : ''}`}
              className="text-sm text-gray-800"
            >
              Forgot password?
            </a>
          </div>

          <div className="text-center lg:text-left">
            <Button type="submit"> Sign In</Button>
            <p className="mt-2 mb-0 pt-1 text-sm">
              Don't have an account?
              <a
                href="/signup"
                className="ml-1 font-medium text-sky-600 transition duration-200 ease-in-out hover:text-sky-700 focus:text-sky-700"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login
