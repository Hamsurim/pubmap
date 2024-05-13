import { KAKAOPMAP} from './JS/index.js';
import Container from 'react-bootstrap/Container';

function App() {
  



  return (
    <Container fluid>
      <div className='container-fluid'>
        {/* 카카오맵 그리드 */}
        <div className='row'>
          <div className='col mt-3 mb-3'>
            <KAKAOPMAP />
          </div>

        </div>
      </div>
    </Container>
  );
}

export default App;
