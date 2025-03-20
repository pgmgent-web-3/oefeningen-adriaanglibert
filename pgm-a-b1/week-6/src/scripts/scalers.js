function setScale(value, $img) {
    $img.style.setProperty('--dimension', `${value}px`);
}

function initScaler($scaler) {
    const $slider = $scaler.querySelector('input[type=range]');
    const $image = $scaler.querySelector('img');

    $slider.addEventListener('input', () => {
        setScale($slider.value, $image);
    });
}

function initScalers() {
    const $scalers = document.querySelectorAll("[data-scaler]");

    if ($scalers) {
        $scalers.forEach($scaler => {
            initScaler($scaler);
        });
    }
}

export default initScalers;