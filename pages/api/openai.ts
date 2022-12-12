// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

interface Data {
  success: boolean;
  data: string | unknown;
}

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512'
    });
    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl
    });
  } catch (error) {
    res.status(400).json({ success: false, data: error });
  }
}
