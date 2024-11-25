import json
from docx import Document

def word_to_json(word_file, json_file):
    doc = Document(word_file)
    data = {"content": []}
    
    for para in doc.paragraphs:
        data["content"].append(para.text)
    
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

word_to_json('Escalas.docx', 'archivo.json')