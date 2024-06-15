import '../CSS/about.css'
function About() {
  return (
    <div className='about-container'>
      <h1 className='title'>
        신대방삼거리역 근처 술집 위치들을 간단하게 보기 위해 만든 홈페이지입니다.
      </h1>
      
      <div className='section'>
        <h2>Writeboard</h2>
        <p>
          게시판 틀을 간단하게 구현해 보았습니다.
        </p>
      </div>
      
      <div className='section'>
        <h2>Map</h2>
        <p>
          카카오 API를 사용하여 지도를 표시하였고, 마커의 위치는 술집의 위도 경도 좌표값을 가져와 표시하였습니다.
        </p>
      </div>
      
      <div className='section'>
        <h2>Marker Info</h2>
        <p>
          마커를 클릭하면 모달 창이 나오며, 찜하기 기능과 해당 술집 링크로 들어갈 수 있는 버튼을 구현하였습니다.
        </p>
      </div>
    </div>
  );
}

export default About;
