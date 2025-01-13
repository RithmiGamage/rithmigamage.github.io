function animateImage(element) {
    element.classList.add('animate');
    
    // Remove the animation after it finishes
    setTimeout(() => {
        element.classList.remove('animate');
    }, 500);
}
