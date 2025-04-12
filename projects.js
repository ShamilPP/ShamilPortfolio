// Function to get URL parameters
function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('project');
}

// Function to load project details when on a project page
function loadProjectDetails() {
    const projectId = getProjectId();

    if (projectId && projectsData[projectId]) {
        const project = projectsData[projectId];

        // Update page title
        document.title = `${project.title} - Shamil PP Portfolio`;

        // Create the project details HTML
        const projectDetailsContainer = document.getElementById('project-details-container');
        if (!projectDetailsContainer) return;

        // Create image gallery
        let galleryHTML = '<div class="project-gallery">';
        galleryHTML += '<div class="gallery-main-image">';
        galleryHTML += `<img id="gallery-main" src="${project.images[0]}" alt="${project.title}">`;
        galleryHTML += '</div>';
        galleryHTML += '<div class="gallery-thumbnails">';

       [project.logo ,...project.images].forEach((image, index) => {
            galleryHTML += `<div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                              data-image="${image}" 
                              onclick="changeGalleryImage('${image}', this)">
                          <img src="${image}" alt="Thumbnail ${index + 1}">
                        </div>`;
        });

        galleryHTML += '</div></div>';

        // Create project info HTML
        let projectInfoHTML = `
        <div class="project-info">
          <div class="project-header">
            <h1>${project.title}</h1>
            <div class="project-links">
              ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>` : ''}
              ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            </div>
          </div>
          
          <div class="project-description">
            <h2>Overview</h2>
            <p>${project.fullDescription}</p>
          </div>
          
          <div class="project-features">
            <h2>Key Features</h2>
            <ul>
              ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          
          <div class="project-tech">
            <h2>Technologies Used</h2>
            <div class="tech-tags">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

        // Combine all HTML
        projectDetailsContainer.innerHTML = `
        <div class="back-button">
          <a href="index.html#projects" class="btn btn-outline"><i class="fas fa-arrow-left"></i> Back to Projects</a>
        </div>
        <div class="project-details">
          ${galleryHTML}
          ${projectInfoHTML}
        </div>
      `;
    }
}

// Function to change the main gallery image
function changeGalleryImage(imageSrc, clickedThumbnail) {
    document.getElementById('gallery-main').src = imageSrc;

    // Update active thumbnail
    document.querySelectorAll('.gallery-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    clickedThumbnail.classList.add('active');
}

// Function to update project card links to point to project detail pages
function updateProjectLinks() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const title = card.querySelector('.project-card__title').textContent;
        let projectId = '';

        // Find project ID from title
        for (const id in projectsData) {
            if (projectsData[id].title === title) {
                projectId = id;
                break;
            }
        }

        if (projectId) {
            // Update the corner link
            const cornerLink = card.querySelector('.project-card__go-corner').closest('a');
            if (cornerLink) {
                cornerLink.href = `project.html?project=${projectId}`;
            } else {
                const corner = card.querySelector('.project-card__go-corner');
                const newLink = document.createElement('a');
                newLink.href = `project.html?project=${projectId}`;
                corner.parentNode.replaceChild(newLink, corner);
                newLink.appendChild(corner);
            }

            // Add click event to the entire card
            card.addEventListener('click', function (e) {
                // Prevent navigation if clicking on existing links (like GitHub)
                if (e.target.tagName === 'A' || e.target.closest('a') !== null && e.target.closest('a') !== cornerLink) {
                    e.stopPropagation();
                    return;
                }

                window.location.href = `project.html?project=${projectId}`;
            });

            // Make the card look clickable
            card.style.cursor = 'pointer';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on project detail page
    if (document.getElementById('project-details-container')) {
        loadProjectDetails();
    } else {
        // We're on the main page
        updateProjectLinks();
    }
});

// Expose the function for use in HTML onclick attributes
window.changeGalleryImage = changeGalleryImage;