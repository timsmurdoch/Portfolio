
//Mouse circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");


const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    //alert(document.querySelector(".mouse-circle").style.cssText);
};

// End of mouse circle

// Animated circles
const z = 100;
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');

let mX = 0;
let mY = 0;

const animatedCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `100px`;
        });
        mainImg.style.top = `100px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-100px`;
        });
        mainImg.style.top = `-100px`;
    }

    mX = e.clientX;
    mY = e.clientY;
}

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    mouseCircleFn(x, y);
    animatedCircles(e, x, y);
})

document.body.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});


//Main Button
const mainBtns = document.querySelectorAll('.main-btn');

mainBtns.forEach((btn) => {
    let ripple;

    btn.addEventListener('mouseenter', e => {
        const left = e.clientX - e.target.getBoundingClientRect
            ().left;

        const top = e.clientY - e.target.getBoundingClientRect
            ().top;

        ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple);
    });

    btn.addEventListener('mouseleave', () => {
        btn.removeChild(ripple);
    });
});

//End main btn

//About me Text
const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextContent = "I am an well rounded programmer that hasrecently graduated from Murdoch University with a bachelors of Computer Science";

Array.from(aboutMeTextContent).forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);
    span.addEventListener('mouseenter', (e) => {
        e.target.style.animation = "aboutMeTextAnim 10s infinite"
    });
});


//Projects
const projects = document.querySelectorAll('.project');
const container = document.querySelector('.container');
const projectHideBtn = document.querySelector('.project-hide-btn');


projects.forEach((project, i) => {
    project.addEventListener('mouseenter', () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight -
            project.offsetHeight + 20}px`;
    });

    project.addEventListener('mouseleave', () => {
        project.firstElementChild.style.top = `2rem`;
    });

    //Big project image
    project.addEventListener('click', () => {
        const bigImgWrapper = document.createElement('div');
        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const bigImg = document.createElement('img');
        bigImg.className = "project-img";

        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        console.log(imgPath);
        bigImg.setAttribute("src", `${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
        document.body.style.overflowY = "hidden";

        projectHideBtn.classList.add('change');

        projectHideBtn.onclick = () => {
            projectHideBtn.classList.remove("change");
            bigImgWrapper.remove();
            document.body.style.overflowY = "scroll";
        }
    });

    i >= 6 && (project.style.cssText = "display:none; opacity: 0");

});


//End big project image



//End of projects


