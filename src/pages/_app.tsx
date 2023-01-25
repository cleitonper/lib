import type { AppProps } from 'next/app'

import { FeaturesProvider } from '~/features/Features.provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FeaturesProvider>
      <Component {...pageProps} />
    </FeaturesProvider>
  );
}
