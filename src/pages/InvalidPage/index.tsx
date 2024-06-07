import { Link } from 'react-router-dom';

import '../../assets/styles/layout/InvalidPage.scss';

const InvalidPage = () => (
  <div className='invalid-page'>
    <h1 className='invalid-page__title'>Invalid Page</h1>
    <Link to='/'>Home</Link>
  </div>
);

export default InvalidPage;
