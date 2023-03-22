import logo from './logo.svg';
import './index.css';
import Profile from './components/profile';
import Header from './components/header';

function App() {
  return (
    <div class="d-flex flex-column">
      <Header></Header>

      <main class="container-fluid  mb-3">
        <div class="row">
          <Profile></Profile>

          <div class="col-lg-2 d-none d-lg-flex mr-lg-n9">
            <div class="container d-flex align-items-center justify-content-center">
              <div class="separator"></div>
            </div>
          </div>

          <div class="col-12 d-lg-none d-flex">
            <div class="container d-flex align-items-center justify-content-center">
              <div class="divider"></div>
            </div>
          </div>


        </div>
      </main>



    </div>

  );
}

export default App;
