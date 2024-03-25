import { UserProfile } from '@clerk/nextjs'
export default function AccountPage() {
	return (
		<div className='pt-8 px-8 flex flex-col items-center justify-center'>
			<h1 className='text-6xl font-semibold pb-4'>Account</h1>
			<UserProfile />
		</div>
	)
}
