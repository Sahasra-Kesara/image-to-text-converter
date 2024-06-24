# 🌟 Image to Text Converter

A sleek web application that lets you extract text from images using Tesseract OCR.

![Screenshot (388)](https://github.com/Sahasra-Kesara/image-to-text-converter/assets/121740972/8ad2b985-faa6-4641-b1ec-43481ccf5ad1)




## 🚀 Features

- 🌈 **Upload Images**: Supports JPEG, PNG, and more.
- 🔍 **Extract Text**: Utilizes Tesseract OCR for accurate text extraction.
- 📋 **Copy Text**: Easy copy-to-clipboard functionality.
- 🌀 **Loading Spinner**: Displays a spinner while processing images.
- 📱 **Responsive Design**: Looks great on all devices.

## 🛠️ Prerequisites

- 🐍 Python 3.8 or higher
- 🖼️ Tesseract OCR

## 📦 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/image-to-text-converter.git
cd image-to-text-converter
```
2️⃣ Set Up a Virtual Environment
```bash
python -m venv venv
```
3️⃣ Activate the Virtual Environment
Windows:
``` bash
venv\Scripts\activate
```
macOS/Linux:

```bash
source venv/bin/activate
```

4️⃣ Install Required Packages
```bash
pip install Flask Pillow pytesseract
```

5️⃣ Install Tesseract OCR

Windows:
Download and install Tesseract from UB Mannheim's site.

macOS:
```bash
brew install tesseract
```

Ubuntu:

```bash
sudo apt-get install tesseract-ocr
```

🚀 Usage
1️⃣ Run the Application
```bash
python app.py
```

2️⃣ Open the Application
Navigate to `http://127.0.0.1:5000` in your web browser.

3️⃣ Upload an Image
Select an image using the upload form.
Click the "Upload" button to extract text.
View and copy the extracted text.
