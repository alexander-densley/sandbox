'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import {
	Navbar as NUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/navbar'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const itemClasses = {
		base: 'p-0',
		trigger: 'py-0',
		title: 'text-lg text-[#EA7858] font-semibold',
		content:
			'pb-0 text-lg pl-4 text-[#EA7858] font-semibold flex flex-col gap-2',
	}

	return (
		<NUINavbar
			maxWidth='full'
			className='bg-[#EA7858]'
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden text-[#F5F5EE]'
			/>
			<NavbarBrand className='flex-grow-0 mr-12'>
				<Link href='/' className='text-[#F5F5EE] text-lg font-semibold'>
					sandbox_
				</Link>
			</NavbarBrand>

			<NavbarContent className='hidden sm:flex' justify='start'>
				<NavbarItem>
					<Link href='/'>
						<p className='text-lg text-[#F5F5EE] font-semibold'>Home</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/'>
						<p className='text-lg text-[#F5F5EE] font-semibold'>Companies</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/tarpits' aria-current='page'>
						<p className='text-[#F5F5EE] text-lg font-semibold'>Resources</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/forum'>
						<p className='text-[#F5F5EE] text-lg font-semibold'>Forum</p>
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<Link href='/sign-in'>
						<p className='text-[#F5F5EE] text-lg font-semibold'>Sign in</p>
					</Link>
				</SignedOut>
			</NavbarContent>

			<NavbarMenu className='bg-[#F5F5EE] border-black border-0.5'>
				<NavbarMenuItem>
					<Link onClick={() => setIsMenuOpen(false)} href='/'>
						<p className='text-lg text-[#EA7858] font-semibold'>Home</p>
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
						<p className='text-[#EA7858] text-lg font-semibold'>Tarpits</p>
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/forum'>
						<p className='text-[#EA7858] text-lg font-semibold'>Forum</p>
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</NUINavbar>
	)
}
