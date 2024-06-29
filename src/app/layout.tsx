import { Metadata } from 'next';
import "../styles/global.css"

 
export const metadata: Metadata = {
  title: "Vitrine Virtual Challenge",
  description: 'challenge mks sistemas',
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>){
    return (
        <html lang='pt-BR'>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}