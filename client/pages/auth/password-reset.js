import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import Meta from '../../components/layout/Meta'

const PasswordReset = () => {
  const { query: queryParams } = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: queryParams?.email || '',
      password: '',
    },
  })
  useEffect(() => {
    if (queryParams?.email) {
      setValue('email', queryParams.email)
    }
  }, [queryParams])

  const onSubmit = (data) => console.log(data)

  return (
    <div
      className={
        "grid h-screen w-screen place-items-center bg-sky-100 bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat"
      }
    >
      <Meta name={'Password Reset'} />
      <div
        className={`w-96 max-w-xl rounded-xl border p-12 text-base`}
        style={{
          background: `rgba(255, 255, 255, 0.25)`,
          backdropFilter: `blur(24px)`,
        }}
      >
        <div className="mb-6">
          <h1 className="mb-3 mt-3 text-center text-3xl font-medium lg:text-left">
            Password Reset
          </h1>
          {!queryParams?.email && (
            <p className="text-sm text-gray-500">
              We will send a link to reset your password to your email.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="email"
              className={`form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 ${
                errors?.email ? 'border-red-500' : 'border-gray-300'
              } m-0 rounded-md transition ease-in-out focus:border-sky-600 focus:bg-white focus:text-gray-700 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400`}
              placeholder="Email address"
              name="email"
              {...register('email', {
                required: `Email is required!`,
              })}
              autoComplete="current-email"
              disabled={queryParams?.email}
            />
            {errors?.email?.message && (
              <p className="text-light text-[10px] text-red-500">{errors?.email?.message}</p>
            )}
          </div>
          {queryParams?.email ? (
            <div className="mb-6">
              <input
                type="password"
                className={`form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 ${
                  errors?.password ? 'border-red-500' : 'border-gray-300'
                } m-0 rounded-md transition ease-in-out focus:border-sky-600 focus:bg-white focus:text-gray-700 focus:outline-none`}
                placeholder="Password"
                name={'password'}
                {...register('password', {
                  required: `Password is required!`,
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password should be atleast 8 characters long!',
                  },
                })}
                autoComplete="off"
              />
              {errors?.password?.message && (
                <p className="text-light text-[10px] text-red-500">{errors?.password?.message}</p>
              )}
            </div>
          ) : null}

          <div className="text-center lg:text-left">
            <Button type="submit">{queryParams?.email ? 'Change Password' : 'Get Link'}</Button>
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

export default PasswordReset
