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