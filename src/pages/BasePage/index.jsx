import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'

function BasePage() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default BasePage