 const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });

    timeline.to("#element1", { x: 100, opacity: 1, duration: 1.5 });
    timeline.to("#element2", { y: 150, x: 50, opacity: 1, duration: 1 }, "-=0.5");
    timeline.to("#element3", { x: 20, opacity: 1, scale: 1.5, duration: 1 }, "-=0.9");

 const slider = document.getElementById("animationSlider");

 function updateAnimationProgress() {
     const progress = parseInt(slider.value) / 100;
     timeline.progress(progress);
 }

 const pauseAnimation = () => {
        timeline.pause();
    }

    const startAnimation = () => {
        timeline.play();
    }

    const endAnimation = () => {
        timeline.pause(0);
    }

   // timeline.play();

 // Initial update of animation progress
 updateAnimationProgress();


