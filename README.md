
# Online Image to Text – AI OCR Web App

This repository contains a Flask-based web application that converts images into text using Google Gemini AI.  
The website supports multiple OCR modes, including:

- Extract Text (up to 10 images)
- Extract Information
- Image Description
- Extract Tables
- Extract Math

The frontend is built using HTML, CSS, Bootstrap, and JavaScript, and the backend handles AI inference, text extraction, file processing, and exporting results to PDF, Word (DOCX), and TXT formats.



## Features

### AI-Powered OCR
- Upload up to 10 images at once
- High-accuracy OCR using Google Gemini 2.0 Flash
- Extract handwritten text, printed text, tables, math, and more

### Supported Input Formats
- JPG, PNG, JFIF, WEBP, GIF, SVG
- Multi-image upload support
- Mobile and desktop compatible

### Export Options
- PDF
- DOCX
- TXT
- JSON (for table mode)

### Included Website Pages
- index.html (main OCR tool)
- about.html
- contact.html
- policy.html (privacy policy)
- terms.html (terms of use)
- sitemap.xml


## Project Structure

```

project/
│
├── index.py                # Main Flask backend
│
├── templates/
│   ├── index.html          # Main OCR interface
│   ├── about.html
│   ├── contact.html
│   ├── policy.html
│   ├── terms.html
│
├── static/
│   ├── css/
│   │   └── styles.css      # Custom styling
│   ├── js/
│   │   └── script.js       # Dropdown, scroll logic, UI interactions
│
├── sitemap.xml             # SEO sitemap
└── README.md

```

## Installation & Setup

### 1. Clone the repository
```

git clone https://github.com/yourusername/online-image-to-text.git
cd online-image-to-text

```
### 2. Install dependencies

```
pip install flask fpdf python-docx google-generativeai pandas matplotlib pydantic
```

### 3. Add your Gemini API keys

Open `index.py` and replace the placeholder API key lines with your keys:

```python
client = genai.Client(api_key="YOUR_GEMINI_API_KEY")
genai2.configure(api_key="YOUR_GEMINI_API_KEY_2")
app.secret_key = "replace-with-a-secure-secret"
```

### 4. Run the app

```bash
python index.py
```

Then open:

```
http://127.0.0.1:5000/
```

---

## How It Works

### Frontend

* Built with Bootstrap, custom CSS, and JavaScript.
* Allows drag & drop or file-select image uploads.
* Provides a mode selector for text, tables, math, or descriptions.
* Restores scroll position and provides smooth UX for results.

### Backend (Flask)

* Handles file uploads and session state.
* Uploads images to Google Gemini (via `google-generativeai`) for OCR and analysis.
* Parses responses and formats output.
* Exports results to PDF, DOCX, TXT, and JSON.

The main OCR and export logic is in `index.py`, particularly in the `/preview_text` route.

---

## GDPR, Ads & Analytics

* Includes consent manager placeholders and lazy-loading for third-party scripts.
* Contains placeholders for Google AdSense and Microsoft Clarity analytics.
* These scripts can be enabled, disabled, or replaced as needed.

---

## SEO

* `sitemap.xml` included.
* Pages contain Open Graph and Twitter Card metadata.
* Mobile-friendly viewport and meta descriptions.

---

## Troubleshooting & Notes

* Make sure to set `app.secret_key` to a secure value in production.
* Verify your Gemini API quotas and usage limits.
* If using on a public server, enable HTTPS and secure file handling.
* The project includes various third-party script placeholders — review them before deploying.

---

## License

This project is distributed under the MIT License.

---
