//const { default: TypewriterComponent } = require("typewriter-effect");

const btn = document.querySelector('.btn');

document.querySelector('.btn').addEventListener('click', function(){

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

const bigCircle = document.querySelector("#parcours"), smallCircle = document.querySelector(".centrer-du-texte"), wrapper = document.querySelector("#description-parcours"), photo = document.querySelector("#image-description-parcours");

if (window.innerWidth > 1000) {
    wrapper.addEventListener("mousemove", () => {
        let x = (event.clientX - (window.innerWidth/2));
        // Change the value of the divider for more or less parallax effect
        bigCircle.style.transform = `translate3D(${x/50}px, 0, 0)`;
        smallCircle.style.transform = `translate3D(${-x/8.5}px, 0, 0)`;
        photo.style.transform = `translate3D(${-x/35}px, 0, 0)`;
    });
}

const animationText = document.querySelector("#description-bienvenue");

new Typewriter(animationText ,{
//deleteSpeed : 30
})
.changeDelay(30)
.typeString('<h2 class="centrer-du-texte">bienvenue</h2>')
.pauseFor(300)
.typeString(' <p class="style-description-bienvenue"> je suis Massaer Niane <strong>Développeur web junior</strong></p>')
.pauseFor(1000)
.typeString('<p class="style-description-bienvenue"><strong>Ma mission</strong> créer un site ou applcation web sur mesure</p>')
.pauseFor(1000)
.typeString('<p class="style-description-bienvenue">pour savoir comment, consulter <a href="">mon parcours</a> et <a href="#projets">mes projets</a></p>')
.pauseFor(1000)
.typeString(' <div id="description-bienvenue-contact"><button class="boutons"> <span><a href="#contact">Me contacter!</a></span></button></div>' )
.pauseFor(1000)
.start()