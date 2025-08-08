(function () {
	// Configuration
	const config = {
		API_URL: "http://13.222.155.33:8000/chat",
		WIDGET_ID: "custom-chatbot-widget",
		BUTTON_ID: "chatbot-toggle-btn",
		MODAL_ID: "chatbot-modal",
		MAX_HISTORY: 10,
		TYPING_DELAY: 15,
		TYPING_MAX_DELAY: 2000,
		TYPING_SKIP_THRESHOLD: 150,
		// Personalization settings (can be customized per website)
		ownerName: "Owner", // Default owner name - should be customized per website
		greeting:
			"Hi there! I'm your Virtual Assistant. Feel free to ask me anything.",
		assistantName: "Virtual Assistant",
		// Improved color palette
		colors: {
			light: {
				primary: "#4F46E5", // Indigo for buttons/user messages
				primaryHover: "#4338CA", // Darker indigo for hover
				secondary: "#F9FAFB", // Light gray for headers
				accent: "#10B981", // Emerald for bot messages
				background: "#FFFFFF", // White background
				text: "#111827", // Dark gray for text
				textSecondary: "#6B7280", // Medium gray for secondary text
				border: "#E5E7EB", // Light gray for borders
				codeBg: "#F3F4F6", // Light gray for code blocks
				inputBg: "#F9FAFB", // Light background for inputs
			},
			dark: {
				primary: "#6366F1", // Lighter indigo for buttons/user messages
				primaryHover: "#818CF8", // Lighter indigo for hover
				secondary: "#1F2937", // Dark gray for headers
				accent: "#34D399", // Lighter emerald for bot messages
				background: "#111827", // Dark background
				text: "#F9FAFB", // Light gray for text
				textSecondary: "#D1D5DB", // Medium gray for secondary text
				border: "#374151", // Dark gray for borders
				codeBg: "#1E293B", // Dark blue-gray for code blocks
				inputBg: "#1F2937", // Dark background for inputs
			},
		},
	};

	// State
	let chatHistory = [];
	let isFirstOpen = true;
	let isBotTyping = false;
	let botId = null;
	let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

	// Load chat history from localStorage
	function loadHistory() {
		try {
			const savedHistory = localStorage.getItem(
				`chatbot-history-${botId}`
			);
			if (savedHistory) {
				chatHistory = JSON.parse(savedHistory);
				isFirstOpen = false;
			}
		} catch (e) {
			console.error("Failed to load chat history:", e);
		}
	}

	// Save chat history to localStorage
	function saveHistory() {
		try {
			localStorage.setItem(
				`chatbot-history-${botId}`,
				JSON.stringify(chatHistory)
			);
		} catch (e) {
			console.error("Failed to save chat history:", e);
		}
	}

	// Enhanced markdown parser with better formatting
	// Enhanced markdown parser with better formatting
	function parseMarkdown(text) {
		// Get current colors
		const colors = isDarkMode ? config.colors.dark : config.colors.light;

		// First, unescape HTML entities to handle bot output correctly
		let html = text
			.replace(/&amp;/g, "&")
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.replace(/&quot;/g, '"')
			.replace(/&#39;/g, "'");

		// Process markdown patterns in order of specificity
		// Code blocks first (triple backticks)
		html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
			// Extract language if specified (e.g., ```javascript)
			const languageMatch = code.match(/^(\w+)\n/);
			const language = languageMatch ? languageMatch[1] : "";
			const codeContent = languageMatch
				? code.replace(/^\w+\n/, "")
				: code;

			// Escape HTML in code to prevent rendering
			const escapedCode = codeContent
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;");

			return `<pre class="p-3 rounded-lg overflow-x-auto my-2" style="background-color: ${colors.codeBg};"><code class="language-${language}">${escapedCode}</code></pre>`;
		});

		// Inline code (single backticks)
		html = html.replace(/`([^`]+)`/g, (match, code) => {
			// Escape HTML in inline code
			const escapedCode = code
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;");

			return `<code class="px-1 py-0.5 rounded text-sm" style="background-color: ${colors.codeBg};">${escapedCode}</code>`;
		});

		// Bold text
		html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

		// Italic text
		html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

		// Underline text
		html = html.replace(/__(.*?)__/g, "<u>$1</u>");

		// Strikethrough text
		html = html.replace(/~~(.*?)~~/g, "<del>$1</del>");

		// Links
		html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
			return `<a href="${escapeHtml(
				url
			)}" target="_blank" rel="noopener noreferrer" class="hover:underline" style="color: ${
				colors.primary
			};">${escapeHtml(text)}</a>`;
		});

		// Unordered lists
		html = html.replace(
			/^[\s]*-[\s]+(.*$)/gm,
			'<li class="ml-4">• $1</li>'
		);

		// Ordered lists
		html = html.replace(
			/^[\s]*\d+\.[\s]+(.*$)/gm,
			'<li class="ml-4">• $1</li>'
		);

		// Wrap list items in ul tags
		html = html.replace(
			/(<li.*?>.*?<\/li>)/gs,
			'<ul class="list-disc pl-5 my-2">$1</ul>'
		);

		// Blockquotes
		html = html.replace(/^> (.*$)/gm, (match, content) => {
			return `<blockquote class="border-l-4 pl-4 py-1 my-2 italic" style="border-color: ${colors.primary}; color: ${colors.textSecondary};">${content}</blockquote>`;
		});

		// Headers
		html = html.replace(
			/^### (.*$)/gm,
			'<h3 class="text-lg font-semibold mt-3 mb-1">$1</h3>'
		);
		html = html.replace(
			/^## (.*$)/gm,
			'<h2 class="text-xl font-semibold mt-3 mb-2">$1</h2>'
		);
		html = html.replace(
			/^# (.*$)/gm,
			'<h1 class="text-2xl font-bold mt-3 mb-2">$1</h1>'
		);

		// Handle newlines
		html = html.replace(/\n/g, "<br>");

		return html;
	}

	// Helper function to escape HTML
	function escapeHtml(text) {
		const div = document.createElement("div");
		div.textContent = text;
		return div.innerHTML;
	}

	// Inject Tailwind CSS via CDN
	function injectStyles() {
		return new Promise((resolve, reject) => {
			if (window.tailwind) {
				resolve();
				return;
			}

			const tailwindScript = document.createElement("script");
			tailwindScript.src = "https://cdn.tailwindcss.com";
			tailwindScript.onload = () => {
				tailwind.config = {
					theme: {
						extend: {
							fontFamily: {
								sans: [
									"system-ui",
									"-apple-system",
									"Segoe UI",
									"Roboto",
									"sans-serif",
								],
							},
						},
					},
				};
				resolve();
			};
			tailwindScript.onerror = reject;
			document.head.appendChild(tailwindScript);
			// Inject Prism CSS for syntax highlighting
			const prismStyle = document.createElement("link");
			prismStyle.rel = "stylesheet";
			prismStyle.href =
				"https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-tomorrow.min.css";
			document.head.appendChild(prismStyle);
		});
	}

	// Create custom CSS animations
	function injectAnimations() {
		const style = document.createElement("style");
		style.textContent = `
      @keyframes slide-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-slide-in {
        animation: slide-in 0.2s ease-out;
      }
      @keyframes slide-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-slide-up {
        animation: slide-up 0.2s ease-out;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.05); }
      }
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce {
        animation: bounce 2s infinite;
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(79, 70, 229, 0.5); }
        50% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.8); }
      }
      .animate-glow {
        animation: glow 2s infinite;
      }
      .typing-indicator span {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #10B981;
        margin: 0 2px;
        animation: pulse 1.4s infinite ease-in-out both;
      }
      .typing-indicator span:nth-child(1) {
        animation-delay: -0.32s;
      }
      .typing-indicator span:nth-child(2) {
        animation-delay: -0.16s;
      }
      .message-content {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .message-content pre {
        white-space: pre-wrap;
        max-width: 100%;
      }
      .message-content code {
        white-space: pre-wrap;
      }
      .message-content ul {
        padding-left: 1.5rem;
      }
      .message-content li {
        margin-bottom: 0.25rem;
      }
      .message-content blockquote {
        margin: 0.5rem 0;
      }
      .message-content h1, .message-content h2, .message-content h3 {
        margin-top: 0.75rem;
        margin-bottom: 0.5rem;
      }
      .attention-grabber {
        animation: bounce 2s infinite;
      }
    `;
		document.head.appendChild(style);
		// Inject Prism JS for syntax highlighting
		const prismScript = document.createElement("script");
		prismScript.src =
			"https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js";
		prismScript.onload = () => {
			// Load additional languages if needed
			const languages = [
				"javascript",
				"python",
				"css",
				"markup",
				"bash",
				"vue",
				"react",
				"svelte",
				"angular",
				"html",
			];
			languages.forEach((lang) => {
				const langScript = document.createElement("script");
				langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-${lang}.min.js`;
				document.head.appendChild(langScript);
			});
		};
		document.head.appendChild(prismScript);
	}

	// Get bot_id from script tag
	function getBotId() {
		const scriptTag = document.querySelector(`script[data-bot-id]`);
		botId = scriptTag ? scriptTag.getAttribute("data-bot-id") : null;
		if (!botId) {
			console.error("Chatbot: No bot_id found");
			return false;
		}

		// Check for custom owner name in script tag
		const ownerName = scriptTag
			? scriptTag.getAttribute("data-name")
			: "Owner";
		if (ownerName && ownerName !== "Owner") {
			// Extract first name and capitalize first letter
			const firstName = ownerName.split(" ")[0]; // Get first part before space
			const capitalizedFirstName =
				firstName.charAt(0).toUpperCase() +
				firstName.slice(1).toLowerCase();

			config.ownerName = capitalizedFirstName;
			config.greeting = `Hi there! I'm ${capitalizedFirstName}'s Virtual Assistant. Feel free to ask me anything about ${capitalizedFirstName} or their work.`;
		}

		return true;
	}

	// Get current colors based on theme
	function getColors() {
		return isDarkMode ? config.colors.dark : config.colors.light;
	}

	// Update theme based on system preference
	function updateTheme() {
		isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
		document.documentElement.setAttribute(
			"data-theme",
			isDarkMode ? "dark" : "light"
		);

		const button = document.getElementById(config.BUTTON_ID);
		const modal = document.getElementById(config.MODAL_ID);

		if (button) {
			const colors = getColors();
			button.style.backgroundColor = colors.primary;
		}

		if (modal) {
			updateModalTheme();
		}
	}

	// Update modal theme
	// Update modal theme
	function updateModalTheme() {
		const modal = document.getElementById(config.MODAL_ID);
		if (!modal) return;
		const colors = getColors();
		const modalHeader = modal.querySelector("div");
		const chatMessages = document.getElementById("chat-messages");
		const chatInput = document.getElementById("chat-input");
		const sendButton = document.getElementById("send-message");

		// Update modal background and border
		modal.style.backgroundColor = colors.background;
		modal.style.borderColor = colors.border;

		if (modalHeader) {
			modalHeader.style.backgroundColor = colors.secondary;
			modalHeader.style.borderColor = colors.border;
			const headerText = modalHeader.querySelector("h3");
			if (headerText) {
				headerText.style.color = colors.text;
			}
		}

		if (chatMessages) {
			chatMessages.style.backgroundColor = colors.background;
		}

		if (chatInput) {
			chatInput.style.backgroundColor = colors.inputBg; // Use input background color
			chatInput.style.color = colors.text;
			chatInput.style.borderColor = colors.border;
		}

		if (sendButton) {
			sendButton.style.backgroundColor = colors.primary;
		}

		// Update all message bubbles
		const messages = chatMessages.querySelectorAll(".message-container");
		messages.forEach(updateMessageTheme);
	}

	// Update individual message theme
	function updateMessageTheme(messageContainer) {
		const isUser = messageContainer.classList.contains("user-message");
		const messageText = messageContainer.querySelector(".message-text");
		const tail = messageContainer.querySelector(".message-tail");

		if (!messageText || !tail) return;

		const colors = getColors();

		if (isUser) {
			messageText.style.backgroundColor = colors.primary;
			tail.style.borderBottomColor = colors.primary;
		} else {
			messageText.style.backgroundColor = colors.accent + "30"; // 30% opacity
			messageText.style.color = colors.text;
			tail.style.borderBottomColor = colors.accent + "30"; // 30% opacity
		}
	}

	// Create chat button with modern icon and attention animation
	// Create chat button with modern icon and attention animation
	function createButton() {
		const colors = getColors();
		const button = document.createElement("button");
		button.id = config.BUTTON_ID;
		button.className =
			"fixed bottom-6 right-6 z-[1000] text-white rounded-full p-3 sm:p-4 font-sans flex items-center gap-2 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-xl attention-grabber";
		button.style.backgroundColor = colors.primary;
		button.setAttribute("aria-label", "Open Virtual Assistant");
		button.setAttribute("aria-expanded", "false");
		button.innerHTML = `
      <svg class="w-7 h-7 text-white" viewBox="0 -1 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <!-- Rounded head -->
          <rect x="4.5" y="6.5" width="15" height="11" rx="4.5" ry="4.5" stroke="currentColor" fill="none"/>
          <!-- Eyes -->
          <circle cx="9" cy="12" r="1.2" fill="currentColor"/>
          <circle cx="15" cy="12" r="1.2" fill="currentColor"/>
          <!-- Antenna -->
          <line x1="12" y1="5" x2="12" y2="3" stroke="currentColor" stroke-linecap="round"/>
          <circle cx="12" cy="2.3" r="0.8" fill="currentColor"/>
      </svg>
      <span class="hidden sm:inline text-sm font-medium">Assistant</span>
    `;
		document.body.appendChild(button);
		// Stop animation after first interaction
		button.addEventListener("click", function stopAnimation() {
			button.classList.remove("attention-grabber");
			button.removeEventListener("click", stopAnimation);
		});
		return button;
	}

	// Create modal with modern design
	function createModal() {
		const colors = getColors();
		const modal = document.createElement("div");
		modal.id = config.MODAL_ID;
		modal.className =
			"hidden fixed bottom-24 right-6 z-[1000] w-[90vw] max-w-[400px] sm:max-w-[450px] rounded-2xl shadow-2xl flex flex-col backdrop-blur-sm bg-opacity-95 animate-slide-up max-h-[600px]";
		modal.style.backgroundColor = colors.background;
		modal.style.borderColor = colors.border;
		modal.setAttribute("role", "dialog");
		modal.setAttribute("aria-modal", "true");
		modal.setAttribute("aria-label", "Virtual Assistant conversation");
		modal.innerHTML = `
      <div class="p-4 flex justify-between items-center rounded-t-2xl" style="background-color: ${colors.secondary}; border-color: ${colors.border};">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background-color: ${colors.accent};">
            <svg class="w-7 h-7 text-white" viewBox="0 -1 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <!-- Rounded head -->
                <rect x="4.5" y="6.5" width="15" height="11" rx="4.5" ry="4.5" stroke="currentColor" fill="none"/>
                <!-- Eyes -->
                <circle cx="9" cy="12" r="1.2" fill="currentColor"/>
                <circle cx="15" cy="12" r="1.2" fill="currentColor"/>
                <!-- Antenna -->
                <line x1="12" y1="5" x2="12" y2="3" stroke="currentColor" stroke-linecap="round"/>
                <circle cx="12" cy="2.3" r="0.8" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h3 class="m-0 font-sans text-lg font-semibold" style="color: ${colors.text};">${config.ownerName}'s ${config.assistantName}</h3>
            <p class="m-0 text-xs" style="color: ${colors.textSecondary};">Digital representative</p>
          </div>
        </div>
        <div class="flex gap-2">
          <button id="clear-history" class="bg-transparent border-none cursor-pointer transition-colors duration-200" style="color: ${colors.textSecondary};" aria-label="Clear conversation">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
          <button id="close-modal" class="bg-transparent border-none cursor-pointer transition-colors duration-200" style="color: ${colors.textSecondary};" aria-label="Close Virtual Assistant">✕</button>
        </div>
      </div>
      <div id="chat-messages" class="flex-1 p-4 overflow-y-auto max-h-[600px] space-y-3" style="background-color: ${colors.background};"></div>
      <div class="p-4 flex gap-3" style="border-color: ${colors.border};">
        <input
          id="chat-input"
          type="text"
          placeholder="Ask about ${config.ownerName}..."
          class="flex-1 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
          style="background-color: ${colors.inputBg}; color: ${colors.text}; border-color: ${colors.border};"
          aria-label="Type your question"
        />
        <button
          id="send-message"
          class="px-4 py-3 text-white rounded-lg hover:scale-105 transition-all duration-200 text-sm shadow-sm"
          style="background-color: ${colors.primary};"
          aria-label="Send message"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    `;
		document.body.appendChild(modal);
		return modal;
	}

	// Create modern bot avatar (representing the document owner)
	function createBotAvatar() {
		const colors = getColors();
		const avatar = document.createElement("div");
		avatar.className =
			"w-8 h-8 rounded-full flex items-center justify-center shrink-0";
		avatar.style.backgroundColor = colors.accent;
		avatar.innerHTML = `
			<svg class="w-7 h-7 text-white" viewBox="0 -1 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<!-- Rounded head -->
				<rect x="4.5" y="6.5" width="15" height="11" rx="4.5" ry="4.5" stroke="currentColor" fill="none"/>
				<!-- Eyes -->
				<circle cx="9" cy="12" r="1.2" fill="currentColor"/>
				<circle cx="15" cy="12" r="1.2" fill="currentColor"/>
				<!-- Antenna -->
				<line x1="12" y1="5" x2="12" y2="3" stroke="currentColor" stroke-linecap="round"/>
				<circle cx="12" cy="2.3" r="0.8" fill="currentColor"/>
			</svg>
		`;
		return avatar;
	}

	// Create modern user avatar
	function createUserAvatar() {
		const colors = getColors();
		const avatar = document.createElement("div");
		avatar.className =
			"w-8 h-8 rounded-full flex items-center justify-center shrink-0";
		avatar.style.backgroundColor = colors.primary;
		avatar.innerHTML = `
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    `;
		return avatar;
	}

	// Create typing indicator
	// Create typing indicator
	function createTypingIndicator() {
		const colors = getColors();
		const indicator = document.createElement("div");
		indicator.className =
			"flex flex-row items-start gap-2 mb-3 typing-indicator-container";
		indicator.innerHTML = `
      ${createBotAvatar().outerHTML}
      <div class="p-3 rounded-2xl text-sm rounded-bl-none" style="background-color: ${
			colors.accent + "20" // 20% opacity for better visibility
		};">
        <div class="typing-indicator">
          <span style="background-color: ${colors.accent};"></span>
          <span style="background-color: ${colors.accent};"></span>
          <span style="background-color: ${colors.accent};"></span>
        </div>
      </div>
    `;
		return indicator;
	}

	// Add message to chat
	function addMessage(sender, text, isTypingEffect = false) {
		const messages = document.getElementById("chat-messages");
		const colors = getColors();
		const isUser = sender === "You";
		const messageContainer = document.createElement("div");
		messageContainer.className = `flex ${
			isUser ? "flex-row-reverse" : "flex-row"
		} items-start gap-2 mb-3 animate-slide-in message-container ${
			isUser ? "user-message" : "bot-message"
		}`;

		const messageText = document.createElement("div");
		messageText.className =
			"p-3 rounded-2xl text-sm max-w-[80%] relative message-text";

		if (isUser) {
			messageText.style.backgroundColor = colors.primary;
			messageText.classList.add("text-white", "rounded-br-none");
		} else {
			messageText.style.backgroundColor = colors.accent + "30"; // 30% opacity
			messageText.style.color = colors.text;
			messageText.classList.add("rounded-bl-none");
		}

		// Add timestamp
		const timestamp = document.createElement("div");
		timestamp.className = `text-xs mt-1 ${
			isUser ? "text-right" : "text-left"
		}`;
		timestamp.style.color = colors.textSecondary;
		timestamp.textContent = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});

		const tail = document.createElement("div");
		tail.className = `absolute bottom-0 message-tail ${
			isUser
				? "right-[-8px] border-r-8 border-b-8 border-r-transparent"
				: "left-[-8px] border-l-8 border-b-8 border-l-transparent"
		}`;

		if (isUser) {
			tail.style.borderBottomColor = colors.primary;
		} else {
			tail.style.borderBottomColor = colors.accent + "30"; // 30% opacity
		}

		messageText.appendChild(tail);

		if (isUser) {
			messageContainer.appendChild(messageText);
			messageContainer.appendChild(createUserAvatar());
		} else {
			const avatar = createBotAvatar();
			messageContainer.appendChild(avatar);
			messageContainer.appendChild(messageText);

			// Add copy button for bot messages
			const copyButton = document.createElement("button");
			copyButton.className =
				"absolute top-1 right-1 p-1 rounded-full bg-transparent hover:bg-black/10 transition-colors duration-200";
			copyButton.style.color = colors.textSecondary;
			copyButton.setAttribute("aria-label", "Copy message");
			copyButton.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
      `;
			copyButton.addEventListener("click", () => {
				navigator.clipboard.writeText(text).then(() => {
					copyButton.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          `;
					setTimeout(() => {
						copyButton.innerHTML = `
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            `;
					}, 2000);
				});
			});
			messageText.appendChild(copyButton);
		}

		// Add message container to DOM
		messages.appendChild(messageContainer);

		// Add timestamp
		const timestampContainer = document.createElement("div");
		timestampContainer.className = `w-full ${
			isUser ? "text-right" : "text-left"
		}`;
		timestampContainer.appendChild(timestamp);
		messages.appendChild(timestampContainer);

		// Handle typing effect
		if (!isUser && isTypingEffect) {
			// Skip typing effect for long messages
			if (text.length > config.TYPING_SKIP_THRESHOLD) {
				messageText.innerHTML = `<div class="message-content">${parseMarkdown(
					text
				)}</div>`;
				messages.scrollTop = messages.scrollHeight;
				return;
			}

			const messageContent = document.createElement("div");
			messageContent.className = "message-content";
			messageText.appendChild(messageContent);

			// Create skip button
			const skipButton = document.createElement("button");
			skipButton.className = "text-xs mt-1 self-start";
			skipButton.style.color = colors.primary;
			skipButton.textContent = "Skip typing";
			skipButton.addEventListener("click", () => {
				clearInterval(typingInterval);
				clearTimeout(maxTimeout);
				messageContent.innerHTML = parseMarkdown(text);
				skipButton.remove();
				messages.scrollTop = messages.scrollHeight;
			});
			messageContainer.appendChild(skipButton);

			let i = 0;
			const maxTime = Math.min(
				text.length * config.TYPING_DELAY,
				config.TYPING_MAX_DELAY
			);
			let elapsed = 0;

			const typeWriter = () => {
				if (i < text.length && elapsed < maxTime) {
					// Type a chunk of text (faster for long messages)
					const chunkSize = Math.max(1, Math.floor(text.length / 20));
					const end = Math.min(i + chunkSize, text.length);

					messageContent.textContent = text.substring(0, end);
					i = end;
					elapsed += config.TYPING_DELAY;
					messages.scrollTop = messages.scrollHeight;

					typingInterval = setTimeout(
						typeWriter,
						config.TYPING_DELAY
					);
				} else {
					// Typing complete
					messageContent.innerHTML = parseMarkdown(text);
					skipButton.remove();
					messages.scrollTop = messages.scrollHeight;
				}
			};

			let typingInterval = setTimeout(typeWriter, config.TYPING_DELAY);

			// Set a maximum time for the typing effect
			const maxTimeout = setTimeout(() => {
				clearInterval(typingInterval);
				messageContent.innerHTML = parseMarkdown(text);
				skipButton.remove();
				messages.scrollTop = messages.scrollHeight;
			}, maxTime);
		} else {
			// No typing effect, just add the text
			messageText.innerHTML = `<div class="message-content">${parseMarkdown(
				text
			)}</div>`;
			messages.scrollTop = messages.scrollHeight;
		}
		// Add this at the end of the addMessage function
		if (typeof Prism !== "undefined") {
			Prism.highlightAllUnder(messages);
		}
	}

	// Send message to API
	async function sendMessage() {
		const input = document.getElementById("chat-input");
		const question = input.value.trim();
		if (!question || isBotTyping) return;

		// Add user message to chat
		chatHistory.push({
			sender: "You",
			text: question,
			timestamp: new Date().toISOString(),
		});
		addMessage("You", question);
		input.value = "";

		// Save history
		saveHistory();

		// Limit history size
		if (chatHistory.length > config.MAX_HISTORY) {
			chatHistory = chatHistory.slice(-config.MAX_HISTORY);
		}

		// Show typing indicator
		const messages = document.getElementById("chat-messages");
		const typingIndicator = createTypingIndicator();
		messages.appendChild(typingIndicator);
		messages.scrollTop = messages.scrollHeight;
		isBotTyping = true;

		// Disable send button while waiting for response
		const sendButton = document.getElementById("send-message");
		sendButton.disabled = true;
		sendButton.classList.add("opacity-50", "cursor-not-allowed");

		try {
			const response = await fetch(config.API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					question,
					bot_id: botId,
					history: chatHistory.map(({ sender, text }) => ({
						sender,
						text,
					})),
				}),
			});

			if (!response.ok)
				throw new Error(`HTTP error! Status: ${response.status}`);

			const data = await response.json();

			// Remove typing indicator
			messages.removeChild(typingIndicator);

			// Add bot response to chat
			chatHistory.push({
				sender: "Assistant",
				text: data.answer,
				timestamp: new Date().toISOString(),
			});
			addMessage("Assistant", data.answer, true);

			// Save history
			saveHistory();
		} catch (error) {
			console.error("Assistant error:", error.message);

			// Remove typing indicator
			messages.removeChild(typingIndicator);

			// Add error message
			chatHistory.push({
				sender: "Assistant",
				text: "I'm sorry, I'm having trouble responding right now. Please try again later.",
				timestamp: new Date().toISOString(),
			});
			addMessage(
				"Assistant",
				"I'm sorry, I'm having trouble responding right now. Please try again later."
			);

			// Save history
			saveHistory();
		} finally {
			// Re-enable send button
			sendButton.disabled = false;
			sendButton.classList.remove("opacity-50", "cursor-not-allowed");
			isBotTyping = false;
			input.focus();
		}
	}

	// Clear chat history
	function clearHistory() {
		if (
			confirm("Are you sure you want to clear the conversation history?")
		) {
			chatHistory = [];
			saveHistory();
			refreshMessages();

			// Show greeting message
			addMessage("Assistant", config.greeting);
		}
	}

	// Refresh messages in chat
	function refreshMessages() {
		const messages = document.getElementById("chat-messages");
		messages.innerHTML = "";

		if (chatHistory.length === 0) {
			// Show greeting message
			addMessage("Assistant", config.greeting);
		} else {
			// Show existing messages
			chatHistory.forEach(({ sender, text }) => {
				addMessage(sender, text);
			});
		}
	}

	// Toggle chat modal
	function toggleModal() {
		const modal = document.getElementById(config.MODAL_ID);
		const button = document.getElementById(config.BUTTON_ID);
		const isOpen = !modal.classList.contains("hidden");

		if (isOpen) {
			modal.classList.add("hidden");
			button.setAttribute("aria-expanded", "false");
		} else {
			modal.classList.remove("hidden");
			button.setAttribute("aria-expanded", "true");

			if (isFirstOpen && chatHistory.length === 0) {
				addMessage("Assistant", config.greeting);
				isFirstOpen = false;
			} else {
				refreshMessages();
			}

			document.getElementById("chat-input").focus();
		}
	}

	// Close modal when clicking outside
	function handleOutsideClick(event) {
		const modal = document.getElementById(config.MODAL_ID);
		const button = document.getElementById(config.BUTTON_ID);

		if (
			!modal.classList.contains("hidden") &&
			!modal.contains(event.target) &&
			!button.contains(event.target)
		) {
			modal.classList.add("hidden");
			button.setAttribute("aria-expanded", "false");
		}
	}

	// Initialize event listeners
	function initEventListeners() {
		const button = document.getElementById(config.BUTTON_ID);
		const modal = document.getElementById(config.MODAL_ID);

		// Toggle modal on button click
		button.addEventListener("click", toggleModal);

		// Close modal on close button click
		document
			.getElementById("close-modal")
			.addEventListener("click", toggleModal);

		// Clear history on clear button click
		document
			.getElementById("clear-history")
			.addEventListener("click", clearHistory);

		// Send message on send button click
		document
			.getElementById("send-message")
			.addEventListener("click", sendMessage);

		// Send message on Enter key press
		document
			.getElementById("chat-input")
			.addEventListener("keypress", (e) => {
				if (e.key === "Enter" && !e.shiftKey) {
					e.preventDefault();
					sendMessage();
				}
			});

		// Keyboard accessibility for button
		button.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				toggleModal();
			}
		});

		// Keyboard accessibility for close button
		document
			.getElementById("close-modal")
			.addEventListener("keydown", (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					toggleModal();
				}
			});

		// Close modal when clicking outside
		document.addEventListener("click", handleOutsideClick);

		// Listen for theme changes
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", updateTheme);
	}

	// Initialize the chatbot widget
	async function init() {
		try {
			// Get bot ID
			if (!getBotId()) {
				console.error(
					"Failed to initialize Virtual Assistant: Missing bot_id"
				);
				return;
			}

			// Load chat history
			loadHistory();

			// Inject styles
			await injectStyles();
			injectAnimations();

			// Create UI elements
			createButton();
			createModal();

			// Initialize event listeners
			initEventListeners();

			// Apply initial theme
			updateTheme();
		} catch (error) {
			console.error("Failed to initialize Virtual Assistant:", error);
		}
	}

	// Start initialization when DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
