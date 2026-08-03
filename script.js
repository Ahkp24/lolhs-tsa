// --- YOUR EVENT DATABASE ---
// Edit all your specific event text, types, and links right here.
const eventData = {

    'Computer Science': [
        {
            name: "Coding",
            type: "Individual",
            firstRound: "Written test covering syntax and logic.",
            finalRound: "On-site 2-hour programming challenge.",
            deliverables: "Working code executable.",
            link: "https://tsaweb.org/events" // Put the real PDF/Link here
        },
        {
            name: "Video Game Design",
            type: "Team",
            firstRound: "Submission of playable game and portfolio.",
            finalRound: "On-site interview and game demonstration.",
            deliverables: "Digital game file and engineering notebook.",
            link: "https://tsaweb.org/events"
        }
        // Just add a comma and paste another block for the 3rd, 4th, 5th event...
    ],

    'Architecture & Construction': [
        {
            name: "Architectural Design",
            type: "Team",
            firstRound: "Preliminary portfolio review.",
            finalRound: "On-site presentation of model.",
            deliverables: "Physical model and digital portfolio.",
            link: "https://tsaweb.org/events"
        }
    ],

    'Communications Tech': [], // Add your event blocks inside the brackets!
    'Leadership': [],
    'Manufacturing & Transportation': [],
    'STEM (General)': [],
    'STEM and the Arts': [],
    'Technology & Research': []
};


// --- THE LOGIC (Do not edit below here) ---
function showCategory(categoryName) {
    const mainView = document.getElementById('main-categories');
    const detailView = document.getElementById('category-details');
    const detailTitle = document.getElementById('detail-title');
    const detailGrid = document.getElementById('detail-grid');

    // Set the title
    detailTitle.textContent = categoryName;

    // Clear old boxes
    detailGrid.innerHTML = ''; 

    // Pull the specific list of events from your database above
    const events = eventData[categoryName];

    // If there are events listed, build the HTML boxes automatically
    if (events && events.length > 0) {
        events.forEach(event => {
            detailGrid.innerHTML += `
                <div class="card event-card">
                    <span class="tag-red">${event.type}</span>
                    <h3>${event.name}</h3>
                    <div class="event-details">
                        <p><strong>First Round:</strong> ${event.firstRound}</p>
                        <p><strong>Final Round:</strong> ${event.finalRound}</p>
                        <p><strong>Deliverables:</strong> ${event.deliverables}</p>
                    </div>
                    <br>
                    <a href="${event.link}" target="_blank" class="btn-main" style="padding: 8px 16px; font-size: 0.85rem;">View Official Guidelines</a>
                </div>
            `;
        });
    } else {
        // Fallback if you haven't typed the events in yet
        detailGrid.innerHTML = '<p style="color: #a0b2c6;">Event details are being updated. Check back soon!</p>';
    }

    // Smooth transition
    mainView.style.display = 'none';
    detailView.classList.remove('hidden');
    detailView.classList.add('fade-enter');
}

function showMain() {
    const mainView = document.getElementById('main-categories');
    const detailView = document.getElementById('category-details');

    detailView.classList.add('hidden');
    detailView.classList.remove('fade-enter');
    mainView.style.display = 'block';
    mainView.classList.add('fade-enter');
}