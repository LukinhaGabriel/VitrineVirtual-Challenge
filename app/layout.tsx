import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: 'challenge mks sistemas',
};

export default function RootLayout({ children, }:{children: React.ReactNode}){
    return (
        <html lang='pt-BR'>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>{children}</body>
        </html>
    )
}