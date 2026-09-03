/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active');
  });
});


/* =====================================================
   STICKY HEADER with scroll backdrop
===================================================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background   = 'rgba(7,25,45,0.96)';
    header.style.backdropFilter = 'blur(12px)';
    header.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
  } else {
    header.style.background   = 'transparent';
    header.style.backdropFilter = 'none';
    header.style.borderBottom = 'none';
  }
});


/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id === '#' || !document.querySelector(id)) return;
    e.preventDefault();
    const el = document.querySelector(id);
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* =====================================================
   ANIMATED COUNTERS
===================================================== */

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('button');

  button.addEventListener('click', () => {
    const alreadyOpen = item.classList.contains('active');

    faqItems.forEach(other => {
      other.classList.remove('active');
      other.querySelector('button').setAttribute('aria-expanded', 'false');
    });

    if (!alreadyOpen) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});


/* =====================================================
   CONTACT FORM — basic UX feedback
===================================================== */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const submitBtn = contactForm.querySelector('#form-submit-btn');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const original = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '.7';

    // Simulate async submission
    setTimeout(() => {
      submitBtn.textContent = '✓ Message Sent!';
      submitBtn.style.background = '#22c77b';
      submitBtn.style.borderColor = '#22c77b';
      submitBtn.style.opacity = '1';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.textContent = original;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
        submitBtn.disabled = false;
      }, 3500);
    }, 1200);
  });
}


/* =====================================================
   LIVE TRANSFER LOG — auto-refreshing rows
===================================================== */

const FILES = [
  'audit_report.pdf', 'classified_brief.docx', 'q3_results.xlsx',
  'patient_data.zip', 'risk_model_v2.pkl', 'api_response.json',
  'schema_update.sql', 'ml_training_set.csv', 'policy_docs.pdf',
  'network_log.tar.gz'
];

const SIZES = ['34.2 MB','128.7 MB','512.3 MB','89.1 MB','44.6 MB','1.2 GB','74.5 MB','320.1 MB','55.7 MB','230.0 MB'];

function pad(n) { return String(n).padStart(2,'0'); }

function randomRow() {
  const now  = new Date();
  const time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  const file = FILES[Math.floor(Math.random() * FILES.length)];
  const size = SIZES[Math.floor(Math.random() * SIZES.length)];
  return { time, file, size };
}

const transferTable = document.querySelector('.transfer-table');

if (transferTable) {
  setInterval(() => {
    const rows = transferTable.querySelectorAll('.table-row');
    const { time, file, size } = randomRow();

    // Build new row
    const row = document.createElement('div');
    row.className = 'table-row animating-row';
    row.innerHTML = `
      <span>${time}</span>
      <span>${file}</span>
      <span>Domain A &#8594; Domain B</span>
      <span class="completed">&#10003; Completed</span>
      <span>${size}</span>`;

    // Remove oldest if more than 5
    if (rows.length >= 5) rows[rows.length - 1].remove();
    transferTable.insertBefore(row, rows[0]);
  }, 4000);
}

