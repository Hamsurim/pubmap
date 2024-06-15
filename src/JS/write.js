import React from 'react';
import '../CSS/writeboard.css';



function WriteBoard() {
  return (
    <section className="write">
      <div className="page-title">
        <div className="container">
          <h3>게시판</h3>
        </div>
      </div>

      {/* board search area */}
      <div id="board-search">
        <div className="container">
          <div className="search-window">
            <form action="">
              <div className="search-wrap">
                <label htmlFor="search" className="blind">공지사항 내용 검색</label>
                <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value="" />

                           </div>
            </form>
          </div>
        </div>
      </div>
   
      {/* board list area */}
      <div id="board-list">
        <div className="container">
          <table className="board-table">
            <thead>
              <tr>
                <th scope="col" className="th-num">번호</th>
                <th scope="col" className="th-title">제목</th>
                <th scope="col" className="th-date">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <th>
                  <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                  <p>테스트</p>
                </th>
                <td>2024.07.13</td>
              </tr>

              <tr>
                <td>2</td>
                <th><a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a></th>
                <td>2024.06.15</td>
              </tr>

              <tr>
                <td>1</td>
                <th><a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a></th>
                <td>2024.06.02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WriteBoard;
