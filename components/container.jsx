import Head from 'next/head'
import Menu from '../components/menu'
import styles from '../styles/Home.module.css'

export default function Container({ children, title = 'Sin Definir' }) {
    return <>
        <Head>
            <title>{'GentePrevalente - '+title}</title>
            <meta name="description" content="GentePrevalente - App Control de Empresas" />
        </Head>
        <Menu />
        <main className="container mx-auto h-full">
            {children}
        </main>
    </>
}