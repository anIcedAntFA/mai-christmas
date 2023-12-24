import { motion } from 'framer-motion';

function GingerbreadFigure() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0, rotate: '-90deg', x: '100px' }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: '320deg',
        x: '0px',
      }}
      transition={{
        duration: 0.4,
        delay: 1.4,
      }}
      className='gingerbread'
      viewBox='-100 -100 200 200'
    >
      <motion.circle className='body' cx='0' cy='-50' r='30' />

      <motion.circle className='eye' cx='-12' cy='-55' r='3' />
      <motion.circle className='eye' cx='12' cy='-55' r='3' />
      <rect className='mount' x='-10' y='-40' width='20' height='5' rx='2' />

      <line x1='-40' y1='-10' x2='40' y2='-10' className='limb' />
      <line x1='-25' y1='50' x2='0' y2='-15' className='limb' />
      <line x1='25' y1='50' x2='0' y2='-15' className='limb' />

      <circle className='button' cx='0' cy='-10' r='5' />
      <circle className='button' cx='0' cy='10' r='5' />
    </motion.svg>
  );
}

export default GingerbreadFigure;
