import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useToast } from '@/shared/ui/toast/toast';
import { z } from 'zod';
import './login-form.scss';
import { FirebaseError } from 'firebase/app';

import {
  loginUser,
  loginWithGithub,
  loginWithGoogle,
  registerUser,
} from '@/shared/api/auth/firebase-auth.ts';

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
import {
  GithubIcon,
  GoogleIcon,
  LogoIcon,
  HidePasswordIcon,
  ShowPasswordIcon,
} from '@/assets/icons/icons.tsx';
import clsx from 'clsx';
import { LoginSchema, RegisterSchema } from '@/pages/auth/model/schema.ts';

export type LoginFormProps = {
  action: 'login' | 'register';
};

export function LoginForm({ action }: LoginFormProps) {
  const navigate = useNavigate();
  const formSchema = action === 'login' ? LoginSchema : RegisterSchema;
  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormSchemaType) => {
    try {
      if (action === 'login') {
        await loginUser(data.email, data.password);
        navigate('/dashboard');
      } else {
        await registerUser(data.email, data.password);
        navigate('/dashboard');
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (action === 'register' && err.code === 'auth/email-already-in-use') {
          useToast({
            type: 'error',
            title: 'Registration Failed',
            description: 'A user with this email already exists.',
          });
        } else {
          useToast({
            type: 'error',
            title: 'Authentication Failed',
            description: 'Incorrect login or password. Try again.',
          });
        }
      }
    }
  };

  return (
    <div className='login-form'>
      <div className='login-form__logo'>
        <LogoIcon className={'login-form__logo-icon'} />
        <span className='login-form__logo-text'>Survey Pro.</span>
      </div>
      <div className='login-form-card'>
        <div className='login-form-card__header'>
          <span className='login-form-card__title'>Welcome back</span>
          <span className='login-form-card__subtitle'>
            Login with your Apple or Google account
          </span>
        </div>

        <div className='login-form-card__oauth'>
          <UiButton design={'outline'} size={'md'} onClick={loginWithGithub}>
            <GithubIcon />
            <span>Login With Github</span>
          </UiButton>
          <UiButton onClick={loginWithGoogle} design='outline' size='md'>
            <GoogleIcon />
            <span>Login With Google</span>
          </UiButton>
        </div>

        <div className='login-form-card__divider'>
          <hr className='login-form-card__divider-inside' />
          <span className='login-form-card__subtitle'>Or continue with</span>
          <hr className='login-form-card__divider-inside' />
        </div>

        <UiForm {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='login-form-card__form'>
            <UiFormField
              control={form.control}
              name='email'
              render={({ field, fieldState }) => (
                <UiFormItem>
                  <div className='login-form-card__form-label'>
                    <UiFormLabel>Email</UiFormLabel>
                  </div>
                  <UiFormControl>
                    <UiInput
                      className={clsx(
                        'login-form-card__UiInput',
                        fieldState.error && 'login-form-card__UiInput_error'
                      )}
                      placeholder='m@example.com'
                      {...field}
                    />
                  </UiFormControl>
                  <div className={'login-form-card__UiFormMessage-container'}>
                    <UiFormMessage
                      className={'login-form-card__UiFormMessage'}
                    />
                  </div>
                </UiFormItem>
              )}
            />

            <UiFormField
              control={form.control}
              name='password'
              render={({ field, fieldState }) => (
                <UiFormItem>
                  <div className='login-form-card__form-label'>
                    <UiFormLabel>Password</UiFormLabel>
                    {action === 'login' && (
                      <Link to='/' className='login-form-card__form-link'>
                        Forgot your password?
                      </Link>
                    )}
                  </div>
                  <UiFormControl>
                    <div className='login-form-card__password-container'>
                      <UiInput
                        className={clsx(
                          'login-form-card__UiInput login-form-card__UiInput_password',
                          fieldState.error && 'login-form-card__UiInput_error'
                        )}
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                      />
                      <button
                        type='button'
                        className='login-form-card__password-toggle-button'
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <ShowPasswordIcon />
                        ) : (
                          <HidePasswordIcon />
                        )}
                      </button>
                    </div>
                  </UiFormControl>
                  <div className={'login-form-card__UiFormMessage-container'}>
                    <UiFormMessage
                      className={'login-form-card__UiFormMessage'}
                    />
                  </div>
                </UiFormItem>
              )}
            />

            <UiButton type='submit' design='foreground' size='md'>
              {action === 'login' ? 'Login' : 'Sign Up'}
            </UiButton>
          </form>
        </UiForm>
        <div className='login-form-card__footer'>
          {action === 'login' ? (
            <span>Don't have an account?</span>
          ) : (
            <span>Do you already have an Account?</span>
          )}
          {action === 'login' ? (
            <Link
              to={'/register'}
              className={'login-form-card__footer-redirect'}>
              Sign Up
            </Link>
          ) : (
            <Link to={'/login'} className={'login-form-card__footer-redirect'}>
              Log in
            </Link>
          )}
        </div>
      </div>

      <div className='login-form__footer'>
        <span>By clicking continue, you agree to our</span>
        <span>
          <Link to={'/'} className={'login-form__footer-conditions'}>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to={'/'} className={'login-form__footer-conditions'}>
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </div>
  );
}
