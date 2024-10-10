import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { AppwriteProvider } from '@/lib/appwrite'
import { Toaster } from '@/components/ui/toaster'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppwriteProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AppwriteProvider>
  )
}