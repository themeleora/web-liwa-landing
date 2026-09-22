import { useState } from 'react';
import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './WhoItsFor.module.css';

const RING = ['#EDECF6', '#5C54E6', '#3A3370', '#E7E4FF'];
const GLOW = [
  '0 30px 64px rgba(30,27,57,.22),0 8px 20px rgba(30,27,57,.10)',
  '0 30px 64px rgba(62,52,196,.46),0 8px 20px rgba(62,52,196,.28)',
  '0 30px 64px rgba(20,16,56,.52),0 8px 20px rgba(20,16,56,.30)',
  '0 30px 64px rgba(108,99,255,.26),0 8px 20px rgba(108,99,255,.14)',
];

const CARDS = [
  {
    id: 1,
    title: 'Women & gender-diverse commuters',
    body: '18+ navigating everyday life.',
    bg: '#fff',
    titleColor: '#1E1B39',
    bodyColor: '#5C5878',
    bodyMaxCh: 20,
    badgeBg: '#6C63FF',
    badgePath: 'M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-8 2-8 4.5V21h16v-2.5C20 16 16 14 12 14z',
    img: '/images/audience-women-gender-diverse-commuters.png',
    imgStyle: { left: 201, width: 531, height: 355, top: -6, transformOrigin: 'center top' },
    baseZoom: 'translateX(-50%)',
    hovZoom: 'translateX(-50%) scale(1.05)',
  },
  {
    id: 2,
    title: 'Solo travelers',
    body: 'For journeys where you want a little more context.',
    bg: '#6C63FF',
    titleColor: '#FFFFFF',
    bodyColor: '#FFFFFF',
    bodyMaxCh: 22,
    badgeBg: 'rgba(255,255,255,.28)',
    badgePath: 'M21 14.5l-8-2.2V6.6a1.5 1.5 0 10-3 0v5.7l-8 2.2V17l8-1.6V19l-2 1.3V22l3.5-1 3.5 1v-1.7L13 19v-3.6l8 1.6v-2.5z',
    img: '/images/audience-solo-travelers.png',
    imgStyle: { left: 163, width: 625, height: 326, top: 5, transformOrigin: 'center top' },
    baseZoom: 'translateX(-50%)',
    hovZoom: 'translateX(-50%) scale(1.05)',
  },
  {
    id: 3,
    title: 'Night commuters',
    body: 'When time and place can change how a route feels.',
    bg: '#2A2456',
    titleColor: '#FFFFFF',
    bodyColor: '#DAD7F0',
    bodyMaxCh: 24,
    badgeBg: '#6C63FF',
    badgePath: 'M20 14.4A8.5 8.5 0 019.6 4 8.5 8.5 0 1020 14.4z',
    img: '/images/audience-night-commuters.png',
    imgStyle: { inset: 0, objectPosition: '52% 65%', transformOrigin: 'center bottom' },
    baseZoom: 'scale(1)',
    hovZoom: 'scale(1.05)',
  },
  {
    id: 4,
    title: 'Unfamiliar-area travelers',
    body: "When local knowledge isn't something you have.",
    bg: '#F4F3FF',
    titleColor: '#1E1B39',
    bodyColor: '#5C5878',
    bodyMaxCh: 22,
    badgeBg: '#6C63FF',
    badgePath: 'M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z',
    img: '/images/audience-unfamiliar-area-travelers.png',
    imgStyle: { left: -17, width: 505, height: 366, top: -25, objectPosition: 'center bottom', transformOrigin: 'center bottom' },
    baseZoom: 'scale(1.32)',
    hovZoom: 'scale(1.39)',
  },
];

export default function WhoItsFor() {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div id="who" className={styles.section}>
      <div className={styles.card}>
        <Eyebrow label="Who it's for" />
        <h2 className={styles.heading}>Built for the way you actually move.</h2>
        <p className={styles.intro}>Different journeys. Different needs. One thing in common: choice matters.</p>
        <div className={styles.grid}>
          {CARDS.map((card, i) => {
            const on = hoverId === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoverId(card.id)}
                onMouseLeave={() => setHoverId(null)}
                className={styles.audienceCard}
                style={{
                  background: card.bg,
                  boxShadow: `inset 0 0 0 1.5px ${RING[i]}${on ? ',' + GLOW[i] : ''}`,
                  transform: on ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                <div className={styles.cardHead}>
                  <div className={styles.cardTitle} style={{ color: card.titleColor }}>
                    {card.title}
                  </div>
                  <div
                    className={styles.cardBody}
                    style={{ color: card.bodyColor, maxWidth: `${card.bodyMaxCh}ch` }}
                  >
                    {card.body}
                  </div>
                </div>
                <div className={styles.cardImgWrap}>
                  <img
                    src={card.img}
                    alt=""
                    className={styles.cardImg}
                    style={{
                      ...card.imgStyle,
                      transform: on ? card.hovZoom : card.baseZoom,
                    }}
                  />
                </div>
                <div
                  className={styles.badge}
                  style={{
                    background: card.badgeBg,
                    opacity: on ? 1 : 0,
                    transform: on ? 'translateY(0)' : 'translateY(14px)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d={card.badgePath} />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
