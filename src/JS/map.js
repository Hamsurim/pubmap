import React, { useEffect, useState } from 'react';
import { Tab } from 'react-bootstrap';
import locations from './locations'; 
import TabNav from './tab';
import CustomModal from './modal';
const { kakao } = window;

function MapComponent() {
  // 상태 변수들 정의
  const [map, setMap] = useState(null); // 지도 객체 상태
  const [markers, setMarkers] = useState([]); // 마커 배열 상태
  const [showModal, setShowModal] = useState(false); // 모달 창 표시 여부 상태
  const [selectedLocationData, setSelectedLocationData] = useState(null); // 선택된 위치 데이터 상태
  const [favoritedLocations, setFavoritedLocations] = useState({}); // 찜한 위치 목록 상태

  // 지도 초기화
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.499481127752055, 126.92756660374728),
      level: 2
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  // 찜한 위치 마커 이미지 변경
  useEffect(() => {
    const favoriteMarkerImage = new kakao.maps.MarkerImage(
      'pub_img/maker_2.png',
      new kakao.maps.Size(50, 50),
    );
    const defaultMarkerImage = new kakao.maps.MarkerImage(
      'pub_img/maker.png',
      new kakao.maps.Size(50, 50),
    );

    markers.forEach(marker => {
      const title = marker.getTitle();
      // 찜한 위치인 경우 마커 이미지 변경
      if (favoritedLocations[title]) {
        marker.setImage(favoriteMarkerImage);
      } else {
        marker.setImage(defaultMarkerImage);
      }
    });
  }, [markers, favoritedLocations]);

  // 카테고리 클릭 시 처리
  const handleCategoryClick = (category) => {
    const locationsData = handleTabClick(category);
    if (map && locationsData.length > 0) {
      markers.forEach(marker => marker.setMap(null)); // 기존 마커 제거
      
      const newMarkers = locationsData.map(data => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(data.lat, data.lng),
          map: map,
          title: data.title // 마커 제목을 위치 제목으로 설정
        });

        // 툴팁 내용 생성
        const tooltipContent = `
        <div style="padding: 20px; width: 200px;"> 
            <strong>${data.title}</strong><br>
            ${data.content}
          </div>
        `;
        
        // 인포 윈도우 생성
        const infoWindow = new kakao.maps.InfoWindow({
          content: tooltipContent
        });

        // 마우스 오버 이벤트 추가하여 툴팁 표시
        kakao.maps.event.addListener(marker, 'mouseover', function() {
          infoWindow.open(map, marker);
        });

        // 마우스 아웃 이벤트 추가하여 툴팁 숨김
        kakao.maps.event.addListener(marker, 'mouseout', function() {
          infoWindow.close();
        });

        // 클릭 이벤트 추가하여 모달 표시
        kakao.maps.event.addListener(marker, 'click', function() {
          setShowModal(true);
          setSelectedLocationData(data);
        });

        return marker;
      });
      
      setMarkers(newMarkers); // 새로운 마커 배열 설정
      map.setCenter(new kakao.maps.LatLng(locationsData[0].lat, locationsData[0].lng)); // 맵 중심 설정
    }
  };

  // 탭 클릭 시 처리
  const handleTabClick = (category) => {
    return locations[category] || [];
  };

  // 모달 창 제어
  const handleModal = () => {
    setShowModal(!showModal);
  };

  // 술집 위치 보기 버튼 클릭 시 처리
  const handleModalButtonClick = () => {
    if (selectedLocationData && selectedLocationData.homepage) {
      window.open(selectedLocationData.homepage, "_blank");
    }
  };

  // 찜하기 기능 제어
  const handleFavorite = () => {
    if (selectedLocationData) {
      const newFavoritedLocations = { ...favoritedLocations };
      newFavoritedLocations[selectedLocationData.title] = !newFavoritedLocations[selectedLocationData.title];
      setFavoritedLocations(newFavoritedLocations);
    }
  };

  return (
    <div>
      {/* 탭 및 네비게이션 */}
      <Tab.Container defaultActiveKey="home">
        {/* TabNav 컴포넌트 사용 */}
        <TabNav handleCategoryClick={handleCategoryClick} />
      </Tab.Container>

      {/* 모달 창 */}
      <CustomModal
        showModal={showModal}
        handleModal={handleModal}
        selectedLocationData={selectedLocationData}
        handleModalButtonClick={handleModalButtonClick}
        handleFavorite={handleFavorite}
        favoritedLocations={favoritedLocations}
      />

      {/* 지도 영역 */}
      <div id="map" style={{ width: '100%', height: '90vh' }}></div>
    </div>
  );
}

export default MapComponent;