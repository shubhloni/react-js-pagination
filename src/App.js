import React, { useState, useEffect } from 'react';

import Header from '../src/Components/Header';
import './App.css';
import Footer from './Components/Footer';
import ListItems from './Components/ListItems';
import PageNav from './Components/PageNav';

const DUMMY_FACTS = [
  {
    id: 'f1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f3',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f4',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f5',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f6',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f7',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f8',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f9',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f10',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f11',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f12',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f13',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f14',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f15',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f16',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f17',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f18',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f19',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f20',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f21',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f22',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus!',
  },
  {
    id: 'f23',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f24',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
  {
    id: 'f25',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas in error eligendi ex ullam totam repudiandae quo natus eveniet.',
  },
];

function App() {
  const [facts, setFacts] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    // const initFacts = DUMMY_FACTS.slice(0, 10);
    // setFacts(initFacts);
    setFacts(DUMMY_FACTS);
  }, []);

  useEffect(() => {
    console.log(facts);
    console.log((pageCount - 1) * 10, pageCount * 10);
    // const initFacts = DUMMY_FACTS.slice((pageCount - 1) * 10, pageCount * 10);
    const initFacts = facts.slice((pageCount - 1) * 10, pageCount * 10);
    setFacts(() => initFacts);
  }, [pageCount]);

  const changePageCountHandler = (direction) => {
    if (direction === 'prev' && pageCount > 1) {
      setPageCount(pageCount - 1);
    } else if (direction === 'next' && pageCount < DUMMY_FACTS.length / 10) {
      setPageCount(pageCount + 1);
    }
  };

  const changeFactsHandler = (id, text = '', del = false) => {
    // console.log(id, text);
    let newFacts = [];

    if (!del) {
      // Edit item
      newFacts = facts.map((fact) => {
        if (fact.id === id) {
          return {
            ...fact,
            text: text,
          };
        }
        return fact;
      });
    } else {
      // Delete Item
      newFacts = facts.filter((fact) => {
        if (fact.id !== id) {
          return fact;
        }
      });
    }
    console.log(newFacts);
    setFacts(newFacts);
  };

  return (
    <div className='container'>
      <Header />
      {facts.length > 0 && (
        <ListItems facts={facts} changeFact={changeFactsHandler} />
      )}
      {facts.length === 0 && <p>No facts on this page...</p>}
      <PageNav
        pageCount={pageCount}
        maxPageCount={Math.ceil(DUMMY_FACTS.length / 10)}
        changePage={changePageCountHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
