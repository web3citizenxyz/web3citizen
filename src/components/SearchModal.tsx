import React, { useState, useRef, useEffect } from 'react';
import styles from './SearchModal.module.css';

type SearchResult = {
  title: string;
  href: string;
  icon: string;
};

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([
    { title: 'Home', href: '/', icon: '/icons/bullet.svg' },
    { title: 'Resourses', href: '/resources', icon: '/icons/bullet.svg' },
    { title: 'Research', href: '/research', icon: '/icons/bullet.svg' },
    { title: 'Daos', href: '/research/daos', icon: '/icons/bullet.svg' },
    
    { title: 'Grants', href: '/research/grants', icon: '/icons/bullet.svg' },
    { title: 'DAO Basics', href: '/research/daos/dao-basics', icon: '/icons/bullet.svg' },
    { title: 'State of DAOs', href: '/research/daos/state-of-daos', icon: '/icons/bullet.svg' },
    { title: 'OP Hub', href: '/resourses/op', icon: '/icons/bullet.svg' },
    { title: 'Arbitrum Hub', href: '/resourses/arbitrum', icon: '/icons/bullet.svg' },
    { title: 'EigenLayer Hub', href: '/resoruses/eigen', icon: '/icons/bullet.svg' },
    { title: 'News', href: '/news', icon: '/icons/bullet.svg' },
    { title: 'About', href: '/about', icon: '/icons/bullet.svg' },
   
  ]);

  const filteredResults = results.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));


  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
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
