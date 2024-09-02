import React from 'react';
// import ButtonComponents from '../button/ButtonComponents';

interface TutorCartProps {
  tutor: {
    id: number;
    image: string;
    name: string;
    course: number;
    description: string;
    rating: number;
    reviews: string;
    lessons: string;
    price: string;
  };
}

const TutorCart: React.FC<TutorCartProps> = ({ tutor }) => {
  const { image, name, course, description, rating, reviews, lessons, price } =
    tutor;

  return (
    <div className='max-w-full h-[200px] mb-4 bg-[#fff] rounded-lg shadow-custom-shadow cursor-pointer transition-shadow duration-[0.15s] ease-in-out flex hover:shadow-lg active:shadow-xl overflow-hidden'>
      <div className='w-44 h-auto flex-shrink-0'>
        <img
          src={image}
          alt={`Tutor ${name}`}
          className='w-full h-full object-cover rounded-l-lg'
        />
      </div>
      <div className='flex  p-6 gap-3 overflow-hidden flex-grow'>
        <div className='flex flex-col w-1/2 bg-sky-300'>
          <div className='flex items-start'>
            {' '}
            <h1 className='m-2 font-medium text-2xl'>{name}</h1>
            {/* <ButtonComponents className='w-52' label='Responds quickly' onClick={() => {}} /> */}
          </div>
          <div>
          <p className='text-sm text-gray-600'>{description}</p>
          </div>
    </div>

        <div className='flex flex-col items-center bg-red-400'>
        <h1 className='font-bold text-3xl'>{price}</h1>
          <h1 className='mr-4 text-yellow-500'>{rating}</h1>
          <h1 className='mr-4'>{reviews}</h1>
          <h1> {lessons}</h1>
          <h1>{course}</h1>
        </div>
       
      </div>
    </div>
  );
};

export default TutorCart;
