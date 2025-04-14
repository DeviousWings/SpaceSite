document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-posts");
    const RSS_URL = "https://natdeviouswings.substack.com/feed";
    const API = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`;

  
    fetch(API)
  .then(res => res.json())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = Array.from(xml.querySelectorAll("item"));

    const spacePosts = items.filter(item => {
        const title = item.querySelector("title").textContent.toLowerCase();
        const description = item.querySelector("description").textContent.toLowerCase();
        return title.includes("space") || description.includes("space");
      });
      

    if (spacePosts.length === 0) {
      blogContainer.innerHTML = "<p>No space-related posts found yet!</p>";
      return;
    }

    spacePosts.forEach(item => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const pubDate = new Date(item.querySelector("pubDate").textContent);
      const description = item.querySelector("description").textContent;

      const article = document.createElement("article");
      article.classList.add("blog-post");
      article.innerHTML = `
        <h3><a href="${link}" target="_blank">${title}</a></h3>
        <p><em>${pubDate.toLocaleDateString()}</em></p>
        <p>${description.slice(0, 150)}...</p>
      `;
      blogContainer.appendChild(article);
    });
  })
  .catch(err => {
    console.error("Error fetching Substack feed:", err);
    blogContainer.innerHTML = "<p>Could not load posts. Try again later.</p>";
  });

  });
  