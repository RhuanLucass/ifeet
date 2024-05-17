document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card');
  var moveOutWidth = document.body.clientWidth * 1.5;
  var moveOutHeight = document.body.clientHeight * 1.5;

  cards.forEach(function (card) {
    var hammertime = new Hammer(card);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    hammertime.on('pan', function (event) {
      var deltaX = event.deltaX;
      var deltaY = event.deltaY;

      // Restrict movement to left, right, or up
      if (deltaY > 0) {
        deltaY = 0;
      }

      var rotate = deltaX * 0.05;

      card.classList.add('moving');
      // Maintain top: 50% by setting transform origin to center
      card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`;
    });

    hammertime.on('panend', function (event) {
      card.classList.remove('moving');
      var absDeltaX = Math.abs(event.deltaX);
      var absDeltaY = Math.abs(event.deltaY);
      var velocityX = Math.abs(event.velocityX);
      var velocityY = Math.abs(event.velocityY);

      // Define a larger threshold for vertical movement detection
      var verticalThreshold = 150;
      var horizontalThreshold = 200;

      var keep = absDeltaX < horizontalThreshold && absDeltaY < verticalThreshold;

      if (keep) {
        card.style.transform = '';
      } else {
        var endX = Math.max(velocityX * moveOutWidth, moveOutWidth);
        var endY = Math.max(velocityY * moveOutHeight, moveOutHeight);
        var toX, toY;

        // Determine final position based on direction
        if (absDeltaY > verticalThreshold && event.deltaY < 0) {
          // Move up
          toX = 0;
          toY = -endY;
        } else {
          // Move left or right
          toX = event.deltaX > 0 ? endX : -endX;
          toY = 0;
        }

        var rotate = event.deltaX * 0.05;

        // Apply final transformation while maintaining top: 50%
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `translate(${toX}px, ${toY}px) rotate(${rotate}deg)`;
        card.addEventListener('transitionend', function () {
          card.remove();
        });
      }
    });
  });
});
