import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Lighthouse from "../components/Lighthouse";
import styled from "styled-components";

const Title = styled.h1`
  color: black;
  font-size: 45px;
`;

const Footer = styled.h4`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
`;

const MyGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>St. Mary's Lighthouse Project</title>
      </Head>
      <Container maxWidth="lg">
        <MyGrid>
          <img src="lighthouse-icon.png" alt="lighthouse" />
          <Title>History of Forte de Santo Antônio da Barra</Title>
          <img src="lighthouse-icon.png" alt="lighthouse" />
        </MyGrid>

        <Box my={4}>
          <Typography variant="h4" paragraph align="center">
            The Barra lighthouse is located at Forte de Santo Antônio da Barra
            in Salvador, Bahia, Brazil.
          </Typography>
          <Typography variant="h6" component="h4" gutterBottom>
            The fort was built in 1501 and the lighthouse in 1702, to guard the
            entrance to the Bay of all Saints during the period of the
            Portuguese Empire. The black and white striped lighthouse is one of
            the oldest military structures in Brazil and an iconic Salvador's
            landmarks. <br />
            The interior of the fort has been transformed into a maritime museum
            and there is also an exhibit about the Portuguese colony's brutal
            slave trade, which brought millions across the Atlantic from Africa.
          </Typography>
          <MyGrid>
            <Grid container spacing={2}>
              <Card>
                <Typography variant="h6" paragraph align="center">
                  Click on the Lighthouse to switch between Day / Night
                </Typography>
                <Lighthouse />
              </Card>
            </Grid>
          </MyGrid>
        </Box>
      </Container>
      <Footer>Developed by Luigi Macedo, 4th Class Ms Daly</Footer>
    </>
  );
}
