import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
	return (
		<Wrapper>
			<ButtonsContainer>
				<Title>Web3 Assets</Title>
				<Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
					Buy / Sell
				</Button>
				<Link href="">
					<Button>Send / Receive</Button>
				</Link>
			</ButtonsContainer>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	width: calc(100%);
	/* TRouBLe */
	padding: 1rem 1.5rem;
	border-bottom: 1px solid #282b2f;
	display: flex;
	align-items: center;
`;

const ButtonsContainer = styled.div`
	display: flex;
`;

const Button = styled.div`
	border: 1px solid #282b2f;
	padding: 0.8rem;
	font-size: 1.3rem;
	font-weight: 500;
	border-radius: 0.4rem;
	margin-right: 1rem;
	&:hover {
		cursor: pointer;
	}
`;

const Title = styled.div`
	font-size: 2rem;
	font-weight: 600;
	flex: 1;
`;
