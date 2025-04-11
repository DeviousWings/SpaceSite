fetch('/api/rss')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('posts');
    container.innerHTML = '';
    data.forEach(post => {
      const div = document.createElement('div');
      div.classList.add('post-card');
      div.innerHTML = `
        <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
        <p><small>${new Date(post.date).toLocaleDateString()}</small></p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('posts').innerText = 'Failed to load posts.';
    console.error(err);
  });
