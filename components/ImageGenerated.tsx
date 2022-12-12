import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface ImageGeneratedProps {
  url: string;
}

const ImageGenerated: FC<ImageGeneratedProps> = ({ url }) => {
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  useEffect(() => {
    setIsGenerated(true);
  }, [url]);

  return (
    <div className='flex justify-center'>
      {isGenerated && !url && (
        <p className='text-center text-gray-200'>...Cargando</p>
      )}
      <Image src={url} alt='Generated Image' width={300} height={300} />
    </div>
  );
};

export { ImageGenerated };

// polar bear with a red scarf