import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import Navbar from '../components/navbar/navbar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'sandbox_',
	description: 'sandbox_',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<Navbar />
					<Providers>{children}</Providers>
				</body>
			</html>
		</ClerkProvider>
	)
}
