import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageContainer from './homePage/homePageContainer';
import ResultPageContainer from './resultPage/resultPageContainer';
import NotFoundPage from './errorPage/notFoundPage';
import { HOME_ROUTE, RESULT_ROUTE, NOT_FOUND, WORD_ROUTE } from '../constants/constants';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePageContainer />} />
        <Route path={RESULT_ROUTE} element={<ResultPageContainer />} />
        <Route path={WORD_ROUTE} element={<ResultPageContainer />} />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
