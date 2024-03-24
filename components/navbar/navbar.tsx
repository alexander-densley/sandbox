'use client'
import { UserButton } from '@clerk/nextjs'
import {
	Navbar as NUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

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
				<p className='text-[#F5F5EE] text-lg font-semibold'> sandbox_</p>
			</NavbarBrand>

			<NavbarContent className='hidden sm:flex' justify='start'>
				<NavbarItem>
					<Link href='/'>
						<p className='text-lg text-[#F5F5EE] font-semibold'>Home</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/tarpits' aria-current='page'>
						<p className='text-[#F5F5EE] text-lg font-semibold'>Tarpits</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/forum'>
						<p className='text-[#F5F5EE] text-lg font-semibold'>Forum</p>
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<UserButton />
			</NavbarContent>

			<NavbarMenu className='bg-[#F5F5EE]'>
				<NavbarMenuItem>
					<Link href='/'>
						<p className='text-lg text-[#EA7858] font-semibold'>Home</p>
					</Link>
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
