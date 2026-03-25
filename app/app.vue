<template>
  <div class="page">
    <main>
      <header>
        <div class="logo">
          <span class="logo-icon">⬡</span>
          <span class="logo-text">filepost<span class="tld">.io</span></span>
        </div>
      </header>

      <section class="hero">
        <div class="badge">Service discontinued</div>
        <h1>File sharing,<br /><span class="muted">simplified.</span></h1>
        <p class="subtitle">
          filepost.io was a fast, no-fuss way to share large files with anyone —
          no account required, no size anxiety, no nonsense.
        </p>
        <p class="shutdown-notice">
          After 7 years of helping people move files around the internet, we've
          shut down the service. Thank you to everyone who used filepost.io.
        </p>
      </section>

      <section class="credits">
        <div class="credit-item">
          <span class="credit-label">Sponsored by</span>
          <a href="https://booksinorderlist.com" target="_blank" rel="noopener">booksinorderlist.com</a>
        </div>
        <div class="credit-item">
          <span class="credit-label">Domain or source code inquiries</span>
          <a href="https://linkedin.com/in/dapatil" target="_blank" rel="noopener">linkedin.com/in/dapatil</a>
        </div>
      </section>

      <section class="features">
        <div class="feature">
          <span class="feature-icon">⚡</span>
          <h3>Fast uploads</h3>
          <p>Direct-to-storage transfers with no intermediary bottlenecks.</p>
        </div>
        <div class="feature">
          <span class="feature-icon">🔒</span>
          <h3>Private links</h3>
          <p>
            Shareable URLs that only work for the people you send them to.
          </p>
        </div>
        <div class="feature">
          <span class="feature-icon">📦</span>
          <h3>Large files</h3>
          <p>
            Built for the files that don't fit in an email attachment.
          </p>
        </div>
      </section>
    </main>

    <footer>
      <p>
        &copy; {{ new Date().getFullYear() }} filepost.io &mdash; All rights
        reserved.
      </p>
    </footer>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0a0a0f;
  --surface: #111118;
  --border: rgba(255, 255, 255, 0.07);
  --text: #e8e8f0;
  --muted: #6b6b80;
  --accent: #5b6ef5;
  --accent-soft: rgba(91, 110, 245, 0.12);
  --radius: 12px;
  --font: "Inter", system-ui, -apple-system, sans-serif;
}

html {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  max-width: 860px;
  margin: 0 auto;
  padding: 64px 24px 80px;
  width: 100%;
}

/* Header */
header {
  margin-bottom: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.logo-icon {
  color: var(--accent);
  font-size: 1.4rem;
}

.tld {
  color: var(--muted);
}

/* Hero */
.hero {
  margin-bottom: 72px;
}

.badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 4px 14px;
  margin-bottom: 28px;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 24px;
}

.muted {
  color: var(--muted);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--muted);
  max-width: 560px;
  margin-bottom: 20px;
  line-height: 1.7;
}

.shutdown-notice {
  font-size: 0.9375rem;
  color: var(--muted);
  max-width: 560px;
  padding: 16px 20px;
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius) var(--radius) 0;
  line-height: 1.6;
}

/* Credits */
.credits {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 56px;
}

.credit-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 16px;
  font-size: 0.875rem;
}

.credit-label {
  color: var(--muted);
}

.credit-item a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}

.credit-item a:hover {
  text-decoration: underline;
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}

.feature-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 12px;
}

.feature h3 {
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 6px;
}

.feature p {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.6;
}

/* Footer */
footer {
  border-top: 1px solid var(--border);
  padding: 24px;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--muted);
}

@media (max-width: 480px) {
  main {
    padding: 40px 20px 60px;
  }

  header {
    margin-bottom: 56px;
  }

  .hero {
    margin-bottom: 48px;
  }
}
</style>
