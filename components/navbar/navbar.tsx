'use client'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import {
	Navbar as NUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/navbar'
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/dropdown'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { ChevronDown } from 'lucide-react'
import { Image } from '@nextui-org/image'
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const router = useRouter()

	const itemClasses = {
		base: 'p-0',
		trigger: 'py-0',
		title: 'text-md text-[#EA7858] font-semibold',
		content:
			'pb-0 text-md pl-4 text-[#EA7858] font-semibold flex flex-col gap-2',
	}

	return (
		<NUINavbar
			maxWidth='full'
			className='bg-[#EA7858]'
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<Link href='/'>
				<NavbarBrand className='flex-grow-0 mr-10'>
					<Image
						src='/sandbox.png'
						radius='none'
						width={30}
						height={30}
						alt='sandbox'
					/>
					<p className='text-[#F5F5EE] ml-4 text-lg font-semibold'>_sandbox</p>
				</NavbarBrand>
			</Link>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden text-[#F5F5EE]'
			/>
			<NavbarContent className='hidden sm:flex' justify='start'>
				<NavbarItem>
					<Link href='/'>
						<p className='text-md text-[#F5F5EE] font-semibold'>Home</p>
					</Link>
				</NavbarItem>
				<Dropdown radius='sm' disableAnimation>
					<NavbarItem>
						<DropdownTrigger>
							<Button
								variant='light'
								disableRipple
								className='text-[#F5F5EE] text-md font-semibold p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent'
								endContent={<ChevronDown />}
							>
								Companies
							</Button>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu
						aria-label='Action event example'
						onAction={(key) => router.push(key.toString())}
					>
						<DropdownItem key='/forum'>Startup Directory</DropdownItem>
						<DropdownItem key='/tarpits'>Founder Directory </DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown radius='sm' disableAnimation>
					<NavbarItem>
						<DropdownTrigger>
							<Button
								variant='light'
								disableRipple
								className='text-[#F5F5EE] text-md font-semibold p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent'
								endContent={<ChevronDown />}
							>
								Resources
							</Button>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu
						aria-label='Action event example'
						onAction={(key) => router.push(key.toString())}
					>
						<DropdownItem key='/forum'>Startup Directory</DropdownItem>
						<DropdownItem key='/tarpits'>Founder Directory </DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavbarItem>
					<Link href='/forum'>
						<p className='text-[#F5F5EE] text-md font-semibold'>Forum</p>
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end' className='hidden sm:flex'>
				<SignedIn>
					<Dropdown radius='sm'>
						<DropdownTrigger>
							<Button
								disableRipple
								radius='sm'
								size='sm'
								className=' bg-[#EA7858] text-[#F5F5EE] text-md font-semibold'
							>
								Account
							</Button>
						</DropdownTrigger>
						<DropdownMenu
							aria-label='Action event example'
							onAction={(key) => router.push(key.toString())}
						>
							<DropdownItem key='/account'>Manage account</DropdownItem>

							<DropdownItem key='/'>
								<SignOutButton>
									<p className='w-full'>Sign out</p>
								</SignOutButton>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</SignedIn>
				<SignedOut>
					<Link href='/sign-in'>
						<p className='text-[#F5F5EE] text-md font-semibold'>Sign in</p>
					</Link>
				</SignedOut>
			</NavbarContent>

			<NavbarMenu className='bg-[#F5F5EE] border-black border-0.5'>
				<NavbarMenuItem>
					<Link onClick={() => setIsMenuOpen(false)} href='/'>
						<p className='text-md text-[#EA7858] font-semibold'>Home</p>
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Accordion className='px-0' itemClasses={itemClasses}>
						<AccordionItem title='Companies'>
							<Link href='/forum' onClick={() => setIsMenuOpen(false)}>
								Companies
							</Link>
							<Link href='/'>Companies</Link>
							<Link href='/'>Companies</Link>
							<Link href='/'>Companies</Link>
						</AccordionItem>
					</Accordion>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/tarpits' aria-current='page'>
						<p className='text-[#EA7858] text-md font-semibold'>Tarpits</p>
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/forum'>
						<p className='text-[#EA7858] text-md font-semibold'>Forum</p>
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<SignedIn>
						<Link href='/account'>
							<p className='text-[#EA7858] text-md font-semibold'>Account</p>
						</Link>
						<SignOutButton>
							<p className='text-[#EA7858] mt-2 text-md font-semibold'>
								Sign out
							</p>
						</SignOutButton>
					</SignedIn>
					<SignedOut>
						<Link href='/sign-in'>
							<p className='text-[#EA7858] text-md font-semibold'>Sign in</p>
						</Link>
					</SignedOut>
				</NavbarMenuItem>
			</NavbarMenu>
		</NUINavbar>
	)
}
