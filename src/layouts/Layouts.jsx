
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from '../routes/Routers';
function Layouts() {
  return (
    <>

      <div >
        <Header></Header>
        <main>
          <Router></Router>
        </main>

        <Footer></Footer>
      </div>


    </>
  )
}

export default Layouts