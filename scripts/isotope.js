document.addEventListener('DOMContentLoaded', function () {
    // Initialize Isotope
    const portfolioIsotope = document.querySelector('.portfolio-isotope');
    const portfolioContainer = portfolioIsotope.querySelector('.portfolio-container');
  
    const iso = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.portfolio-item',
      },
    });
  
    // Filter buttons
    const filterButtons = portfolioIsotope.querySelectorAll('.portfolio-flters li');
  
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('filter-active'));
        // Add active class to the clicked button
        this.classList.add('filter-active');
  
        // Get the filter value from the data-filter attribute
        const filterValue = this.getAttribute('data-filter');
  
        // Use Isotope to filter items
        iso.arrange({
          filter: filterValue,
        });
      });
    });
  });