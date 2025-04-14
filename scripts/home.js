document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("space-posts");
    const feedURL = "https://natdeviouswings.substack.com/feed";
    const proxyURL = `https://api.allorigins.win/get?url=${encodeURIComponent(feedURL)}`;
  
    fetch(proxyURL)
      .then(res => res.json())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = Array.from(xml.querySelectorAll("item"));
  
        // Filter posts by "space" in title or description
        const spacePosts = items.filter(item => {
          const title = item.querySelector("title").textContent.toLowerCase();
          const description = item.querySelector("description").textContent.toLowerCase();
          return title.includes("space") || description.includes("space");
        }).slice(0, 3); // Limit to 3 posts
  
        if (spacePosts.length === 0) {
          container.innerHTML = "<p>No recent space-related posts found!</p>";
          return;
        }
  
        spacePosts.forEach(item => {
          const title = item.querySelector("title").textContent;
          const link = item.querySelector("link").textContent;
          const description = item.querySelector("description").textContent;
          const date = new Date(item.querySelector("pubDate").textContent);
  
          const article = document.createElement("article");
          article.classList.add("substack-card");
          article.innerHTML = `
            <h3><a href="${link}" target="_blank">${title}</a></h3>
            <p><em>${date.toLocaleDateString()}</em></p>
            <p>${description.slice(0, 150)}...</p>
          `;
  
          container.appendChild(article);
        });
      })
      .catch(err => {
        console.error("Substack preview error:", err);
        container.innerHTML = "<p>Unable to load recent posts.</p>";
      });
  });
  