import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Address = () => {
  return (
    <div className="card-body">
      <div className="row mb-4">
        <div className="col-sm-6">
          <h6 className="mb-3">From:</h6>
          <div>
            <strong>Webz Poland</strong>
          </div>
          <div>Madalinskiego 8</div>
          <div>71-101 Szczecin, Poland</div>
          <div>Email: info@webz.com.pl</div>
          <div>Phone: +48 444 666 3333</div>
        </div>

        <div className="col-sm-6">
          <h6 className="mb-3">To:</h6>
          <div>
            <strong>Bob Mart</strong>
          </div>
          <div>Attn: Daniel Marek</div>
          <div>43-190 Mikolow, Poland</div>
          <div>Email: marek@daniel.com</div>
          <div>Phone: +48 123 456 789</div>
        </div>
      </div>
    </div>
  );
}

export default Address