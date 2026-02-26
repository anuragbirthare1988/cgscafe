// Collapsoible Accordion feature
document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      var item = this.closest('.accordion-item');
      var isOpen = item.getAttribute('data-state') === 'open';

      // Close all siblings in the same section
      item.parentElement.querySelectorAll('.accordion-item').forEach(function(sibling) {
        sibling.setAttribute('data-state', 'closed');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.setAttribute('data-state', 'open');
      }
    });
});

// Top -Bottom quick scrolling feature
const scrollToTopBtn = document.getElementById("to-top");
const scrollToBottomBtn = document.getElementById("to-bottom");

function updateButtons() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // At top
    if (scrollTop <= 10) {
    scrollToTopBtn.classList.add("disabled");
    } else {
    scrollToTopBtn.classList.remove("disabled");
    }

    // At bottom
    if (scrollTop + clientHeight >= scrollHeight - 10) {
    scrollToBottomBtn.classList.add("disabled");
    } else {
    scrollToBottomBtn.classList.remove("disabled");
    }
}

scrollToTopBtn.addEventListener("click", () => {
    if (!scrollToTopBtn.classList.contains("disabled")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

scrollToBottomBtn.addEventListener("click", () => {
    if (!scrollToBottomBtn.classList.contains("disabled")) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});

window.addEventListener("scroll", updateButtons);
window.addEventListener("load", updateButtons);