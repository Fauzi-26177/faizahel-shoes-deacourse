console.log('starting tweak');
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const product5 = document.getElementById("product5");
const product6 = document.getElementById("product6");
const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");
const cta = document.getElementById("cta");
const item = document.getElementById("top-item");
const welcome = document.getElementById("welcome");
const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");
const productBox3 = document.getElementById("productBox3");
const productBox4 = document.getElementById("productBox4");
const productBox5 = document.getElementById("productBox5");
const productBox6 = document.getElementById("productBox6");

function getDetail(nomor) {
    console.log('product: ', nomor)
    item.style.display = "none"
    cta.style.display = "none"
    newBox.style.display = "block"
    wrapper.style.display = "none"
    welcome.style.display = "none"
    productBox1.style.display = "none"
    productBox2.style.display = "none"
    productBox3.style.display = "none"
    productBox4.style.display = "none"
    productBox5.style.display = "none"
    productBox6.style.display = "none"


    if (nomor === 1) {
        productBox1.style.display = "flex"
    } else if (nomor === 2) {
        productBox2.style.display = "flex"
    } else if (nomor === 3) {
        productBox3.style.display = "flex"
    } else if (nomor === 4) {
        productBox4.style.display = "flex"
    } else if (nomor === 5) {
        productBox5.style.display = "flex"
    } else if (nomor === 6) {
        productBox6.style.display = "flex"
    }
}

const container = document.getElementById("container");

function backToHomepage(container) {
    if (container === 'container') {
        item.style.display = "flex"
        cta.style.display = "flex"
        newBox.style.display = "none"
        wrapper.style.display = "flex"
        welcome.style.display = "block"
    }
}

window.addEventListener("scroll", popFirst);

function popFirst() {
    let elements = document.querySelectorAll(".elemen-first");
    
    for (let i = 0; i < elements.length; i++) {
        let height = window.innerHeight;
        let paddingTop = elements[i].getBoundingClientRect().top;
        let scrollSize = 150;

        if (paddingTop < height - scrollSize) {
            elements[i].classList.add("sleding");
        } else {
            elements[i].classList.remove("sleding");
        }
    }
}

window.addEventListener("scroll", popSecond);

function popSecond() {
    let elements = document.querySelectorAll(".elemen-second");
    
    for (let i = 0; i < elements.length; i++) {
        let height = window.innerHeight;
        let paddingTop = elements[i].getBoundingClientRect().top;
        let scrollSize = 98;

        if (paddingTop < height - scrollSize) {
            elements[i].classList.add("sleding");
        } else {
            elements[i].classList.remove("sleding");
        }
    }
}
