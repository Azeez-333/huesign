import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'HUE Signs Creative Studio | Branding, Digital & Production',description:'HUE Signs Creative Studio in Chennai builds brands, digital experiences, premium packaging and visual content.',openGraph:{title:'HUE Signs Creative Studio',description:'We Build Brands. We Create Experiences. We Drive Growth.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
