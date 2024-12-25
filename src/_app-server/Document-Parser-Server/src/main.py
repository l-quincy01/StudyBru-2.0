from docling.document_converter import DocumentConverter

# Set the correct path to your local PDF file
# source = "./Files/Example.pdf"  # Relative path to the local file
source = "https://arxiv.org/pdf/2410.23335"


# Create a DocumentConverter instance
converter = DocumentConverter()

# Convert the PDF document to markdown (or other formats supported by docling)
result = converter.convert(source)

# Export and print the result in markdown format
print(result.document.export_to_text())
