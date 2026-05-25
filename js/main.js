    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

    const navLinks = document.querySelectorAll('.nav-link');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const a = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { threshold: 0.45 });
    document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));
    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }