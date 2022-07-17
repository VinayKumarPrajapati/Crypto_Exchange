import React from "react";
import styled from "styled-components";
import Porfolio from "./Porfolio";
import Promos from "./Promos";

export const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
	return (
		<Wrapper>
			<Porfolio
				thirdWebTokens={thirdWebTokens}
				sanityTokens={sanityTokens}
				walletAddress={walletAddress}
			/>
			<Promos />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	max-height: calc(100vh - 64px);
	overflow: scroll;
	& div {
		border-radius: 0.4rem;
	}
`;
