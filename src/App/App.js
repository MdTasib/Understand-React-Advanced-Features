import React from 'react';
import Header from '../Components/Header';
import { newsCategory } from '../News/Index'

const fakeNews = [
  {
    title: 'Title',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN'
    },
  },
  {
    title: 'Title',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN'
    },
  },
]


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-md-3">
              <Header category={newsCategory.technology} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
