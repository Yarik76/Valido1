let itemLinks = document.querySelectorAll(".fa");
let sections = document.querySelectorAll(".section");

for (let i = 0; i < itemLinks.length; i++) {
    itemLinks[i].addEventListener("click", () => {
        for (let i = 0; i < 3; i++) {
            sections[i].classList.remove("active");
        }
        sections[i].classList.add("active");
    })
}





// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.btn').forEach((link) => {
//                 if (link.getAttribute('href').replace('#', '') === entry.target.id) {
//                     link.classList.add('active');
//                 } else {
//                     link.classList.remove('active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 1,
// });

// document.querySelectorAll('.section').forEach(
//     (section) => observer.observe(section),
// ); 