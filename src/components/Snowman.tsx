import { motion } from 'framer-motion';

function Snowman() {
  return (
    <motion.svg
      viewBox='-100 -200 200 400'
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className='snowman'
    >
      <defs>
        <radialGradient id='snowball' cx='0.25' cy='0.25' r='1'>
          <stop offset='0%' stopColor='white' />
          <stop offset='50%' stopColor='white' />
          <stop offset='100%' stopColor='#d6d6d6' />
        </radialGradient>
      </defs>

      <motion.circle
        initial={{ opacity: 0, scale: 0, y: '100px' }}
        animate={{ opacity: 1, scale: 1, y: '0px' }}
        transition={{
          duration: 0.4,
          delay: 1.9,
        }}
        id='bigball'
        cx='0'
        cy='60'
        r='80'
        fill='url(#snowball)'
      />
      <motion.circle
        initial={{ opacity: 0, scale: 0, y: '100px' }}
        animate={{ opacity: 1, scale: 1, y: '0px' }}
        transition={{
          duration: 0.4,
          delay: 2.1,
        }}
        cx='0'
        cy='-40'
        r='50'
        fill='url(#snowball)'
      />
      <motion.polygon
        initial={{ opacity: 0, x: '-40px' }}
        animate={{ opacity: 1, x: '0px' }}
        transition={{
          duration: 0.4,
          delay: 2.4,
          x: { type: 'spring', stiffness: 400, damping: 10 },
        }}
        points='10,-46 50,-40 10,-34'
        fill='#e66465'
      />

      <motion.circle
        cx='0'
        cy='-55'
        r='5'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 2.3,
        }}
      />
      <motion.circle
        cx='20'
        cy='-55'
        r='5'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 2.3,
        }}
      />

      <motion.line
        x1='-40'
        y1='30'
        x2='-90'
        y2='-30'
        stroke='black'
        strokeWidth='5'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 2.4,
          scale: { type: 'spring', stiffness: 400, damping: 10 },
        }}
      />
      <motion.line
        x1='-65'
        y1='0'
        x2='-90'
        y2='-10'
        stroke='black'
        strokeWidth='5'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 2.5,
          scale: { type: 'spring', stiffness: 400, damping: 10 },
        }}
      />
    </motion.svg>
  );
}

export default Snowman;
