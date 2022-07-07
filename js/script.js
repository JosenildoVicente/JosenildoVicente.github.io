const btn = document.getElementById('button-projects');
const block = document.getElementById("block-2");
const proj = document.getElementById("projects");
const list = document.getElementById("projects-list");

btn.addEventListener('click', function handleClick() {
    const initialText = 'Ver mais';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'Ver menos';
        block.style.visibility = 'visible';
        proj.style.height = '1000px';
        list.style.height = '800px';

    } else {
        btn.textContent = initialText;
        block.style.visibility = 'hidden';
        proj.style.height = '600px';
        list.style.height = '400px';
    }
});
