import { FC } from 'react';

interface FormProps {
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
}

const Form: FC<FormProps> = ({ setPrompt, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className='flex w-96 flex-col space-y-2' onSubmit={handleSubmit}>
      <label
        className='flex px-2 border-solid border-b-2 border-slate-800 bg-transparent'
        htmlFor='prompt'
      >
        <input
          name='prompt'
          className='outline-none bg-transparent text-gray-200 w-full'
          type='text'
          placeholder='¿En que piensas?'
          onChange={e => setPrompt(e.target.value)}
        />
        <svg
          className='w-6 h-6 text-gray-200'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </label>
      <button
        className='h-8 w-48 self-center bg-slate-800 text-gray-200 shadow-2xl hover:underline active:border-solid active:border-2 active:border-sky-500 rounded-lg'
        type='submit'
      >
        Crear
      </button>
    </form>
  );
};

export { Form };
