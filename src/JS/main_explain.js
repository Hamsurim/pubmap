import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import '../CSS/main_explain.css';

function MainExplain() {
  // eslint-disable-next-line
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSecondRendered, setIsSecondRendered] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const imageElement = document.querySelector('.main-img-map');

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (imageElement) {
      imageElement.addEventListener('load', handleImageLoad);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  useEffect(() => {
    if (inView2 && !isSecondRendered) {
      setIsSecondRendered(true);
    }
  }, [inView2, isSecondRendered]);

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <div className="explain-container noto-sans-kr-500">
      <div ref={ref1} className={`explain ${inView1 ? 'visible' : ''}`}>
        <div className='main-container-infrom'>
          <div className='container-infrom-text'>
            <h2>신대방삼거리역 근처 술집 찾기</h2>
            <h1>알콕이 알려줄게요!</h1>
            <img src={process.env.PUBLIC_URL + '/pub_img/beer.png'} alt="로고" className="main-img-beer" />
          </div>
        </div>
      </div>

      <div ref={ref2} className={`explain ${inView2 ? 'visible' : ''}`}>
        <div className='row align-items-center justify-content-center'>
          <div className='col main-img-map'>
            <img
              src={process.env.PUBLIC_URL + '/pub_img/main_map.png'}
              alt="지도"
              className="rounded float-end main-img-map"
            />
            <div className="map-container ">
              <img
                src={process.env.PUBLIC_URL + '/pub_img/maker.png'}
                alt="오버레이마커"
                className={`overlay-img1 img-fluid ${isSecondRendered ? 'bounce-in-top loaded' : ''}`}
              />
              <img
                src={process.env.PUBLIC_URL + '/pub_img/maker.png'}
                alt="오버레이마커"
                className={`overlay-img2 img-fluid ${isSecondRendered ? 'bounce-in-top loaded' : ''}`}
              />
            </div>
          </div>
          <div className='col'>
            <div className='text-start'>
              <h2>#이자카야 #전통주 #맥주</h2>
              <br />
              <h4>지도에 카테고리를 클릭해보세요!</h4>
              <br />
              <h4>마커로 위치를 알려줘요</h4>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref3} className={`explain ${inView3 ? 'visible' : ''}`}>
        <div className='row align-items-center justify-content-center'>
          <div className='col-auto text-end'>
            <div className='text-start'>
              <h2>저장하고 공유하고싶을땐?</h2>
              <br />
              <h4>간단한 한줄평과 찜하기, </h4>
              <br />
              <h4>술집 링크를 볼 수 있어요</h4>
            </div>
          </div>
          <div className='col-auto'>
            <div className='main-img-modal'>
              <img
                src={process.env.PUBLIC_URL + '/pub_img/modal.png'}
                alt="모달"
                className={"rounded float-start"}
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={ref4} className={`explain ${inView4 ? 'visible' : ''}`}>
        <h1>우리동네 술집 찾기</h1>
        <h1>이젠 알콕과 함께해요</h1>
        <br></br>
        <button className="main-login-button"onClick={handleLoginClick}>로그인
        <img
                src={process.env.PUBLIC_URL + '/pub_img/north-arrow.png'}
                alt="화살표아이콘"
                className={"main-arrow"}
              />
        </button> {/* 로그인 버튼 추가 */}
      </div>
    </div>
  );
}

export default MainExplain;
