const btn = document.getElementById('button-projects');
const block = document.getElementById("block-2");

btn.addEventListener('click', function handleClick() {
    const initialText = 'Ver mais';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'Ver menos';
        block.style.display = 'flex';
    } else {
        btn.textContent = initialText;
        block.style.display = 'none';
    }
});
