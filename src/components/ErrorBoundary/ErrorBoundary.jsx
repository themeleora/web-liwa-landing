import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('LIWA app crashed:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className={styles.wrap}>
        <div className={styles.glow} />
        <div className={styles.card}>
          <img src="/images/logo-icon-dark.svg" alt="" className={styles.icon} />
          <h1 className={styles.heading}>Something went wrong.</h1>
          <p className={styles.subtext}>
            We hit an unexpected error. Reloading the page usually fixes it — if it keeps happening, let us know.
          </p>
          <div className={styles.actions}>
            <a href="/home" className={styles.ctaSecondary}>
              Go home
            </a>
            <a href="." className={styles.cta} onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
              Reload page
            </a>
          </div>
        </div>
      </div>
    );
  }
}
