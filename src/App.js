import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayoutComponent } from './components/layout/MainLayout/MainLayout';
import { HomepageComponent } from './components/views/Homepage/Homepage';
import { PostComponent } from './components/views/Post/Post';
import { PostEditComponent } from './components/views/PostEdit/PostEdit';
import { PostAddComponent } from './components/views/PostAdd/PostAdd';
import { NotFoundComponent } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayoutComponent>
            <Switch>
              <Route exact path='/' component={HomepageComponent} />
              <Route exact path='/post/add' component={PostAddComponent} />
              <Route exact path='/post/:id' component={PostComponent} />
              <Route exact path='/post/:id/edit' component={PostEditComponent} />
              <Route path='*' component={NotFoundComponent} />
            </Switch>
          </MainLayoutComponent>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export default App;