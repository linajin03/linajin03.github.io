import React from 'react';
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';


const Footer = () => {

  return (
    <MDBFooter className='text-center footer'>
      <MDBContainer className='p-4 footer-content'>

        <section className='mb-4 footer-text'>
          <p>
            Thank you for getting to know me!
          </p>
          <p>
          Let's connect! Feel free to reach out to me through email or LinkedIn.
          </p>
        </section>

        <div className='text-center p-3 copyright'>
            Lina Jin © 2023 made with React.js and MDBootstrap
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;