import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Shake Me!",
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/magic-8-ball/magic-8-ball-title.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Magic 8 Ball',
  description: 'Reveal your future with the Magic 8 Ball!',
  openGraph: {
    title: 'Magic 8 Ball',
    description:  'Reveal your future with the Magic 8 Ball!',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/magic-8-ball/magic-8-ball-title.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Magic 8 Ball</h1>
    </>
  );
}