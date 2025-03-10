export const apiCallExamples: Record<string, any> = {
	bash: {
		pdf: `curl -X POST "https://api.docushoot.com/v1/pdf" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "url": "https://example.com",
  "options": {
    "format": "A4",
    "margin": "20px"
  }
}'`,
		screenshot: `curl -X POST "https://api.docushoot.com/v1/screenshot" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "url": "https://example.com",
  "options": {
    "width": 1920,
    "height": 1080,
    "fullPage": true
  }
}'`
	},
	javascript: {
		pdf: `const response = await fetch('https://api.docushoot.com/v1/pdf', {
method: 'POST',
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json',
},
body: JSON.stringify({
  url: 'https://example.com',
  options: {
    format: 'A4',
    margin: '20px'
  }
})
});

const pdf = await response.blob();`,
		screenshot: `const response = await fetch('https://api.docushoot.com/v1/screenshot', {
method: 'POST',
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json',
},
body: JSON.stringify({
  url: 'https://example.com',
  options: {
    width: 1920,
    height: 1080,
    fullPage: true
  }
})
});

const screenshot = await response.blob();`
	},
	python: {
		pdf: `import requests

response = requests.post(
  'https://api.docushoot.com/v1/pdf',
  headers={
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
  },
  json={
      'url': 'https://example.com',
      'options': {
          'format': 'A4',
          'margin': '20px'
      }
  }
)

pdf_content = response.content`,
		screenshot: `import requests

response = requests.post(
  'https://api.docushoot.com/v1/screenshot',
  headers={
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
  },
  json={
      'url': 'https://example.com',
      'options': {
          'width': 1920,
          'height': 1080,
          'fullPage': True
      }
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
      "url": "https://example.com",
      "options": map[string]interface{}{
          "format": "A4",
          "margin": "20px",
      },
  }
  
  jsonData, _ := json.Marshal(data)
  
  req, _ := http.NewRequest("POST", "https://api.docushoot.com/v1/pdf", bytes.NewBuffer(jsonData))
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
      "url": "https://example.com",
      "options": map[string]interface{}{
          "width": 1920,
          "height": 1080,
          "fullPage": true,
      },
  }
  
  jsonData, _ := json.Marshal(data)
  
  req, _ := http.NewRequest("POST", "https://api.docushoot.com/v1/screenshot", bytes.NewBuffer(jsonData))
  req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
  req.Header.Set("Content-Type", "application/json")
  
  client := &http.Client{}
  resp, _ := client.Do(req)
  defer resp.Body.Close()
  
  screenshotContent, _ := ioutil.ReadAll(resp.Body)
}`
	}
};
