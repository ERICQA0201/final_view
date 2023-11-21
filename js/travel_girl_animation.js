document.addEventListener('DOMContentLoaded', function() {
    var catElement = document.querySelector('.travel_girl');

    catElement.style.position = 'relative'; // Ensure the element is absolutely positioned
    var isDragging = false; // Flag to track if dragging is active

    document.onmousedown = function(event) {
        if (event.target === catElement) {
            isDragging = true; // Start dragging

            var shiftX = event.clientX - catElement.getBoundingClientRect().left;
            var shiftY = event.clientY - catElement.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                catElement.style.left = (pageX - shiftX) + 'px';
                catElement.style.top = (pageY - shiftY) + 'px';
            }

            moveAt(event.pageX, event.pageY); // Initial move to align with the mouse position

            function onMouseMove(event) {
                if (isDragging) { // Move only if dragging is active
                    moveAt(event.pageX, event.pageY);
                }
            }

            document.addEventListener('mousemove', onMouseMove);

            document.onmouseup = function() {
                isDragging = false; // Stop dragging
                document.removeEventListener('mousemove', onMouseMove);
                document.onmouseup = null;
            };
        }
    };

    catElement.ondragstart = function() {
        return false;
    };
});