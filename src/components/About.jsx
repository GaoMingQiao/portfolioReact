import React from "react";
import cvphoto from "../assets/img/cvphoto.png";

export default function About() {
  return (
    <>
      <div id="about" class="container-fluid">
        <h2 class="p-5">À propos</h2>

        <div class="row p-5">
          <div class="col-12 text-center mb-5">
            <img
              src={cvphoto}
              alt="photo de Mingqiao GAO"
              id="profile-picture"
            />
          </div>
          <div class="col-md-8 offset-md-2 text-justify">
            <p>
              Trilingue (français, chinois et anglais), forte d'une expérience
              professionnelle enrichissante, cependant, ma véritable passion
              pour la technologie et la programmation m'a poussé à évoluer ma
              carrière vers le développement web.Faisant preuve de curiosité
              professionnelle et envie de nouvelles connaissances, j'aime
              apprendre et comprendre. Grâce à mes précédentes expériences et
              formations, je sais m’adapter à toute situation et garder le sens
              du détail. N’hésitez donc pas à me contacter pour en apprendre
              plus sur moi. Hâte de pouvoir en discuter avec vous!😊
            </p>
          </div>
          <div class="col-12 text-center my-5 mb-md-0">
            <a
              class="btn btn-outline-light"
              href="#"
              target="blank"
              role="button"
            >
              Voir mon CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
