import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="adresse">
          <h3>Coordonnées</h3>
          <div className="dropdown-divider mb-3"></div>
          <p>
            Mingqiao GAO
            <br />
            Chevilly-Larue
            <br />
            94320
            <br />
            gaomingqiao@gmail.com
            <br />
            06 50 95 61 29
            <br />
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row text-center p-2" id="copyright">
          <div className="col-12">
            <p>Copyright © 2023 | Mingqiao GAO</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
