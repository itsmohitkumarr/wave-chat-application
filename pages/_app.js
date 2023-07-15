import "@/styles/globals.css";
import Head from "next/head";
import { UserProvider } from "@/context/authContext";
import { ChatContextProvider } from "@/context/chatContext";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Wave-Chat-Application</title>
				<link rel='icon' href='/wave.png' />
			</Head>
			<UserProvider>
				<ChatContextProvider>
					<Component {...pageProps} />
				</ChatContextProvider>
			</UserProvider>
		</>
	);
}
