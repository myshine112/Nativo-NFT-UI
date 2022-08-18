import React from "react";
import {
    getContract,
    syncNets,
} from "../utils/blockchain_interaction";
import { currencys } from "../utils/constraint";
import { getNearContract, fromYoctoToNear, getNearAccount } from "../utils/near_interaction";
import { useParams, useHistory } from "react-router-dom";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";
import verifyImage from '../assets/img/Check.png';
import nativoLogo from '../assets/img/logo_nativo.png'
import discordLogo from '../assets/img/discord_logo.svg'
import discord from '../assets/img/discord.png'
import mediumLogo from '../assets/img/medium_logo.svg'
import medium from '../assets/img/medium.png'
import twitterLogo from '../assets/img/twitter_logo.svg'
import twitter from '../assets/img/twitter.png'
import telegramLogo from '../assets/img/telegram_logo.svg'
import telegram from '../assets/img/telegram.png'

function Community() {
    const [Landing, setLanding] = React.useState({
        theme: "yellow",
        currency: currencys[parseInt(localStorage.getItem("blockchain"))],
        tokens: [],
        page: parseInt(window.localStorage.getItem("page")),
        pag: window.localStorage.getItem("pagSale"),
        blockchain: localStorage.getItem("blockchain"),
        tokensPerPage: 9,
        tokensPerPageNear: 9,
    });

    return (
        <section className={"text-gray-600 body-font pt-20 dark:bg-darkgray"}>
            <div className="grid grid-cols-3" >
                <div className="max-w-sm m-5 bg-white rounded-[50px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-yellow1 hover:scale-105 overflow-hidden">
                    <a href="https://discord.gg/q2R6rtY4ks" target="_blank">
                        <img className="rounded-t-lg mx-auto py-8 px-4" src={discordLogo} alt="" />
                    </a>
                    <a href="https://discord.gg/q2R6rtY4ks" target="_blank">
                        <img className="rounded-t-lg mx-auto customBlur" src={discord} alt="" />
                    </a>
                </div>
                <div className="max-w-sm m-5 bg-white rounded-[50px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-yellow1 hover:scale-105 overflow-hidden">
                    <a href="https://nativonft.medium.com/" target="_blank">
                        <img className="rounded-t-lg mx-auto py-8 px-4" src={mediumLogo} alt="" />
                    </a>
                    <a href="https://nativonft.medium.com/" target="_blank">
                        <img className="rounded-t-lg mx-auto customBlur" src={medium} alt="" />
                    </a>
                </div>
                <div className="max-w-sm m-5 bg-white rounded-[50px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-yellow1 hover:scale-105 overflow-hidden">
                    <a href="https://twitter.com/nativonft" target="_blank">
                        <img className="rounded-t-lg mx-auto py-8 px-4" src={twitterLogo} alt="" />
                    </a>
                    <a href="https://twitter.com/nativonft" target="_blank">
                        <img className="rounded-t-lg mx-auto customBlur" src={twitter} alt="" />
                    </a>
                </div>
                <div className="max-w-sm m-5 bg-white rounded-[50px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-yellow1 hover:scale-105 overflow-hidden">
                    <a href="https://t.me/+TFdhJmJzwmkwNDQx" target="_blank">
                        <img className="rounded-t-lg mx-auto py-8 px-4" src={telegramLogo} alt="" />
                    </a>
                    <a href="https://t.me/+TFdhJmJzwmkwNDQx" target="_blank">
                        <img className="rounded-t-lg mx-auto customBlur" src={telegram} alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Community;