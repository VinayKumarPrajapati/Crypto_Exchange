import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Main } from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const Dashboard = ({ address }) => {
	const [sanityTokens, setSanityTokens] = useState([]);
	const [thirdWebTokens, setThirdWebTokens] = useState([]);
	useEffect(() => {
		const getCoins = async () => {
			try {
				const coins = await fetch(
					"https://8el3awf8.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%27coins%27%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
				);
				const tempSanityTokens = await coins.json();

				setSanityTokens(tempSanityTokens.result);
			} catch (error) {
				console.error(error);
			}
		};

		return getCoins();
	}, []);
	useEffect(() => {
		if (sanityTokens) {
			const sdk = new ThirdwebSDK(
				new ethers.Wallet(
					process.env.NEXT_PUBLIC_METAMASK_KEY,
					ethers.getDefaultProvider("https://rinkeby.infura.io/v3")
				)
			);

			sanityTokens.map((tokenItem) => {
				const currentToken = sdk.getTokenModule(tokenItem.contractAddress);

				setThirdWebTokens((prevState) => [...prevState, currentToken]);
			});
		}
	}, [sanityTokens]);

	return (
		<Wrapper>
			<Sidebar />
			<MainContainer>
				<Header
					thirdWebTokens={thirdWebTokens}
					sanityTokens={sanityTokens}
					walletAddress={address}
				/>
				<Main
					thirdWebTokens={thirdWebTokens}
					sanityTokens={sanityTokens}
					walletAddress={address}
				/>
			</MainContainer>
		</Wrapper>
	);
};

export default Dashboard;

export async function getServerSideProps(context) {}

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	background-color: #0a0b0d;
	color: white;
	overflow: Scroll;
`;

const MainContainer = styled.div`
	flex: 1;
`;
