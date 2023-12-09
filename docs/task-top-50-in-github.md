---
id: task-top-50-in-github
slug: /task-top-50-in-github

title: Top 50 in Github
sidebar_label: Top 50 in Github
---

### Task

Write a program to fetch the latest top 50 open-source projects from the GitHub website. Save the retrieved data to a JSON file.
 
#### Python implementation
```python title="top_50_in_github.py"
import requests
from bs4 import BeautifulSoup
import json

def get_top_projects():
    url = 'https://github.com/trending'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    project_list = []

    projects = soup.select('article.Box-row')
    for project in projects[:50]:
        project_data = {}
        
        # Get project name
        name_elem = project.select_one('.h3')
        project_data['name'] = name_elem.text.replace(' ','').replace('\n','').strip()

        # Get project description
        desc_elem = project.select_one('p')
        if desc_elem:
            project_data['description'] = desc_elem.text.strip()
        else:
            project_data['description'] = None

        # Get project URL
        link_elem = project.select_one('.h3 a')
        project_data['url'] = 'https://github.com' + link_elem['href']

        project_list.append(project_data)

    return project_list

def save_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    projects = get_top_projects()
    save_to_json(projects, 'top_projects.json')
```

#### Test
##### Install dependencies and run
```
pip install bs4 requests
python top_50_in_github.py
```
##### Output
``` title="top-projects.json"
[
    {
        "name": "pytorch-labs/gpt-fast",
        "description": "Simple and efficient pytorch-native transformer text generation in <1000 LOC of python.",
        "url": "https://github.com/pytorch-labs/gpt-fast"
    },
    {
        "name": "dangeng/visual_anagrams",
        "description": "Code for the paper \"Visual Anagrams: Generating Multi-View Optical Illusions with Diffusion Models\"",
        "url": "https://github.com/dangeng/visual_anagrams"
    },
    ...
]
```
