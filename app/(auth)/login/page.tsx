/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import LoginForm from '@/components/login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

const LoginComponent: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='w-full max-w-md'>
        <Card title='Login'>
          <div className='mb-4'>
            <LoginForm />
          </div>
          <p className='mt-4 text-center'>
            Don't have an account?{' '}
            <Link className='text-blue-500' href='/register'>
              Signup
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;
