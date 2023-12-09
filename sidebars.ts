import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'about-the-book',
        'how-to-use-the-book',
      ],
    },
    {
      type: 'category',
      label: 'Part 1 - Python Basics',
      items: [
        {
          type: 'category',
          label: 'Development Environment',
          items: [
            'setup-environment',
            'hello-world',
          ]
        }, {
          type: 'category',
          label: 'Variables',
          items: [
            'definition-and-assignment-of-variables',
            'naming-rules-for-variables'
          ]
        }, {
          type: 'category',
          label: 'Data Types',
          items: [
            'basic-types',
            'arithmetic-operation',
            'type-conversion',
            'lists-and-tuples',
            'dictionary',
            'set'
          ]
        }, {
          type: 'category',
          label: 'Branching and Loops',
          items: [
            'if-statement',
            'for-and-while-statement',
            'comprehension-expressions'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Part 2 - Python Intermediate',
      items: [
        {
          type: 'category',
          label: 'Functions',
          items: [
            'definition-and-invocation-of-functions',
            'anonymous-functions'
          ]
        },
        {
          type: 'category',
          label: 'Modules and Packages',
          items: [
            'create-and-import-modules',
            'create-and-import-packages'
          ]
        }, {
          type: 'category',
          label: 'File Operations',
          items: [
            'read-and-write-files',
          ]
        },
        {
          type: 'category',
          label: 'Built-in Modules',
          items: [
            'datetime-module',
            'os-module',
            'json-module',
            're-module',
            'random-module',
            'math-module'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Part 3 - Python Advanced',
      items: [
        {
          type: 'category',
          label: 'Object-Oriented Programming',
          items: [
            'class-and-instance',
          ]
        },
        {
          type: 'category',
          label: 'Exception Handling',
          items: [
            'try-except-statements',
            'custom-exception-classes'
          ]
        }, {
          type: 'category',
          label: 'Project Dependency Management',
          items: [
            'pip',
            'venv-and-conda',
            'poetry'
          ]
        },
        {
          type: 'category',
          label: 'Type Systems',
          items: [
            'typing-annotation',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Part 4 - Comprehensive Cases',
      items: [
        {
          type: 'category',
          label: 'Command-Line Tools',
          items: [
            'task-list-files',
          ]
        },
        {
          type: 'category',
          label: 'Web Scraping',
          items: [
            'task-top-50-in-github',
          ]
        }, {
          type: 'category',
          label: 'Web API',
          items: [
            'task-book-store',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'lifelong-learning',
        'third-party-packages',
        'references',
        'afterword'
      ]
    },
  ]
};

export default sidebars;
