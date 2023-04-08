import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

interface Chats {
    isGroupChat: boolean;
    users: [name: string, email: string];
    _id: string;
    chatName: string;
}

const ChatPage: React.FC = () => {
    const [chats, setChats] = useState<Chats[]>([]);

    const fetchChats = async () => {
        let { data } = await axios.get('http://localhost:8080/api/chats');
        setChats(data);
        console.log(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div className='ChatPage'>
            {chats.map((chat) => {
                return <div key={chat._id}>{chat.chatName}</div>;
            })}
            <Button colorScheme='teal'>Button</Button>
        </div>
    );
};

export default ChatPage;
