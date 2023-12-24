import './App.css';
import AnimatedTextCharacter from './components/AnimatedTextCharacter';
import AnimatedTextWord from './components/AnimatedTextWord';
import Candy from './components/Candy';
import ChristmasBauble from './components/ChristmasBauble';
import ChristmasTree from './components/ChristmasTree';
import ForestWithSnowing from './components/ForestWithSnowing';
import GiftBox from './components/GiftBox';
import GingerbreadFigure from './components/GingerbreadFigure';
import Ribbon from './components/Ribbon';
import RingingBell from './components/RingingBell';
import Snowman from './components/Snowman';
import Sock from './components/Sock';
import Star from './components/Star';

function App() {
  return (
    <div className='relative w-[100vw] h-[100%]'>
      <div className='absolute w-full bottom-[0px]'>
        <ForestWithSnowing />
      </div>

      <h2 className='absolute top-[5%] left-[20%] font-bold text-8xl h-32 text-green-500 font-heading'>
        <AnimatedTextCharacter text='Merry Christmas' />
      </h2>

      <h3 className='absolute top-[15%] right-[40%] mt-4 font-bold text-7xl h-32 flex text-blue-600 font-heading'>
        <AnimatedTextWord text='MyHu ' />
      </h3>

      <div className='relative bottom-0 w-[600px]'>
        <ChristmasTree />

        <div className='absolute w-[120px] top-[300px] left-[240px]'>
          <Star />
        </div>

        <div className='absolute w-[120px] top-[440px] left-[180px]'>
          <Ribbon />
        </div>

        <div className='absolute w-[120px] top-[568px] right-[180px]'>
          <ChristmasBauble />
        </div>

        <div className='absolute w-[150px] top-[640px] left-[100px]'>
          <RingingBell />
        </div>

        <div className='absolute w-[140px] bottom-[260px] right-[200px]'>
          <GingerbreadFigure />
        </div>

        <div className='absolute w-[80px] bottom-[260px] left-[150px]'>
          <Candy />
        </div>

        <div className='absolute w-[100px] bottom-[360px] right-[120px]'>
          <Sock />
        </div>
      </div>

      <div className='absolute w-[250px] bottom-[0px] left-[500px]'>
        <GiftBox />
      </div>

      <div className='absolute w-[350px] bottom-[0px] right-[100px]'>
        <Snowman />
      </div>
    </div>
  );
}

export default App;
