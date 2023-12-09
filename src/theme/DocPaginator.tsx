import React, { useState, useEffect } from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import Giscus from '@giscus/react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const defaultTheme = 'light';
const defaultTerm = 'index';
const defaultLocale = 'en'

const getGiscusTerm = () => {
  var currentURL = window.location.href;
  var path = new URL(currentURL).pathname;
  const term = path.substring(path.lastIndexOf('/') + 1).replace('/', '.') || defaultTerm;
  return term
}

const getTheme = () => {
  if (ExecutionEnvironment.canUseDOM) {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme ?? defaultTheme
  }
  return defaultTheme
}

const getLocale = () => {
  const locales = ['en', 'zh-CN']
  for (let locale of locales) {
    if (location.href.toString().includes(`/${locale.toLowerCase()}/`)) {
      return locale
    }
  }
  return defaultLocale
}

export default function DocPaginatorWrapper(props) {
  const [term, setTerm] = useState(defaultTerm);
  const [theme, setTheme] = useState(defaultTheme);
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    setTerm(getGiscusTerm())
  })

  useEffect(() => {
    setTheme(getTheme())
  })

  useEffect(() => {
    setLocale(getLocale())
  })

  return (
    <>
      <DocPaginator {...props} />
      <div style={{ margin: '2em 0' }}></div>
      {/* https://giscus.app */}
      <Giscus
        repo='luckrnx09/python-guide-for-javascript-engineers'
        repoId='R_kgDOK21mTg'
        category='Announcements'
        categoryId='DIC_kwDOK21mTs4CbkEN'
        mapping='specific'
        term={term}
        reactionsEnabled='1'
        emitMetadata='1'
        inputPosition='bottom'
        theme={theme}
        lang={locale}
        loading="lazy"
      />
    </>
  );
}
