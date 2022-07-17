import React from "react";
import styled from "styled-components";
import Porfolio from "./Porfolio";

export const Main = () => {
	return (
		<Wrapper>
			<Porfolio />
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
