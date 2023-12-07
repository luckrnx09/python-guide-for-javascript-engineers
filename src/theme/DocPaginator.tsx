import React, { useState, useEffect } from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import Giscus from '@giscus/react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const getGiscusTerm = () => {
  var currentURL = window.location.href;
  var path = new URL(currentURL).pathname;
  var replacedPath = path.replace(/\//g, '.');
  replacedPath = replacedPath.replace(/^\.+|\.+$/g, '')
    .replace('books.python-guide-for-javascript-engineers', '');
  const term = decodeURIComponent(replacedPath) 
  if (term.startsWith('.')) { 
    return term.substring(1)
  }
  return '封面';
}

const getTheme = () => {
  if (ExecutionEnvironment.canUseDOM) {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme;
  }
  return 'light'
}

export default function DocPaginatorWrapper(props) {
  const [term, setTerm] = useState('index');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTerm(getGiscusTerm())
  }, [])

  useEffect(() => {
    setTheme(getTheme())
  }, [])

  return (
    <>
      <DocPaginator {...props} />
      <div style={{ margin: '2em 0' }}></div>
      {/* https://giscus.app/zh-CN */}
      <Giscus
        repo='luckrnx09/python-guide-for-javascript-engineers'
        repoId='R_kgDOK21mTg'
        category='Announcements'
        categoryId='DIC_kwDOK21mTs4CbkEN'
        mapping='specific'
        term={term}
        reactionsEnabled='1'
        emitMetadata='1'
        inputPosition='top'
        theme={theme}
        lang='zh-CN'
        loading="lazy"
      />
    </>
  );
}
