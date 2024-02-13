function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const key = event.target;
    const file = event.dataTransfer.files[0];
    const audioUrl = URL.createObjectURL(file);

    // Create an audio element and play it when the key is clicked
    const audio = new Audio(audioUrl);
    key.onclick = () => audio.play();

    // Optional: Display file name or some identifier on the key
    key.textContent = file.name;

    const waveformContainer = document.getElementById('waveform-container');
    waveformContainer.innerHTML = ''; // Clear previous waveform

    // Corrected part: Use 'waveformContainer' directly as the container for WaveSurfer
    const wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        waveColor: 'violet',
        progressColor: 'purple'
    });

    wavesurfer.load(audioUrl);
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '7':
            document.getElementById('key1').click();
            break;
        case '8':
            document.getElementById('key2').click();
            break;
        case '9':
            document.getElementById('key3').click();
            break;
        default:
            // Not a key we care about
            break;
    }
});