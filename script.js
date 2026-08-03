// Function to hide main categories and show specific events
function showCategory(categoryName, eventCount) {
    const mainView = document.getElementById('main-categories');
    const detailView = document.getElementById('category-details');
    const detailTitle = document.getElementById('detail-title');
    const detailGrid = document.getElementById('detail-grid');

    // Set the title to whichever category was clicked
    detailTitle.textContent = categoryName;

    // Clear old placeholders and generate new ones
    detailGrid.innerHTML = ''; 
    for(let i = 1; i <= eventCount; i++) {
        // Alternate between Team and Individual for the placeholders
        const type = i % 2 === 0 ? 'Team' : 'Individual';
        
        detailGrid.innerHTML += `
            <div class="card event-card">
                <span class="tag-red">${type}</span>
                <h3>Placeholder Event ${i}</h3>
                <div class="event-details">
                    <p><strong>First Round:</strong> Written test covering general concepts.</p>
                    <p><strong>Final Round:</strong> On-site presentation and challenge.</p>
                    <p><strong>Deliverables:</strong> Digital portfolio and physical model.</p>
                </div>
            </div>
        `;
    }

    // Smooth transition
    mainView.style.display = 'none';
    detailView.classList.remove('hidden');
    detailView.classList.add('fade-enter');
}

// Function to go back to the main categories
function showMain() {
    const mainView = document.getElementById('main-categories');
    const detailView = document.getElementById('category-details');

    detailView.classList.add('hidden');
    detailView.classList.remove('fade-enter');
    mainView.style.display = 'block';
    mainView.classList.add('fade-enter');
}