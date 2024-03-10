// Function to dynamically set the focus class based on URL
function setFocusBasedOnPathname() {
    // Get the current pathname
    var currentPathname = window.location.pathname;

    // Define an object mapping pathnames to nav link IDs
    var linkIdMap = {
        "about.html": "about-link",
        "skills.html": "skills-link",
        "experience.html": "experience-link",
        "projects.html": "projects-link",
        "nutritional-intake-project.html":"projects-link",
        "passenger-experience-project.html":"projects-link",
        "book-recommendation-project.html":"projects-link"
    };

    // Determine the base pathname for comparison, if your site is in a subdirectory
    var baseName = "/"; // Adjust this baseName as necessary

    // Normalize the currentPathname to remove the baseName if your site is in a subdirectory
    if (currentPathname.indexOf(baseName) === 0) {
        currentPathname = currentPathname.substring(baseName.length);
    }

    // Find the corresponding nav link ID for the current pathname
    var activeLinkId = linkIdMap[currentPathname];

    // If there's a corresponding link ID, add the focus class to it
    if (activeLinkId) {
        var activeLink = document.getElementById(activeLinkId);
        if (activeLink) activeLink.classList.add('focus');
        var activeLinkTop = document.getElementById(activeLinkId + '-top');
        if (activeLinkTop) activeLinkTop.classList.add('focus');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var headerContent = `
    <div class="title">
        <a href="index.html">Jiarui Tang</a>
    </div>
    <div>
        <ul class="nav-links">
        <li><a href="index.html#about" id="about-link-top">About</a></li>
        <li><a href="index.html#skills" id="skills-link-top">Skills</a></li>
        <li><a href="index.html#experience" id="experience-link-top">Experience</a></li>
        <li><a href="index.html#projects" id="projects-link-top">Projects</a></li>
        </ul>
    </div>
    `;
    var scrollnavContent = `
    <div class="title">
        <a href="index.html">Jiarui Tang</a>
    </div>
    <div>
        <ul class="nav-links">
        <li><a href="index.html#about" id="about-link">About</a></li>
        <li><a href="index.html#skills" id="skills-link">Skills</a></li>
        <li><a href="index.html#experience" id="experience-link">Experience</a></li>
        <li><a href="index.html#projects" id="projects-link">Projects</a></li>
        </ul>
    </div>
    <!-- Button to close the overlay navigation -->
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>`;
    var footerContent = `
    <footer id="footer">
		<div class="inner">
			<ul class="icons">
				<li><a href="https://www.linkedin.com/in/sherryjiaruitang" class="icon brands fa-linkedin" target=”_blank”><span class="label">LinkedIn</span></a></li>
				<li><a href="https://github.com/jiaruitang" class="icon brands fa-github" target=”_blank”><span class="label">Github</span></a></li>
				<li><a href="https://twitter.com/sherrytang14" class="icon brands fa-twitter" target=”_blank”><span class="label">Twitter</span></a></li>
				<li><a href="mailto:jiarui1@email.unc.edu?subject=Reach%20Out%20from%20" class="icon solid fa-envelope" target=”_blank”><span class="label">Email</span></a></li>
			</ul>
			<ul class="copyright">
				<li>&copy;  2024 Jiarui Tang</li>
				<li>All Rights Reserved.</li>
			</ul>
		</div>
    </footer>`;

    // Example condition: if not the home page
    if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
        document.getElementById('desktop-nav').innerHTML = headerContent;
        document.getElementById('scroll-nav').innerHTML = scrollnavContent;
        document.getElementById('pagefooter').innerHTML = footerContent;

    }

    // Call the function to set the focus based on pathname
    setFocusBasedOnPathname();
});

// Highlight the currently viewed section in the sidebar.
document.addEventListener("DOMContentLoaded", function() {
    
    function onScroll() {
        let sidebarItems = document.querySelectorAll('#child-sidebar .sidebar-item');
        if ($("#child-sidebar").css('display')=='none') {
            sidebarItems = document.querySelectorAll('#mobile-sidebar .sidebar-item');
        }
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        sidebarItems.forEach((item) => {
            let target = document.getElementById(item.getAttribute('data-target'));
            if (target.offsetTop - 300 <= scrollPosition && (target.offsetTop + target.offsetHeight + 100) > scrollPosition) {
                sidebarItems.forEach((i) => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    
    onScroll(); // Initialize on load
});

// Sidebar on Mobile
function openSidebar() {
    document.getElementById("mobile-sidebar").classList.add('show');
}

// window.onclick = function(event) {
//     if (!event.target.matches('.sidebar.phone')) {
//         document.getElementById("mobile-sidebar").classList.remove('show');
//     }
// };

window.onmousedown = function(event) {
    if (!event.target.matches('.sidebar.phone')) {
        document.getElementById("mobile-sidebar").classList.remove('show');
    }
};

