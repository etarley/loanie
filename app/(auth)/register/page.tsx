'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import SignupForm from '@/components/signup-form';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

const SignupComponent: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <Card>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <SignupForm />
          <p className='mt-4 text-center'>
            Already have an account?{' '}
            <Link className='text-blue-500' href='/login'>
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignupComponent;
