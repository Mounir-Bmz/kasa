import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/global.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;