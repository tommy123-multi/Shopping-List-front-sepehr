document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');
    const filter = document.getElementById('filter');
    const clearButton = document.getElementById('clear');

    clearButton.style.display = 'none';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const newItem = document.getElementById('item-input').value;

        if (newItem.trim() !== '') {
            const li = document.createElement('li');
            li.innerText = newItem;

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
    });

    filter.addEventListener('input', function () {
        const searchTerm = filter.value.toLowerCase();
        const items = itemList.getElementsByTagName('li');

        Array.from(items).forEach(function (item) {
            const itemName = item.innerText.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    clearButton.addEventListener('click', function () {
        itemList.innerHTML = '';
        clearButton.style.display = 'none';
    });

    function checkListEmpty() {
        if (itemList.children.length === 0) {
            clearButton.style.display = 'none';
        }
    }
});
