let shouldKeepPlaying = false;
const echos = document.querySelectorAll('.echo');
const mainframe = document.getElementById('mainframe');

mainframe.addEventListener('mouseenter', () => {
  shouldKeepPlaying = true;
  pulseon();
});

mainframe.addEventListener('mouseleave', () => {
  echos.forEach((echo) => {
    let animation = echo.getAnimations()[0];
    animation.effect.updateTiming({
      iterations: 1,
    });
  });
  shouldKeepPlaying = false;
});

const pulseon = () => {
  let delay = 0;
  echos.forEach((ele) => {
    ele.animate(
      [
        { opacity: 0.8, transform: 'rotateY(0deg)' },
        { opacity: 0, transform: 'rotateY(24deg)' },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        delay: delay * 1000,
        easing: 'ease-in-out',
      }
    );
    delay += 0.5;
  });
};
