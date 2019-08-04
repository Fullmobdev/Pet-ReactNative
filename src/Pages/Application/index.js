import React from 'react';
import NextLink from '../../Components/NextLink';
import PageWithSteps from './_components/PageWithSteps';
import applicationFlow from './flow';

export default applicationFlow.reduce((pages, page, i, a) => {
  pages.push({
    path: page.url,
    component: () => {
      const { showNextUrl } = page;
      const prevUrl = a[i - 1] ? a[i - 1].url : undefined;
      const nextUrl = (page.next) || (a[i + 1] ? a[i + 1].url : undefined);
  
      return (
        <PageWithSteps
          {...page}
          prevUrl={prevUrl}
        >
          <page.component nextUrl={nextUrl} />
          { showNextUrl && nextUrl && <NextLink to={nextUrl} enabled /> }
        </PageWithSteps>
      );
    },
  });
  
  return pages;
}, []);