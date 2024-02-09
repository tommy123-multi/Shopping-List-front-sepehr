document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');
    const filter = document.getElementById('filter');
    const clearButton = document.getElementById('clear');

    clearButton.style.display = 'none';

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const newItem = document.getElementById('item-input').value.trim();

        if (newItem !== '') {
            addItemToList(newItem);
        }
    });

    function addItemToList(itemName) {
        const li = document.createElement('li');
        li.innerText = itemName;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-item btn-link text-red';
        removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        removeButton.addEventListener('click', function () {
            li.remove();
            checkListEmpty();
        });

        li.appendChild(removeButton);

        itemList.appendChild(li);

        document.getElementById('item-input').value = '';

        clearButton.style.display = 'block';
    }

    filter.addEventListener('input', () => {
        const searchTerm = filter.value.toLowerCase();
        const items = Array.from(itemList.getElementsByTagName('li'));

        items.forEach((item) => {
            const itemName = item.innerText.toLowerCase();
            item.style.display = itemName.includes(searchTerm) ? 'block' : 'none';
        });
    });

    clearButton.addEventListener('click', () => {
        itemList.innerHTML = '';
        clearButton.style.display = 'none';
    });

    const checkListEmpty = () => {
        clearButton.style.display = itemList.children.length === 0 ? 'none' : 'block';
    };

    checkListEmpty();
});
