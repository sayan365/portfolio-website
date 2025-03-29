function openModal(element) {
    // Retrieve data attributes from the clicked element
    const title = element.getAttribute('data-title');
    const description = element.getAttribute('data-description');
    const technologies = element.getAttribute('data-technologies');
    const image = element.getAttribute('data-image');
    const github = element.getAttribute('data-github');
    const live = element.getAttribute('data-live');

    // Fill modal with the project info
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalTechnologies').textContent = technologies;
    document.getElementById('modalImage').src = image;
    document.getElementById('githubLink').href = github;
    document.getElementById('liveLink').href = live;

    // Show the modal
    document.getElementById('projectModal').classList.remove('hidden');
  }

  function closeModal() {
    // Hide the modal
    document.getElementById('projectModal').classList.add('hidden');
  }