const revealItems = document.querySelectorAll(
  ".section, .project-card, .skill-card, .about-box, .contact-box, .github-box, .github-stat"
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach((item) => {
  observer.observe(item);
});

fetch("https://api.github.com/users/drexxymod")
  .then((response) => response.json())
  .then((data) => {
    const repoCount = document.getElementById("repo-count");
    const followersCount = document.getElementById("followers-count");
    const followingCount = document.getElementById("following-count");

    if (repoCount) repoCount.textContent = data.public_repos ?? "N/A";
    if (followersCount) followersCount.textContent = data.followers ?? "N/A";
    if (followingCount) followingCount.textContent = data.following ?? "N/A";
  })
  .catch(() => {
    const repoCount = document.getElementById("repo-count");
    const followersCount = document.getElementById("followers-count");
    const followingCount = document.getElementById("following-count");

    if (repoCount) repoCount.textContent = "N/A";
    if (followersCount) followersCount.textContent = "N/A";
    if (followingCount) followingCount.textContent = "N/A";
  });