/**
 * PIUS DEVELOPER PORTFOLIO - VANILLA JS SCRIPT
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinksContainer = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Header Scroll Glass Shadow Effect
  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Mobile Menu Toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navLinksContainer.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Smooth Scroll & Close Mobile Menu
  const anchorLinks = document.querySelectorAll("a[href^='#']");
  anchorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();

          // Close mobile menu if open
          if (mobileToggle?.classList.contains("active")) {
            mobileToggle.classList.remove("active");
            navLinksContainer?.classList.remove("active");
            document.body.classList.remove("menu-open");
          }

          // Smooth scroll taking sticky header height into account
          const headerHeight = header ? header.offsetHeight : 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Active Section Indicator (Scroll Spy)
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  // Scroll Reveal Animations via Intersection Observer
  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".about-content, .about-glass-card, .skills-header, .skills-card, .projects-header, .project-card, .services-header, .service-card, .journey-header, .timeline-item, .contact-header, .contact-info-wrapper, .contact-form"
  );

  animateElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
  });
});
