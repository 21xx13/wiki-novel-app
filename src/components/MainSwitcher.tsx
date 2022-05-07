
import {Catalog} from './CatalogComponent';
import Footer from './FooterComponent';
import { RouteComponentProps } from 'react-router-dom';
import { Header } from './HeaderComponent';

import { MainBanner } from './MainBanner';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NovelDetail } from './novels/NovelDetail';
import { useCommentsQuery } from './novels/commentsHookApi';
import { useNovelsQuery } from './novels/novelsHookApi';
import HomePage from './HomePage';
import { useThemesQuery } from './themeHookApi';
import { Course } from './CourseComponent';

export const MainSwitcher: React.FC = () => {
  const { data: novelJson, isLoading} = useNovelsQuery();
  const { data: themesJson} = useThemesQuery();
  const { data: commentsJson } = useCommentsQuery();
    const NovelWithId = ({match}: RouteComponentProps<{ novelId: string}>) => {
        return(
            <NovelDetail novel={novelJson?.filter((novel) => novel.id === parseInt(match.params.novelId,10))[0]} 
              comments={commentsJson?.filter((comment) => comment.novelId === parseInt(match.params.novelId,10)) || []} />
        );
      };
  return (
    <div>
      <Header/>
      <MainBanner />
      <Switch>
              <Route path="/home" component={() => <HomePage />}/>
              <Route exact path='/catalog' component={() => <Catalog novels={novelJson} />} />
              <Route exact path='/course' component={() => <Course themes={themesJson} />} />
              <Route path='/catalog/:novelId' component={NovelWithId} />
              <Redirect to="/home" />
          </Switch>
     
      <Footer/>
    </div>
  );
}