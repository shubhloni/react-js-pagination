import React, { useState, useEffect } from 'react';

import Header from '../src/Components/Header';
import './App.css';
import Footer from './Components/Footer';
import ListItems from './Components/ListItems';
import PageNav from './Components/PageNav';

import Spinner from '../src/images/spinner.gif';

function App() {
  const [serverFacts, setServerFacts] = useState([]);
  const [facts, setFacts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On Load
    const getFacts = async () => {
      const allFacts = await fetchFacts();
      setServerFacts(allFacts);
      setLoading(false);
    };

    getFacts();
  }, []);

  // Fetch Facts From Server
  const fetchFacts = async () => {
    const res = await fetch(
      'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=55'
    );
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    console.log((pageCount - 1) * 10, pageCount * 10);
    // const initFacts = DUMMY_FACTS.slice((pageCount - 1) * 10, pageCount * 10);
    const initFacts = serverFacts.slice((pageCount - 1) * 10, pageCount * 10);
    setFacts(() => initFacts);
  }, [serverFacts, pageCount]);

  // Global Search
  const searchHandler = (searchKey) => {
    if (searchKey === '') {
      const initFacts = serverFacts.slice((pageCount - 1) * 10, pageCount * 10);
      setFacts(() => initFacts);
    } else {
      const lowerKey = searchKey.toLowerCase();
      const searchedFacts = serverFacts.filter((fact) => {
        if (fact.text.toLowerCase().includes(lowerKey)) {
          return fact;
        }
      });

      setFacts(searchedFacts);
    }
  };

  const changePageCountHandler = (direction) => {
    if (direction === 'prev' && pageCount > 1) {
      setPageCount(pageCount - 1);
    } else if (direction === 'next' && pageCount < serverFacts.length / 10) {
      setPageCount(pageCount + 1);
    }
  };

  const changeFactsHandler = (id, text = '', del = false) => {
    let newFacts = [];

    if (!del) {
      // Edit fact from serverFacts
      newFacts = serverFacts.map((fact) => {
        if (fact._id === id) {
          return {
            ...fact,
            text: text,
          };
        }
        return fact;
      });

      setServerFacts(newFacts);
    } else {
      // Delete fact from serverFacts
      newFacts = serverFacts.filter((fact) => {
        if (fact._id !== id) {
          return fact;
        }
      });
      setServerFacts(newFacts);
    }
    // console.log(newFacts);
  };

  return (
    <>
      <Header searchFact={searchHandler} />
      {loading && <img src={Spinner} />}
      <main>
        {facts.length > 0 && (
          <ListItems
            facts={facts}
            pageCount={pageCount}
            changeFact={changeFactsHandler}
          />
        )}

        <PageNav
          pageCount={pageCount}
          maxPageCount={Math.ceil(serverFacts.length / 10)}
          changePage={changePageCountHandler}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
