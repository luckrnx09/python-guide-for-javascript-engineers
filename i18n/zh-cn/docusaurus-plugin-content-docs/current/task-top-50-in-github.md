---
id: task-top-50-in-github
slug: /task-top-50-in-github

title: Github 热门
sidebar_label: Github 热门
---

### 任务

编写一个程序，从 GitHub 网站中获取最近热门的 TOP 50 开源项目。将获取的数据保存到一个 JSON 文件中。
 
#### Python 实现
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
        
        # 获取项目名称
        name_elem = project.select_one('.h3')
        project_data['name'] = name_elem.text.replace(' ','').replace('\n','').strip()

        # 获取项目描述
        desc_elem = project.select_one('p')
        if desc_elem:
            project_data['description'] = desc_elem.text.strip()
        else:
            project_data['description'] = None

        # 获取项目链接
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

#### 测试
##### 安装依赖并运行
```
pip install bs4 requests
python top_50_in_github.py
```
##### 运行结果
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

