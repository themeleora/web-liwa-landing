import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.css';

export default function Select({ value, onChange, options, placeholder = 'Select one' }) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const rootRef = useRef(null);
  const allOptions = ['', ...options];

  useEffect(() => {
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const openMenu = () => {
    setHighlighted(Math.max(0, allOptions.indexOf(value)));
    setOpen(true);
  };

  const selectOption = (opt) => {
    onChange(opt);
    setOpen(false);
  };

  const onTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMenu();
    }
  };

  const onMenuKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((i) => Math.min(i + 1, allOptions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setHighlighted(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setHighlighted(allOptions.length - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectOption(allOptions[highlighted]);
    }
  };

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? styles.value : styles.placeholder}>{value || placeholder}</span>
        <svg className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className={styles.menu} role="listbox" tabIndex={-1} onKeyDown={onMenuKeyDown} ref={(el) => el && el.focus()}>
          {allOptions.map((opt, i) => (
            <li
              key={opt || '__placeholder'}
              role="option"
              aria-selected={value === opt}
              className={`${styles.option} ${value === opt ? styles.optionSelected : ''} ${i === highlighted ? styles.optionHighlighted : ''}`}
              onMouseEnter={() => setHighlighted(i)}
              onClick={() => selectOption(opt)}
            >
              <span>{opt || placeholder}</span>
              {value === opt && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
