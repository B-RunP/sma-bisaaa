/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import LessonPage from './pages/LessonPage';
import HomePage from './pages/HomePage';
import Navigation from './component/Navigation';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/api-login';
import DetailPageWrapper from './pages/DetailPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            authedUser: null,
            initializing: true,
        }
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
      const { data } = await getUserLogged();
      this.setState(() => {
        return {
          authedUser: data,
          initializing: false
        };
      });
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
     
        this.setState(() => {
          return {
            authedUser: data,
          };
        });
      }

      onLogout() {
        this.setState(() => {
          return {
            authedUser: null
          }
        });
        putAccessToken('');
      }

    render() {

        if (this.state.initializing) {
            return null;
          }

        if (this.state.authedUser === null) {
            return (
                <React.Fragment>
                    <><header className="navigation">
                        <h1>SMABisa</h1>
                        
                    </header><main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess}  />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main></>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <><header className="navigation">
                    <h1>SMABisa</h1>
                    <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
                </header><main>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/lesson' element={<LessonPage />} />
                            <Route path='/about' element={<AboutPage />} />
                            <Route path='detail/:id' element={<DetailPageWrapper />} />
                        </Routes>
                    </main></>
            </React.Fragment>
        )
    }
}

export default App;
