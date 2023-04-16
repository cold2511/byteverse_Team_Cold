import pytesseract
from gtts import gTTS
from PIL import Image

# Open the uploaded image
uploaded_image = Image.open("uploaded_image.jpg")

# Preprocess the image
image_gray = uploaded_image.convert("L")  # Convert to grayscale

# Perform OCR using Tesseract
extracted_text = pytesseract.image_to_string(image_gray)

# Print the extracted text
print("Extracted Text:")
print(extracted_text)
tts=gTTS(text=extracted_text)
tts.save("converted.mp3")

