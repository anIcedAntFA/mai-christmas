import { motion } from 'framer-motion';

function ChristmasBauble() {
  return (
    <svg viewBox='-100 -100 200 200' className='bauble'>
      <defs>
        <clipPath id='ball'>
          <circle cx='0' cy='20' r='70' />
        </clipPath>
      </defs>

      <motion.circle
        initial={{ opacity: 0, y: '-40px' }}
        animate={{ opacity: 1, y: '0px' }}
        transition={{
          delay: 0.9,
        }}
        cx='0'
        cy='20'
        r='70'
        fill='#D1495B'
      />

      <motion.polyline
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.9,
        }}
        clipPath='url(#ball)'
        points='-120 40 -80 0 -40 40 0 0 40 40 80 0 120 40'
        fill='none'
        stroke='#9C2D2A'
        strokeWidth='20'
      />

      <motion.circle
        initial={{ opacity: 0, y: '-40px' }}
        animate={{ opacity: 1, y: '0px' }}
        transition={{
          delay: 0.7,
        }}
        cx='0'
        cy='-75'
        r='12'
        fill='none'
        stroke='#F79257'
        strokeWidth='2'
      />
      <motion.rect
        initial={{ opacity: 0, y: '-40px' }}
        animate={{ opacity: 1, y: '0px' }}
        transition={{
          delay: 0.8,
        }}
        x='-17.5'
        y='-65'
        width='35'
        height='20'
        fill='#F79257'
      />
    </svg>
  );
}

export default ChristmasBauble;
