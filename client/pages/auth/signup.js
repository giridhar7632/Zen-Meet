import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import Meta from '../../layout/Meta'

const signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
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
      <Meta name={'Sign Up'} />
      <div
        className={`w-96 max-w-xl rounded-xl border p-12 text-base`}
        style={{
          background: `rgba(255, 255, 255, 0.25)`,
          backdropFilter: `blur(24px)`,
        }}
      >
        <h1 className="mb-6 mt-3 text-center text-3xl font-medium lg:text-left">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 ${
                errors?.name ? 'border-red-500' : 'border-gray-300'
              } m-0 rounded-md transition ease-in-out focus:border-sky-600 focus:bg-white focus:text-gray-700 focus:outline-none`}
              placeholder="Nick Name"
              name={'name'}
              {...register('name', {
                required: `Nick name is required!`,
                minLength: {
                  value: 3,
                  message: 'Your name should be atleast 3 characters',
                },
              })}
            />
            {errors?.name?.message && (
              <p className="text-light text-[10px] text-red-500">{errors?.name?.message}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className={`form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 ${
                errors?.email ? 'border-red-500' : 'border-gray-300'
              } m-0 rounded-md transition ease-in-out focus:border-sky-600 focus:bg-white focus:text-gray-700 focus:outline-none`}
              placeholder="Email address"
              autoComplete="current-email"
              {...register('email', {
                required: `Email is required!`,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Invalid email address!',
                },
              })}
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
              autoComplete="off"
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
            />
            {errors?.password?.message && (
              <p className="text-light text-[10px] text-red-500">{errors?.password?.message}</p>
            )}
          </div>

          <div className="text-center lg:text-left">
            <Button type="submit" loadingText={'Signing up'}>
              {' '}
              Sign Up
            </Button>
            <p className="mt-2 mb-0 pt-1 text-sm">
              Already have an account?
              <a
                href="/signin"
                className="ml-1 font-medium text-sky-600 transition duration-200 ease-in-out hover:text-sky-700 focus:text-sky-700"
              >
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signup
