import { PUBLIC_API_URL } from '$env/static/public';

export const apiCallExamples: Record<string, any> = {
	bash: {
		pdf: `curl -X POST "${PUBLIC_API_URL}/generate/pdf" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "source": "https://en.wikipedia.org/wiki/PDF",
  "format": "A4"
}'`,
		screenshot: `curl -X POST "${PUBLIC_API_URL}/generate/screenshot" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "source": "https://en.wikipedia.org/wiki/PDF",
  "width": 1920,
  "height": 1080,
  "fullPage": true
}'`
	},
	javascript: {
		pdf: `const response = await fetch('${PUBLIC_API_URL}/generate/pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        source: 'https://en.wikipedia.org/wiki/PDF',
        format: 'A4',
      })
  })

const pdfFile = await response.blob()`,
		screenshot: `const response = await fetch('${PUBLIC_API_URL}/generate/screenshot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY',
  },
  body: JSON.stringify({
    source: 'https://en.wikipedia.org/wiki/PDF',
    width: 1920,
    height: 1080,
    fullPage: true
  });
  
const screenshot = await response.blob();`
	},
	python: {
		pdf: `import requests

response = requests.post(
  '${PUBLIC_API_URL}/generate/pdf',
  headers={
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
  },
  json={
      'source': 'https://en.wikipedia.org/wiki/PDF',
      'format': 'A4'
  }
)

pdf_content = response.content`,
		screenshot: `import requests

response = requests.post(
  '${PUBLIC_API_URL}/generate/screenshot',
  headers={
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
  },
  json={
      'source': 'https://en.wikipedia.org/wiki/PDF',
      'width': 1920,
      'height': 1080,
      'fullPage': True
  }
)

screenshot_content = response.content`
	},
	go: {
		pdf: `package main

import (
  "bytes"
  "encoding/json"
  "io/ioutil"
  "net/http"
)

func main() {
  data := map[string]interface{}{
      "source": "https://en.wikipedia.org/wiki/PDF",
      "format": "A4",
  }
  
  jsonData, _ := json.Marshal(data)
  
  req, _ := http.NewRequest("POST", "${PUBLIC_API_URL}/generate/pdf", bytes.NewBuffer(jsonData))
  req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
  req.Header.Set("Content-Type", "application/json")
  
  client := &http.Client{}
  resp, _ := client.Do(req)
  defer resp.Body.Close()
  
  pdfContent, _ := ioutil.ReadAll(resp.Body)
}`,
		screenshot: `package main

import (
  "bytes"
  "encoding/json"
  "io/ioutil"
  "net/http"
)

func main() {
  data := map[string]interface{}{
      "source": "https://en.wikipedia.org/wiki/PDF",
      "width": 1920,
      "height": 1080,
      "fullPage": true,
  }
  
  jsonData, _ := json.Marshal(data)
  
  req, _ := http.NewRequest("POST", "${PUBLIC_API_URL}/generate/screenshot", bytes.NewBuffer(jsonData))
  req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
  req.Header.Set("Content-Type", "application/json")
  
  client := &http.Client{}
  resp, _ := client.Do(req)
  defer resp.Body.Close()
  
  screenshotContent, _ := ioutil.ReadAll(resp.Body)
}`
	}
};
