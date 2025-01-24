// document.querySelectorAll('#left-content #prod-desc h3').forEach(h3 => {
//     h3.addEventListener('click', () => {
//         document.querySelectorAll('#left-content #prod-desc p').forEach(p => p.style.display = 'none');
//         h3.nextElementSibling.style.display = 'block';
//     });
// });

document.querySelectorAll('#left-content #prod-desc h3').forEach(h3 => {
    h3.addEventListener('click', () => {
        // Remove .active class from all p elements
        document.querySelectorAll('#left-content #prod-desc p').forEach(p => p.classList.remove('active'));
        // Add .active class to the p sibling of the clicked h3
        h3.nextElementSibling.classList.add('active');
    });
});

// Show the first paragraph by default
document.querySelector('#left-content #prod-desc #des p').classList.add('active');