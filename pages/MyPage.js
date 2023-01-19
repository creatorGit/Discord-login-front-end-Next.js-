import { Button } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '../Auth';

const MyPage = () => {
    const { currentUser, loading } = useContext(AuthContext);

    return !loading && (
        <div>
            <h2>MY PAGE</h2>
            {currentUser
                ? < img src={`https://cdn.discordapp.com/avatars/${currentUser.discordId}/${currentUser.avatar}.png`} alt="" />
                : null
            }
            <div></div>
            <Button
                target="_blank"
                href="http://localhost:5000/api/auth/discord"
                className="blackButton"
            >
                SignIn
            </Button>
            <div></div>
            <Button
                target="_blank"
                // 環境に応じて"sample"を書き換えてください
                href="https://ddd.herokuapp.com/api/auth/discord"
                className="blackButton"
            >
                SignIn(heroku)
            </Button>
            <div></div>
            <Button
                variant='text'
                href="http://localhost:5000/api/auth/signout"
                className="blackButton"
            >
                SignOut
            </Button>
            <div></div>
            <Button
                variant='text'
                // 環境に応じて"sample"を書き換えてください
                href="https://ddd.herokuapp.com/api/auth/signout"
                className="blackButton"
            >
                SignOut(heroku)
            </Button>
            <div></div>
            <Link
                variant='text'
                href="http://localhost:3000">
                HOME
            </Link>
        </div>
    );
}

export default MyPage;
