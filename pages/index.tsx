import { useState } from 'react';
import { Form } from '../components/Form';
import { ImageGenerated } from '../components/ImageGenerated';

const fetcher = (url: string, prompt: string) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ prompt }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

export default function Home () {
  const [url, setUrl] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');

  const useSubmit = async () => {
    const data = await fetcher('/api/openai', prompt);
    setUrl(data.data);
  };

  return (
    <section className='py-8'>
      <h1 className='underline text-3xl text-center text-gray-200'>
        Crea Imagenes solo con tu pensamiento
      </h1>
      <div className='flex my-12 justify-center'>
        <Form setPrompt={setPrompt} onSubmit={useSubmit} />
      </div>
      <div>
        <div className='flex justify-center flex-col space-y-3'>
          {url && <p className='text-center text-gray-200'>{prompt}</p>}
          {url && (
            <>
              <ImageGenerated url={url} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
