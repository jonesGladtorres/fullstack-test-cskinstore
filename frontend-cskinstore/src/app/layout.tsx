import type { Metadata } from "next";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: 'Teste Técnico',
  description:
    'Projeto de teste técnico para a empresa CSkinStore feito por Jones Torres.',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={montserrat.variable}
        style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
