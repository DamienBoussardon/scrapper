
export const customeInput = ()=> { for(let i = 1; i < 4; i++) {

        const container = document.querySelector('.input-range-container');
        /*const rangeLower = document.querySelector('.range-lower');
        const rangeUpper = document.querySelector('.range-upper');*/
        const rangeLower = document.getElementById('range-' + i + 'a');
        const rangeUpper = document.getElementById('range-' + i + 'b');
        const trackerBetween = document.getElementById('input-range-tracker-between-' + i + '');
        const minValue = 0;
        const maxValue = Number(rangeUpper.getAttribute('max'));

        let containerHoverOnPercent = 0;

        const updateTrackerBetween = () => {
          const lowerValue = Number(rangeLower.value);
          const upperValue = Number(rangeUpper.value);
          trackerBetween.style.width = `${(upperValue - lowerValue) / maxValue * 100}%`;
          trackerBetween.style.left = `${lowerValue / maxValue * 100}%`;
        };
        updateTrackerBetween();

        const moveAppropriateThumbToUpper = () => {
          const lowerValue = Number(rangeLower.value);
          const upperValue = Number(rangeUpper.value);
          const closeValue = maxValue / 10;

          if (
            upperValue - lowerValue < closeValue &&
            upperValue > maxValue * .9
          ) {
            rangeLower.classList.add('display-upper');
            rangeUpper.classList.remove('display-upper');
          } else if (
            upperValue - lowerValue < closeValue &&
            lowerValue < maxValue * .1
          ) {
            rangeLower.classList.remove('display-upper');
            rangeUpper.classList.add('display-upper');
          } else {
            const middleValue = lowerValue + (upperValue - lowerValue) / 2;
            if (containerHoverOnPercent < middleValue / maxValue) {
              rangeLower.classList.add('display-upper');
              rangeUpper.classList.remove('display-upper');
            } else {
              rangeLower.classList.remove('display-upper');
              rangeUpper.classList.add('display-upper');
            }
          }
        };

        [
          'mouseenter',
          'mousemove',
          'touchstart , {passive: true} ',
          'touchmove , {passive: true}',
        ].forEach(eventName => {
          container.addEventListener(eventName, event => {
            containerHoverOnPercent = event.offsetX / event.target.clientWidth;
            moveAppropriateThumbToUpper();
          }, false);
        });

        rangeLower.addEventListener('input', event => {
          const lowerValue = Number(event.target.value);
          const upperValue = Number(rangeUpper.value);
          if (lowerValue < minValue) {
            event.target.value = minValue;
          } else if (lowerValue > upperValue) {
            event.target.value = upperValue;
          }

          moveAppropriateThumbToUpper();
          updateTrackerBetween();
        }, false);

        rangeUpper.addEventListener('input', event => {
          const lowerValue = Number(rangeLower.value);
          const upperValue = Number(event.target.value);
          if (upperValue > maxValue) {
            event.target.value = maxValue;
          } else if (upperValue < lowerValue) {
            event.target.value = lowerValue;
          }

          moveAppropriateThumbToUpper();
          updateTrackerBetween();
        }, false);

      }
};
