import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({children}) => (
    <>
        <Head>
            <title>
                Pet Care App
            </title>
        </Head>
        <Navbar/>
        {children}
    </>
)

export default Layout;