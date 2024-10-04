const arrow = document.querySelector('.arrow');
const item = document.querySelector('.item');
const tilt = document.querySelector('.tilt');

// Function to toggle classes for arrow, item, and tilt elements
function toggleItem() {
    arrow.classList.toggle('active');
    item.classList.toggle('active');
    tilt.classList.toggle('active');
}

// Function to toggle the 'active' class for the viewer element
function toggleViewer() {
    let viewer = document.querySelector('.viewer');
    viewer.classList.toggle('active');
}

(function life(d) {
    const viewer = d.querySelectorAll('.viewer'),
        scene = d.querySelectorAll('.tilt');
    
    // Add blur effect to the body element
    d.querySelector('.body').classList.add('blur');

    scene.forEach((item, index) => {
        item.addEventListener('mousemove', e => {
            var halfViewer = viewer[index].offsetWidth / 2;
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left - halfViewer;
            var y = e.clientY - rect.top - halfViewer;

            // Correct the transform style
            viewer[index].style.transform = `translate(${x}px, ${y}px)`;
            
            // Correct the backgroundPosition style
            viewer[index].style.backgroundPosition = `${-x}px ${-y}px`;
        });
    });
})(document);




/*(function life(d) {
    const viewer = d.querySelectorAll('.viewer'),
        scene = d.querySelectorAll('.tilt');
    d.querySelector('.body').classList.add('blur');

    scene.forEach((item, index) => {
        item.addEventListener('mousemove', e => {
            var halfViewer = viewer[index].offsetWidth / 2;
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left - halfViewer;
            var y = e.clientY - rect.top - halfViewer;

            // Corrected `transform` syntax using parentheses instead of curly braces
            viewer[index].style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            // Corrected `backgroundPosition` syntax and positioning variables
            viewer[index].style.backgroundPosition = -x + 'px ' + -y + 'px';
        });
    });
})(document);*/


 /*(function life(d) {
    const viewer = d.querySelectorAll('.viewer'),
        scene = d.querySelectorAll('.tilt');
    d.querySelector('.body').classList.add('blur');

    scene.forEach((item, index) => {
        item.addEventListener('mousemove', e => {
            var halfViewer = viewer[index].offsetWidth / 2;
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left - halfViewer;
            var y = e.clientY - rect.top - halfViewer;

            // Corrected `transform` syntax using parentheses instead of curly braces
            viewer[index].style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            // Corrected `backgroundPosition` syntax and positioning variables
            viewer[index].style.backgroundPosition = -x + 'px ' + -y + 'px';
        });
    });
}(document);*/

/*(function life(d)) {
    const viewer = d.querySelectorAll('.viewer'),
     scene = d.querySelectorAll('.tilt');
    d.querySelector('.body').classList.add('blur');

    scene.forEach((item, index) => {
        item.addEventListener('mousemove', e => {
            var halfViewer = viewer[index].offsetWidth /2;
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left - halfViewer;
            var y = e.clientY - rect.top - halfViewer;
            viewer[index].style.transform = 'translate{' + x + 'px,' + y +  ''}
            viewer[index].style.backgroundPosition = -x + 'px,' + ' ' + -y + {' + x + 'px,' + y +   
            });
        });*/

//SpaceX Website Redesigned: HTML, CSS & JS Magic in Monochrome! 🚀✨*/