import os
import sys
from google import genai

# Initialize the 2026 Gemini Client
# The API Key is pulled from your GitHub Secrets
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

def audit_files(files):
    for file_path in files:
        if not os.path.exists(file_path):
            continue
            
        print(f"--- Analyzing {file_path} ---")
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Prompt optimized for the Free Tier (concise and fast)
        prompt = f"Perform a technical audit of this HTML. List only critical errors (broken tags, truncated JSON-LD, missing alt text). Be brief:\n\n{content}"
        
        try:
            response = client.models.generate_content(
                model="gemini-2.0-flash", 
                contents=prompt
            )
            print(response.text)
            print("\n" + "="*20 + "\n")
        except Exception as e:
            print(f"⚠️ Skipping {file_path} due to API limit or error: {e}")

if __name__ == "__main__":
    # Takes file list from the GitHub Action argument
    audit_files(sys.argv[1:])
