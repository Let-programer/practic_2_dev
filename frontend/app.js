fetch('/api/items')
  .then(r => r.json())
  .then(items => {
    const ul = document.getElementById('list');
    items.forEach(i => {
      const li = document.createElement('li');
      li.textContent = `${i.id}: ${i.name}`;
      ul.appendChild(li);
    });
  })
  .catch(e => console.error(e));