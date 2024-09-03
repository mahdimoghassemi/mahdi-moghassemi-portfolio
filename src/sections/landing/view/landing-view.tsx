"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// MUI
import { Grid, Box, Container, styled } from "@mui/material";

// components
import { Globe, DotPattern } from "@/components/magicui";
import { HomeTitle, ImageContainer, ButtonBox } from "../components";

// ----------------------------------------------------------------------

interface FadeInBoxProps {
  show: boolean;
}

const FadeInBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})<FadeInBoxProps>(({ show }) => ({
  opacity: show ? 1 : 0,
  transition: "opacity 1s ease-in-out",
}));

export default function LandingView() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "white",
      }}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      <Container
        sx={{
          mt: { md: 8, sm: 4, xs: 4 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={9}>
            <FadeInBox show={show} sx={{ width: "100%" }}>
              <HomeTitle />
            </FadeInBox>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <FadeInBox show={show} sx={{ width: "100%" }}>
              <ImageContainer />
              <ButtonBox />
            </FadeInBox>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          width: "100%",
          height: { md: "55vh", sm: "50vh", xs: "40vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <FadeInBox show={show} sx={{ position: "relative" }}>
          <Globe
            className={cn(
              "absolute transform -translate-x-1/2",
              "lg:bottom-[-100px] md:left-1/4",
              "md:bottom-[-150px] md:left-1/4",
              "sm:bottom-[-150px] sm:left-1/2 xs:bottom-[-100px] xs:left-1/2"
            )}
          />
        </FadeInBox>
      </Box>
    </Box>
  );
}
