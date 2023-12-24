import { motion } from 'framer-motion';

function ForestWithSnowing() {
  return (
    <svg viewBox='-100 -100 200 200'>
      <defs>
        <g id='tree'>
          <polygon points='-10,0 10,0 0 -50' fill='#38755b' />
          <line x2='0' y2='10' stroke='#778074' strokeWidth='2' />
        </g>
        <circle id='big' cx='0' cy='0' r='5' fill='white' />
        <circle id='small' cx='0' cy='0' r='3' fill='white' />
      </defs>

      <rect x='-100' y='-100' width='200' height='200' fill='#fef3c7' />
      <circle cx='0' cy='380' r='350' fill='#fffbeb' />

      {/* <use href='#tree' x='-30' y='25' transform='scale(2)' /> */}
      <motion.use
        initial={{ opacity: 0, scale: 0, y: '-40px' }}
        animate={{ opacity: 1, scale: 1.2, y: '0px' }}
        transition={{
          duration: 0.4,
          delay: 0.5,
        }}
        href='#tree'
        x='-10'
        y='45'
        className='tree'
        // transform='scale(1.2)'
      />
      <motion.use
        initial={{ opacity: 0, scale: 0, y: '-40px' }}
        animate={{ opacity: 1, scale: 1, y: '0px' }}
        transition={{
          duration: 0.4,
          delay: 0.7,
        }}
        className='tree2'
        href='#tree'
        x='30'
        y='35'
      />
      <motion.use
        initial={{ opacity: 0, scale: 0, y: '-40px', x: '40px' }}
        animate={{ opacity: 1, scale: 1.5, y: '0px', x: '40px' }}
        transition={{
          duration: 0.4,
          delay: 0.6,
        }}
        className='tree3'
        href='#tree'
        x='40'
        y='30'
        // transform='scale(1.5)'
      />

      <use href='#big' x='0' y='0' className='flake fast' />
      <use href='#big' x='-50' y='-20' className='flake fast opaque' />
      <use href='#big' x='30' y='-40' className='flake fast' />
      <use href='#big' x='50' y='-20' className='flake fast opaque' />
      <use href='#big' x='30' y='50' className='flake slow' />
      <use href='#big' x='-70' y='-80' className='flake slow opaque' />
      <use href='#big' x='30' y='50' className='flake slow' />
      <use href='#big' x='90' y='-80' className='flake slow opaque' />
      <use href='#small' x='10' y='-50' className='flake slow' />
      <use href='#small' x='-50' y='-60' className='flake slow opaque' />
      <use href='#small' x='30' y='70' className='flake slow' />
      <use href='#small' x='10' y='-80' className='flake slow opaque' />
    </svg>
  );
}

export default ForestWithSnowing;
