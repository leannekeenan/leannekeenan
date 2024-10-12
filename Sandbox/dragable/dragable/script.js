const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    let offsetX, offsetY;

    draggable.addEventListener('mousedown', (e) => {
        // Calculate the offset between the mouse position and the top-left corner of the element
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;

        // Set the cursor style to indicate dragging
        draggable.style.cursor = 'grabbing';

        // Add event listeners for mouse movement and release
        document.addEventListener('mousemove', moveElement);
        document.addEventListener('mouseup', dropElement);
    });

    function moveElement(e) {
        // Update the position of the element based on the mouse movement
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }

    function dropElement() {
        // Remove event listeners when the mouse is released
        document.removeEventListener('mousemove', moveElement);
        document.removeEventListener('mouseup', dropElement);

        // Reset the cursor style
        draggable.style.cursor = 'grab';
    }
});
