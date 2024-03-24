import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
	return (
		<div className='pt-12 px-8 flex flex-col items-center justify-center'>
			<div className='text-center'>
				<h1 className='text-6xl font-semibold'>Sign In</h1>
				<h2 className='text-lg font-semibold mt-4'>Sign in to your account</h2>
				<h2 className='text-lg font-semibold mt-2'>
					If you don&apos;t have an account, please click{' '}
					<a href='/sign-up' className='text-blue-500 underline'>
						here
					</a>{' '}
					to request an account!
				</h2>
			</div>
			<div className='mt-8'>
				<SignIn />
			</div>
		</div>
	)
}
