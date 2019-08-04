import React, { useState } from 'react';
import Page from '../../Components/Page';
import Logo from '../../Components/LogoPanel';
import Header from '../../Components/Header';
import NextLink from '../../Components/NextLink';
import QuizList from './QuizList';
import metadata from './pagesMetadata';

const DEF_SUB_TEXT = '(check all that apply)';

export default metadata.reduce((pages, page, i, a) => {
  pages.push({
    path: page.id,
    component: () => {
      const prevUrl = a[i - 1] ? a[i - 1].id : undefined;
      const nextUrl = (page.next) || (a[i + 1] ? a[i + 1].id : undefined);
      const [ nextUrlEnabled, setNextUrlEnabled ] = useState(false);

      return (
        <Page logo={<Logo prevUrl={prevUrl} />}>
          <Header text={page.header} subText={page.subheader ? DEF_SUB_TEXT : ''} />
          <QuizList {...page} toggleNext={setNextUrlEnabled} />
          { nextUrl && <NextLink to={nextUrl} enabled={nextUrlEnabled} /> }
        </Page>
      );
    },
  });
  
  return pages;
}, []);


