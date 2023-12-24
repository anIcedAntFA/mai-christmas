import { motion } from 'framer-motion';

function Ribbon() {
  return (
    <svg viewBox='-100 -100 200 200' className='ribbon'>
      <defs>
        <motion.path
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.1,
          }}
          id='ribbon'
          d='
        M 0 -20
        Q 28 -40 56 -45
        C 96 -48 96 48 56 45
        Q 28 40 0 20'
          fill='#B73A3B'
        />
      </defs>

      <use href='#ribbon' />
      <use href='#ribbon' transform='scale(-1)' />
      <motion.ellipse
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 1,
        }}
        cx='0'
        cy='0'
        rx='20'
        ry='24'
        fill='#9C2D2A'
      />

      <motion.path
        initial={{ opacity: 0, scale: 0, y: '-100px' }}
        animate={{ opacity: 1, scale: 1, y: '0px' }}
        transition={{
          duration: 0.4,
          delay: 1.1,
        }}
        d='
      M 0 20
      Q 40 40 30 60
      Q 20 80 40 90

      M 0 20
      Q -30 30 -20 60
      Q -10 90 -50 100'
        fill='none'
        stroke='#B73A3B'
        strokeWidth='3'
      />
    </svg>
  );
}

export default Ribbon;
