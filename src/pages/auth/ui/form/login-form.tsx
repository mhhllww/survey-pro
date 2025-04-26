import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import './login-form.scss'

import {
  loginUser,
  loginWithGoogle,
  registerUser,
} from '@/api/auth/firebase-auth.ts';


import {
  UiForm,
  UiFormField,
  UiFormItem,
  UiFormLabel,
  UiFormControl,
  UiFormMessage,
} from '@/shared/ui/form/form';

import { UiInput } from '@/shared/ui/input/input';
import { UiButton } from '@/shared/ui/button/button';


const formSchema = z.object({
  email: z.string()
    .min(1, { message: "Поле обязательно для заполнения" })
    .email({ message: `Адрес электронной почты должен содержать символ "@".` }),
  password: z.string()
    .min(6, { message: "Пароль должен содержать минимум 6 символов" })
});

type LoginFormProps = {
  action: 'login' | 'register';
};

export function LoginForm({action}: LoginFormProps) {
  const location = useLocation();
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });


  const {
    handleSubmit,
    setValue,
    control,
  } = methods;

  const params = new URLSearchParams(location.search);
  const redirectedEmail = params.get('email');

  useEffect(() => {
    if (redirectedEmail) {
      setValue('email', redirectedEmail);
    }
  }, [redirectedEmail, setValue]);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      if (action === 'login') {
        await loginUser(data.email, data.password);
        window.location.href = '/';
        console.log('successful authorization');
      } else {
        await registerUser(data.email, data.password);
        window.location.href = '/';
        console.log('successful registration');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login-form'>
      <div className='login-form__logo'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='login-form__logo-svg'>
          <path d='M7 2h10'></path>
          <path d='M5 6h14'></path>
          <rect width='18' height='12' x='3' y='10' rx='2'></rect>
        </svg>
        <p className='login-form__logo-p'>Acme Inc.</p>
      </div>
      <div className='login-form-card'>
        <div className='login-form-card__header'>
          <p className='login-form-card__title'>Welcome back</p>
          <p className='login-form-card__subtitle'>
            Login with your Apple or Google account
          </p>
        </div>

        <div className='login-form-card__oauth'>
          <UiButton
            style={{ border: '1px solid rgba(211, 211, 207, 0.59)' }}
            design={'outline'}
            size={'md'}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path
                d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'
                fill='currentColor'
              />
            </svg>
            <p style={{ fontSize: '0.875rem' }}>Login With Apple</p>
          </UiButton>
          <UiButton
            style={{ border: '1px solid rgba(211, 211, 207, 0.59)' }}
            onClick={loginWithGoogle}
            design='outline'
            size='md'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path
                d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
                fill='currentColor'
              />
            </svg>
            <p style={{ fontSize: '0.875rem' }}>Login With Google</p>
          </UiButton>
        </div>

        <div className='login-form-card__divider'>
          <hr className='login-form-card__divider-hr' />
          <p className='login-form-card__subtitle'>Or continue with</p>
          <hr className='login-form-card__divider-hr' />
        </div>

        <UiForm {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='login-form-card__form'>
            <UiFormField
              control={control}
              name='email'
              render={({ field }) => (
                <UiFormItem>
                  <div className='login-form-card__form-label'>
                    <UiFormLabel style={{ fontSize: '14px' }}>
                      Email
                    </UiFormLabel>
                  </div>
                  <UiFormControl>
                    <UiInput
                      style={{ border: '1px solid rgba(211, 211, 207, 0.59)' }}
                      placeholder='m@example.com'
                      {...field}
                    />
                  </UiFormControl>
                  <div style={{ minHeight: '1.5rem' }}>
                    <UiFormMessage style={{ fontSize: '12px' }} />
                  </div>
                </UiFormItem>
              )}
            />

            <UiFormField
              control={control}
              name='password'
              render={({ field }) => (
                <UiFormItem>
                  <div className='login-form-card__form-label'>
                    <UiFormLabel style={{ fontSize: '14px' }}>
                      Password
                    </UiFormLabel>
                    <Link to='/' className='login-form-card__form-link'>
                      Forgot your password?
                    </Link>
                  </div>
                  <UiFormControl>
                    <UiInput
                      style={{ border: '1px solid rgba(211, 211, 207, 0.59)' }}
                      type='password'
                      {...field}
                    />
                  </UiFormControl>
                  <div style={{ minHeight: '1.5rem' }}>
                    <UiFormMessage style={{ fontSize: '12px' }} />
                  </div>
                </UiFormItem>
              )}
            />

            <UiButton
              type='submit'
              design='foreground'
              size='md'
              style={{ fontSize: '14px' }}>
              {action === 'login' ? 'Login' : 'Sign Up'}
            </UiButton>

            <div className='login-form-card__footer'>
              {action === 'login' ? (
                <p style={{ fontSize: '0.875rem' }}>Don't have an account?</p>
              ) : (
                <p style={{ fontSize: '0.875rem' }}>
                  Do you already have an Account?
                </p>
              )}
              {action === 'login' ? (
                <Link
                  to={'/register'}
                  style={{
                    fontSize: '0.875rem',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}>
                  Sign Up
                </Link>
              ) : (
                <Link
                  to={'/login'}
                  style={{
                    fontSize: '0.875rem',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}>
                  Log in
                </Link>
              )}
            </div>
          </form>
        </UiForm>
      </div>

      <div className='login-form__footer'>
        <p>
          By clicking continue, you agree to our <br />
          <span className={'login-form__footer-span'}>
            Terms of Service
          </span>{' '}
          and <span className={'login-form__footer-span'}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}