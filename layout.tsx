import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agentes de IA — Landing 3D',
  description: 'Criação de agentes de IA, integrações com WhatsApp e automações.',
  themeColor: '#0ea5e9'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
