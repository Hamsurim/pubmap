import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { LoadingAnimation } from './JS';
import MenuContainer from './JS/menu';
import MapComponent from './JS/map';
import WriteBoard from './JS/write';
import CarouselMainComponent from './JS/carousel_main';
import Logo from './JS/logo';
import MainExplain from './JS/main_explain';
import LoginPage from './JS/loginform'; // LoginPage 컴포넌트 추가
import './CSS/loginform.css';
import './CSS/logo.css';
import './CSS/font.css';
import About from './JS/about';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Logo /> {/* 로고 컴포넌트 추가 */}
            {isLoading ? (
              <div className="loading-animation">
                <LoadingAnimation />
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<>
                  <MenuContainer />
                  <CarouselMainComponent/>
                  <MainExplain/> 
                </>} />
                <Route path="/map" element={<MapComponent />} />
                <Route path="/about" element={<About />} />
                <Route path="/write" element={<WriteBoard />} />
                <Route path="/login" element={<LoginPage />} /> {/* 로그인 페이지 경로 추가 */}
              </Routes>
            )}
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
