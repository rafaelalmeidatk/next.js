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
        <div>
            {children}
        </div>
    </>
)

export default Layout;