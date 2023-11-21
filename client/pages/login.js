import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Link from '@/components/common/Link'
import { useAuth } from '@/context/useAuth'
import { useRouter } from 'next/router'
import useToast from '@/context/useToast'

const Login = () => {
  const [email, setEmail] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const { isAuth, isLoading, login } = useAuth()
  useEffect(() => {
    if (!isLoading && isAuth) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, isLoading])

  useEffect(() => {
    const subscription = watch(
      (value, { name, _type }) => name === 'email' && setEmail(value.email)
    )
    return () => subscription.unsubscribe()
  }, [watch])
  const toast = useToast()
  const onFormSubmit = handleSubmit(async (data) => {
    await login(data)
    toast.open({ message: 'Login successful!', type: 'success' })
  })

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <form className="w-96 max-w-xl rounded-xl border bg-white p-12 text-base shadow-sm">
        <h1 className="mb-6 w-max text-clip text-2xl font-bold">Login</h1>
        {/* {status ? (
            <div className="mb-2 rounded-sm bg-red-50 p-2 text-center ring-2 ring-red-200">
              {status}
            </div>
          ) : null} */}
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
        <Link
          className="block w-full text-right text-xs"
          href={`/password-reset${email ? `?email=${email}` : ''}`}
        >
          Forgot Password?
        </Link>
        <Button
          className={'mt-4'}
          isLoading={isLoading}
          loadingText={'Logging in...'}
          onClick={onFormSubmit}
        >
          Login
        </Button>
      </form>
      <p className="mt-6">
        {"Don't have an account?"} <Link href={'register'}>Register now</Link>
      </p>
    </div>
  )
}

export default Login
