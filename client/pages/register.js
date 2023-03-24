import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Link from '@/components/common/Link'
import { useAuth } from '@/context/useAuth'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { isAuth, isLoading, register: registerUser } = useAuth()
  const router = useRouter()
  // redirect user after global state update
  useEffect(() => {
    if (!isLoading && isAuth) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, isLoading])

  const onFormSubmit = handleSubmit(async (data) => {
    await registerUser(data)
    reset()
  })

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <form className="my-6 w-96 max-w-xl rounded-xl border bg-white p-12 text-base shadow-sm">
        <h1 className="mb-6 w-max text-clip text-2xl font-bold">Register</h1>
        {/* {status ? (
            <div className="mb-2 rounded-sm bg-red-50 p-2 text-center ring-2 ring-red-200">
              {status}
            </div>
          ) : null} */}
        <Input
          label={'Username'}
          type="text"
          name="name"
          placeholder={`Your unique identifier`}
          aria-label="user-name"
          register={register('name', {
            required: `Username is required!`,
          })}
          error={errors?.name}
        />
        <Input
          label={'Email'}
          name={'email'}
          type="email"
          required
          placeholder="your@email.com"
          aria-label="user-email"
          autoComplete="current-email"
          register={register('email', {
            required: `Email is required!`,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid email address!',
            },
          })}
          error={errors?.email}
        />
        <Input
          label={'Password'}
          type="password"
          name="password"
          placeholder={`Your Super secret ✨`}
          aria-label="user-password"
          register={register('password', {
            required: `Password is required!`,
          })}
          error={errors?.password}
        />
        <Button
          className={'mt-4'}
          isLoading={isLoading}
          loadingText={'Registering...'}
          onClick={onFormSubmit}
        >
          Register
        </Button>
      </form>
      <p className="mb-6">
        {'Already have an account?'} <Link href={'login'}>Login</Link>
      </p>
    </div>
  )
}

export default Register
