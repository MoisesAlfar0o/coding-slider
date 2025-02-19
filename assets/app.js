const d  = document;

const testimonialComment = d.getElementById("comment");
const testimonialName = d.getElementById("name");
const testimonialRole = d.getElementById("role");
const testimonialImg = d.getElementById("person-img");
const btnPrev = d.getElementById("btn-prev");
const btnNext = d.getElementById("btn-next");

const people = {
    personA: {
        name: "Tanya Sinclair",
        role: "UX Engineer",
        comment: `
        “ I’ve been interested in coding for a while but
          never taken the jump, until now. I couldn’t 
          recommend this course enough. I’m now in 
          the job of my dreams and so excited about 
          the future. ”
        `,
        img: '../images/image-tanya.jpg'
    },
    personB: {
        name: "John Tarkpor",
        role: "Junior Front-end Developer",
        comment: `
        “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as aprofessional developer. ”`,
        img: '../images/image-john.jpg'
    },
}; 

const testimonials = Object.values(people);
let currentIndex = 0;

function updateTestimonial() {
  const person = testimonials[currentIndex];
  testimonialImg.src = person.img;
  testimonialName.textContent = person.name;
  testimonialRole.textContent = person.role;
  testimonialComment.textContent = person.comment;
  console.log(currentIndex)
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

btnPrev.addEventListener('click', prevTestimonial)
btnNext.addEventListener('click', nextTestimonial)

updateTestimonial();