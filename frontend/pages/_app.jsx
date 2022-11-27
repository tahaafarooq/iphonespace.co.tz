import '../styles/globals.css'
import MainLayout from "../src/components/layouts/MainLayout";
import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/css/tabler-flags.min.css'
import '@tabler/core/dist/css/tabler-payments.min.css'
import '@tabler/core/dist/css/tabler-vendors.min.css'
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout){
    return (
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
    )
  }
  return (
      <MainLayout>
        <ToastProvider autoDismissTimeout={15000}>
          <Component {...pageProps} />
        </ToastProvider>
      </MainLayout>
  );
}

export default MyApp
