<script setup>
import { ref, onMounted, nextTick } from 'vue';
import MarkdownIt from 'markdown-it';

// Initialize markdown parser
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

// Custom renderer for code blocks with copy button
md.renderer.rules.fence = function(tokens, idx) {
  const token = tokens[idx];
  const code = token.content;
  
  return `
    <div class="code-block-container">
      <button class="copy-button" data-code="${encodeURIComponent(code)}" title="Copy code">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
          <path d="m4 16c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
        </svg>
      </button>
      <pre class="code-pre"><code class="code-content">${md.utils.escapeHtml(code)}</code></pre>
    </div>
  `;
};

// Reactive state for rendered content
const renderedContent = ref('<p class="text-center text-indigo-600 py-8">Loading user guide...</p>');

// Fetch markdown client-side on mount
onMounted(async () => {
  try {
    const response = await fetch('/docative-user-guide.md');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const markdownContent = await response.text();
    renderedContent.value = md.render(markdownContent);
    
    // Attach copy button functionality after rendering
    await nextTick();
    attachCopyButtons();
  } catch (err) {
    console.error('Failed to fetch markdown:', err);
    renderedContent.value = md.render('# Error\nFailed to load user guide. Please try again later.');
  }
});

// Function to attach copy button functionality
function attachCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-button');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const code = decodeURIComponent(button.getAttribute('data-code'));
      navigator.clipboard.writeText(code).then(() => {
        // Show checkmark icon when copied
        const originalHTML = button.innerHTML;
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        button.classList.add('copied');
        
        // Revert back after 2 seconds
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.classList.remove('copied');
        }, 2000);
      });
    });
  });
}
</script>

<template>
  <div class="docative-guide max-w-4xl mx-auto px-4 py-8">
    <div class="docative-content" v-html="renderedContent"></div>
  </div>
</template>

<style scoped>
.docative-guide {
  background: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  padding: 2rem;
  border: 1px solid #e5e7eb;
}

/* Markdown content styling */
:deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  color: #1e293b;
  position: relative;
  padding-bottom: 0.75rem;
}

:deep(h1::after) {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
}

:deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
  color: #334155;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

:deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;
  color: #475569;
}

:deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #475569;
}

:deep(ul), :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #475569;
  position: relative;
  padding-left: 0.5rem;
}

:deep(li::marker) {
  color: #8b5cf6;
  font-weight: bold;
}

:deep(ul > li::marker) {
  content: "• ";
  color: #8b5cf6;
}

:deep(ol > li::marker) {
  color: #6366f1;
}

:deep(a) {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

:deep(a:hover) {
  color: #4f46e5;
}

:deep(a::after) {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #6366f1;
  transition: width 0.3s ease;
}

:deep(a:hover::after) {
  width: 100%;
}

:deep(code) {
  background: #f1f5f9;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875em;
  color: #475569;
  border: 1px solid #e2e8f0;
}

:deep(pre) {
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  border: 1px solid #334155;
}

:deep(pre code) {
  background: none;
  padding: 0;
  color: #e2e8f0;
  border: none;
}

:deep(blockquote) {
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #64748b;
  font-style: italic;
  background: #f8fafc;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

/* Code block container with copy button */
:deep(.code-block-container) {
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
}

:deep(.copy-button) {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgb(118, 119, 171);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: #c7d2fe;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

:deep(.copy-button:hover) {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
  color: #a5b4fc;
}

:deep(.copy-button.copied) {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.4);
  color: #6ee7b7;
}

:deep(.copy-button svg) {
  width: 1rem;
  height: 1rem;
}

:deep(.code-pre) {
  background: #1e293b;
  padding: 1rem;
  margin: 0;
  overflow-x: auto;
}

:deep(.code-content) {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #e2e8f0;
}
</style>