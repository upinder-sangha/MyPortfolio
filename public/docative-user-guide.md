# Docative User Guide

## Overview of Docative

### What is Docative?

Docative is an AI-powered chatbot service that lets you create a custom chatbot from your documents (PDF, DOCX, TXT). Upload your content at [www.upindersangha.com/docative](https://www.upindersangha.com/docative), receive a script tag, and embed a chatbot on any website to answer questions based on your documents.

### What does Docative do?

Docative processes uploaded documents to create a chatbot that answers customer questions automatically, ideal for support, onboarding, or information retrieval.

### Why use Docative?

Docative saves time by automating answers, ensures consistency, and is easy to set up with no coding required. It works on any website, from static HTML to CMS platforms.

## Pricing

### What are the pricing options for Docative?

Docative offers two plans: Free and Pro (coming soon). Choose the plan that works best for you and upgrade as your needs grow.

### What is the Free plan?

The Free plan costs $0/month and is perfect for trying out Docative. It includes:

-   One chatbot per user
-   Basic customization
-   Easy website integration
-   Email support ([upindersangha01@gmail.com](mailto:upindersangha01@gmail.com))

### What is the Pro plan?

The Pro plan costs $19/month and is designed for power users and businesses. It includes:

-   Multiple chatbots
-   Automatic scraping of websites
-   Chat analytics
-   Advanced customization
-   Priority support

The Pro plan is coming soon. Contact [upindersangha01@gmail.com](mailto:upindersangha01@gmail.com) to be notified when it’s available.

### How do I sign up for a plan?

Go to [www.upindersangha.com/docative](https://www.upindersangha.com/docative) to start with the Free plan. For the Pro plan, contact [upindersangha01@gmail.com](mailto:upindersangha01@gmail.com) to join the waitlist.

## Creating a Chatbot

### How do I create a chatbot with Docative?

Go to [www.upindersangha.com/docative](https://www.upindersangha.com/docative), upload a PDF, DOCX, or TXT file, and enter your email. Docative processes the file and emails you a script tag to embed the chatbot.

### What file types are supported?

You can upload PDF, DOCX, or TXT files, up to 5MB in size.

### How long does it take to create a chatbot?

The process takes 1-2 minutes. After uploading, you’ll receive an email with the script tag.

### Can I upload multiple files?

Currently, Docative supports one file per chatbot. Combine multiple documents into a single file before uploading.

### What happens after uploading?

The file is parsed, chunked, and embedded using AI. A unique bot ID is generated, and a script tag is emailed to you for embedding.

### How do I prepare my document?

Use clear, well-organized text in your PDF, DOCX, or TXT file. Include headings, bullet points, or numbered lists to improve answer retrieval.

## Embedding the Chatbot

### How do I embed the Docative chatbot?

After uploading your file, you’ll receive a script tag like:

```html
<script
	src="https://www.upindersangha.com/docative-widget.js"
	data-bot-id="YOUR_BOT_ID"
	data-name="YOUR_NAME"
></script>
```

Paste it into your website’s HTML or framework code as described below.

### Embedding in Static & Custom Sites

#### How do I add the chatbot to a **plain HTML or static website**?

Paste the script tag before the closing `</body>` tag in your HTML:

```html
<html>
	<body>
		<!-- Your site content -->
		<!-- Embed Docative chatbot -->
		<script
			src="https://www.upindersangha.com/docative-widget.js"
			data-bot-id="YOUR_BOT_ID"
			data-name="YOUR_NAME"
		></script>
	</body>
</html>
```

### Embedding in JavaScript Frameworks

#### How do I add the chatbot to a **React** app?

In `App.js` or any component, use `useEffect`:

```javascript
import React, { useEffect } from "react";
function App() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://www.upindersangha.com/docative-widget.js";
		script.async = true;
		script.setAttribute("data-bot-id", "YOUR_BOT_ID");
		script.setAttribute("data-name", "YOUR_NAME");
		document.body.appendChild(script);
	}, []);
	return <div>Your app content</div>;
}
export default App;
```

#### How do I add the chatbot to a **Next.js** app?

In a page or layout file, use the `Script` component:

```javascript
import Script from 'next/script';
export default function MyPage() {
  return (
    <div>
      <!-- Your page content -->
      <Script
        src="https://www.upindersangha.com/docative-widget.js"
        strategy="afterInteractive"
        data-bot-id="YOUR_BOT_ID"
        data-name="YOUR_NAME"
      />
    </div>
  );
}
```

#### How do I add the chatbot to a **Vue.js** app?

In a component with `<script setup>`, use `onMounted`:

```javascript
<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.upindersangha.com/docative-widget.js';
  script.async = true;
  script.setAttribute('data-bot-id', 'YOUR_BOT_ID');
  script.setAttribute('data-name', 'YOUR_NAME');
  document.body.appendChild(script);
});
</script>
```

#### How do I add the chatbot to a **Nuxt** app?

In a page or layout component, use `onMounted`:

```javascript
<script setup>
import { useHead } from '#head';
useHead({
  script: [
    {
      src: 'https://www.upindersangha.com/docative-widget.js',
      async: true,
      'data-bot-id': 'YOUR_BOT_ID',
      'data-name': 'YOUR_NAME',
      tagPosition: 'bodyClose'
    }
  ],
})
</script>
```

#### How do I add the chatbot to an **Angular** app?

In a component’s `ngOnInit`:

```javascript
import { Component, OnInit } from "@angular/core";
@Component({
	selector: "app-chatbot",
	template: `<div>Your content</div>`,
})
export class ChatbotComponent implements OnInit {
	ngOnInit(): void {
		const script = document.createElement("script");
		script.src = "https://www.upindersangha.com/docative-widget.js";
		script.async = true;
		script.setAttribute("data-bot-id", "YOUR_BOT_ID");
		script.setAttribute("data-name", "YOUR_NAME");
		document.body.appendChild(script);
	}
}
```

### Embedding in CMS Platforms

#### How do I add the chatbot to **WordPress**?

With Elementor or Block Editor, add a Custom HTML Block and paste the script tag.
In theme code, edit `footer.php` before `</body>`:

```html
<script
	src="https://www.upindersangha.com/docative-widget.js"
	data-bot-id="YOUR_BOT_ID"
	data-name="YOUR_NAME"
></script>
```

#### How do I add the chatbot to **Shopify**?

Option 1: Go to Online Store > Themes > Edit Code, and paste the script tag in `theme.liquid` before `</body>`:

```html
<script
	src="https://www.upindersangha.com/docative-widget.js"
	data-bot-id="YOUR_BOT_ID"
	data-name="YOUR_NAME"
></script>
```

Option 2: For developers, use the ScriptTag API for advanced control.

#### How do I add the chatbot to **Webflow**?

In your project, go to Page Settings > Custom Code, and paste the script tag in the Before `</body>` tag section:

```html
<script
	src="https://www.upindersangha.com/docative-widget.js"
	data-bot-id="YOUR_BOT_ID"
	data-name="YOUR_NAME"
></script>
```

#### How do I add the chatbot to **Wix**?

Go to Settings > Custom Code, and paste the script tag in the Body – End location.

#### How do I add the chatbot to **Notion (via Super.so, Fruition, etc.)**?

If using a custom Notion wrapper that allows scripts, paste the script tag in the HTML injection panel.

### Can I embed the chatbot on multiple websites?

Yes, the script tag can be used on any website, as it’s tied to a unique bot ID.

### Does the chatbot work on mobile?

Yes, the chatbot is responsive and works on desktop and mobile websites.

## Using the Chatbot

### How does the chatbot work?

The chatbot uses AI to search your uploaded document and generate answers based on its content, providing natural-language responses.

### What questions can the chatbot answer?

It answers questions related to your uploaded document, such as product details, instructions, or policies. Ensure your document is clear and comprehensive.

### What if the chatbot can’t answer a question?

It will respond with a polite message suggesting you rephrase the question or contact support at [upindersangha01@gmail.com](mailto:upindersangha01@gmail.com).

### Can the chatbot handle multiple languages?

Currently, it supports English-only documents and responses. Multilingual support is planned for future updates.

## Use Cases

### What are the main use cases for Docative?

Docative is designed for anyone with a website who needs a chatbot that knows their content. Common users include Content Creators, Developers, Marketers, Educators, Support Teams, and E-commerce businesses.

-   **Personal Websites**: Upload your resume, CV, or portfolio to create a chatbot that represents you. Perfect for freelancers, job seekers, and professionals who want to make a strong impression.
-   **Small Businesses**: Create a chatbot that knows your products, services, and business hours. Provide instant customer support without hiring additional staff.
-   **Product Documentation**: Turn your product manuals and user guides into interactive chatbots. Help users find answers quickly and reduce support tickets.
-   **API & Library Documentation**: Make your technical documentation interactive. Developers can ask questions and get code examples or explanations instantly.
-   **Educational Content**: Transform course materials, textbooks, or study guides into interactive learning experiences. Students can ask questions and get answers based on the content.
-   **Event Information**: For conferences, webinars, or any event, create a chatbot that provides details about schedules, speakers, and FAQs.

## Technical Details

### What technology does Docative use?

Docative uses OpenAI for embeddings and chat completions, Qdrant for vector storage, FastAPI for the backend (hosted on AWS EC2), and Nuxt 3 for the frontend (hosted on Vercel).

### What is the file size limit?

Files are limited to 5MB for fast processing.

### How many chatbots can I create?

On the Free plan, you can create one chatbot per email address. The upcoming Pro plan will remove this limit, allowing multiple chatbots per email.

### Is my data secure?

Documents are processed securely, stored in Qdrant with encryption, and not shared or used beyond creating your chatbot.

## Troubleshooting

### Why didn’t I receive the script tag email?

Check your spam/junk folder. If missing, email [upindersangha01@gmail.com](mailto:upindersangha01@gmail.com) with your upload details.

### Why isn’t my chatbot appearing on my website?

Ensure the script tag is correctly pasted in the HTML or framework code. Check the bot ID and verify the script URL (https://www.upindersangha.com/docative-widget.js) is accessible.

### Why is the chatbot giving incorrect answers?

Ensure your document is clear, well-structured, and contains relevant information. Use headings and lists to improve retrieval. Re-upload a revised document if needed.

### What if I get a CORS error when embedding?

Contact [upindersangha01@gmail.com](mailto:upindersangha01@gmail.com) to verify CORS settings. The backend allows requests from www.upindersangha.com, but custom domains may need additional configuration.

### Why is my script tag not loading?

Check for typos in the script tag or bot ID. Ensure your website allows external scripts and there are no ad blockers interfering.

## Best Practices

### How do I make my chatbot more effective?

-   Use clear, concise language in your document.
-   Organize content with headings, bullet points, or numbered lists.
-   Avoid jargon or ambiguous terms.
-   Test the chatbot with common questions to ensure accuracy.

### How do I update my chatbot’s content?

Upload a new file at [www.upindersangha.com/docative](https://www.upindersangha.com/docative) to receive a new script tag with a new bot ID.

## Limitations

### What are Docative’s limitations?

-   One chatbot per email on the Free plan (Pro plan will allow multiple).
-   Supports PDF, DOCX, TXT files up to 5MB.
-   English-only responses.
-   Default chat UI (customization planned for future).
-   No real-time human handoff.

## Future Features

### What’s planned for Docative?

-   Pro plan with multiple chatbots, automatic website scraping, chat analytics, advanced customization, and priority support.
-   Multiple files per chatbot.
-   Multilingual support.
-   Customizable chat UI.
-   Analytics dashboards.
-   Rate limiting and billing options.

## Support

### How do I get help?

Email [upindersangha01@gmail.com](mailto:upindersangha01@gmail.com) for assistance with setup, embedding, or troubleshooting.

### Where can I find more information?

Visit [www.upindersangha.com/docative/user-guide](https://www.upindersangha.com/docative/user-guide) for the integration user guide or [www.upindersangha.com/docative](https://www.upindersangha.com/docative) to create a chatbot.

### Who created Docative?

Docative is created by Upinder Sangha, a developer building AI solutions at [www.upindersangha.com](https://www.upindersangha.com).
