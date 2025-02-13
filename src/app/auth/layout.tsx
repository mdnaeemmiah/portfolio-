'use client';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="mx-auto pt-10 w-full max-w-screen-lg px-4">
        {children}
      </div>
    </Provider>
  );
}
