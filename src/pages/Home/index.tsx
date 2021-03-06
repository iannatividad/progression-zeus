import React from "react";
import Layout from "../../components/Layout";
import * as S from "./styles";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    return (
        <>
            <Layout>
                <S.Wrapper></S.Wrapper>
            </Layout>
        </>
    );
};
