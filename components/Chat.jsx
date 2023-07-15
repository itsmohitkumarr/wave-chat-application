import React from "react";
import Messages from "./Messages";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import { useChatContext } from "@/context/chatContext";
import { useAuth } from "@/context/authContext";

const Chat = () => {
	const { currentUser } = useAuth();
	const { data, users } = useChatContext();

	const isUserBlocked = users[currentUser.uid]?.blockedUsers?.find(
		(u) => u === data.user.uid
	);

	const iamBlocked = users[data.user.uid]?.blockedUsers?.find(
		(u) => u === currentUser.uid
	);

	return (
		<div className='flex flex-col p-5 grow'>
			<ChatHeader />
			{data.chatId && <Messages />}
			{!isUserBlocked && !iamBlocked && <ChatFooter />}

			{isUserBlocked && (
				<div className='w-full text-center text-c3 py-5'>
					{`You have blocked ${data.user.displayName}.`}
				</div>
			)}

			{iamBlocked && (
				<div className='w-full text-center text-c3 py-5'>
					{`${data.user.displayName} has blocked you!`}
				</div>
			)}
		</div>
	);
};

export default Chat;
