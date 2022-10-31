import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ToastContainer />
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
