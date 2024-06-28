import React, { useState } from 'react';
import styles from './SearchModal.module.css';

type SearchResult = {
  title: string;
  href: string;
  icon: string;
};

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([
    { title: 'Home', href: '/', icon: '/icons/ade.svg' },
    { title: 'Resourses', href: '/resources', icon: '/icons/ade.svg' },
    { title: 'Research', href: '/research', icon: '/icons/ade.svg' },
    { title: 'Daos', href: '/research/daos', icon: '/icons/ade.svg' },
    
    { title: 'Grants', href: '/research/grants', icon: '/icons/ade.svg' },
    { title: 'DAO Basics', href: '/research/daos/dao-basics', icon: '/icons/ade.svg' },
    { title: 'State of DAOs', href: '/research/daos/state-of-daos', icon: '/icons/ade.svg' },
    { title: 'OP Hub', href: '/resourses/op', icon: '/icons/ade.svg' },
    { title: 'Arbitrum Hub', href: '/resourses/arbitrum', icon: '/icons/ade.svg' },
    { title: 'EigenLayer Hub', href: '/resoruses/eigen', icon: '/icons/ade.svg' },
    { title: 'News', href: '/news', icon: '/icons/ade.svg' },
    { title: 'About', href: '/about', icon: '/icons/ade.svg' },
   
  ]);

  const filteredResults = results.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <ul className={styles.resultsList}>
          {filteredResults.map(result => (
            <li key={result.href} className={styles.resultItem}>
              <img src={result.icon} alt={result.title} className={styles.resultIcon} />
              <a href={result.href} className={styles.resultLink} onClick={onClose}>
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
