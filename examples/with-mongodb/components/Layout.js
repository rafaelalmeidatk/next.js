import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({children}) => (
    <div>
        <Head>
            <title>
                Pet Care App
            </title>            
            <link rel="stylesheet"
            href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
)

export default Layout;