import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh(); // Rafraîchir les animations AOS à chaque événement de défilement
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoyer l'écouteur d'événements lors du démontage du composant
    };
  }, []);

  return (
    <div className="skills">
      <div id="skills" class="container-fluid">
        <div class="row">
          <div class="col-12 my-auto">
            <h2 class="p-5">Compétences</h2>
          </div>

          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4 p-5 logo">
            <h3>Technologies</h3>
            <div class="dropdown-divider mb-5"></div>
            <p data-aos="fade-up" class="aos-init">
              HTML
            </p>
            <p data-aos="fade-up" class="aos-init">
              CSS
            </p>
            <p data-aos="fade-up" class="aos-init">
              {" "}
              PHP
            </p>
            <p data-aos="fade-up" class="aos-init">
              JavaScript
            </p>
            <p data-aos="fade-up" class="aos-init">
              TypeScript
            </p>
            <p data-aos="fade-up" class="aos-init">
              MySQL
            </p>
          </div>

          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4 p-5">
            <h3>Frameworks / bibliothèques</h3>
            <div class="dropdown-divider mb-5"></div>
            <p data-aos="fade-up" class="aos-init">
              {" "}
              Symfony
            </p>
            <p data-aos="fade-up" class="aos-init">
              {" "}
              React
            </p>
            <p data-aos="fade-up" class="aos-init">
              {" "}
              React Native
            </p>
            <p data-aos="fade-up" class="aos-init">
              {" "}
              Bootstrap
            </p>
            <p data-aos="fade-up" class="aos-init">
              FontAwesome
            </p>
            <p data-aos="fade-up" class="aos-init">
              Twig
            </p>
          </div>

          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-0 p-5">
            <h3>CMS</h3>
            <div class="dropdown-divider mb-5"></div>
            <p data-aos="fade-up" class="aos-init">
              PrestaShop
            </p>

            <p data-aos="fade-up" class="aos-init">
              WordPress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
