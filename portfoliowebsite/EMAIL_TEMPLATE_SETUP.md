# Email Template Setup – Formatting & No Profile Pic

Update your EmailJS template to preserve formatting and remove the profile picture.

## 1. Edit Your Template

Go to [EmailJS → Email Templates](https://dashboard.emailjs.com/admin/templates) and edit your contact template.

## 2. Remove Profile Pic / Images

- Delete any **Image** blocks from the template
- Remove any avatar, logo, or icon elements
- Use only text content

## 3. Use This Template Content (Plain Text – Preserves Line Breaks)

**To Email:** `samardipmandal.kgp@gmail.com`  
**Reply-To:** `{{from_email}}`  
**From Name:** `{{from_name}}`  
**Subject:** `Portfolio Contact: {{from_name}}`

**Content (switch to HTML/code view if needed):**
```html
New message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message_html}}
```

Use **`{{message_html}}`** (not `{{message}}`) – this preserves line breaks as the user typed them.

## 4. If Your Template Editor Has Visual Blocks

- Remove any image/avatar blocks
- For the message body, use the variable: `{{message_html}}`
- Do not add any image or icon elements
