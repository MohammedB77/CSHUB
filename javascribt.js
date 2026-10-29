
<script>
(() => {
    const stage = document.getElementById('csGlobeStage');
    const globe = document.getElementById('csGlobe');

    if (!stage || !globe) return;

    let rotation = 0;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastTime = 0;
    let animationFrame = null;

    const friction = 0.94;
    const sensitivity = 0.35;
    const maxVelocity = 5;

    function render() {
        globe.style.transform = `rotate(${rotation}deg)`;
    }

    function animate() {
        if (dragging) return;

        rotation += velocity;
        velocity *= friction;

        if (Math.abs(velocity) < 0.015) {
            velocity = 0;
            animationFrame = null;
            render();
            return;
        }

        render();
        animationFrame = requestAnimationFrame(animate);
    }

    stage.addEventListener('pointerdown', (event) => {
        dragging = true;
        lastX = event.clientX;
        lastTime = performance.now();
        velocity = 0;

        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }

        stage.classList.add('is-dragging');
        stage.setPointerCapture(event.pointerId);
    });

    stage.addEventListener('pointermove', (event) => {
        if (!dragging) return;

        const now = performance.now();
        const deltaX = event.clientX - lastX;
        const deltaTime = Math.max(1, now - lastTime);

        rotation += deltaX * sensitivity;

        velocity = (deltaX * sensitivity) / (deltaTime / 16.67);
        velocity = Math.max(-maxVelocity, Math.min(maxVelocity, velocity));

        lastX = event.clientX;
        lastTime = now;

        render();
    });

    function stopDragging() {
        if (!dragging) return;

        dragging = false;
        stage.classList.remove('is-dragging');

        if (!animationFrame) {
            animationFrame = requestAnimationFrame(animate);
        }
    }

    stage.addEventListener('pointerup', stopDragging);
    stage.addEventListener('pointercancel', stopDragging);
    stage.addEventListener('lostpointercapture', stopDragging);

    render();
})();
</script>
