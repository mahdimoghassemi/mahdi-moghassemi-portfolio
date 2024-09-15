// MUI
import {
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";

// components
import { Marquee, Safari } from "@/components/magicui";

// ----------------------------------------------------------------------

const reviews = [
  {
    name: "Pazh Tax Company",
    role: "Front-End Developer",
    img: "/images/companies/pazh.svg",
    dates: "April 2024 - Present",
  },
  {
    name: "Soroush Educational Complex",
    role: "Full-Stack Developer",
    img: "/images/companies/soroush.png",
    dates: "June 2023 - Present",
  },
  {
    name: "3Tex Exchange",
    role: "Front-End Developer",
    img: "/images/companies/3tex.png",
    dates: "Nov 2023 - April 2024",
  },
  {
    name: "Karin Payesh",
    role: "Front-End Developer (Intern)",
    img: "/images/companies/karin.png",
    dates: "June 2022 - Oct 2022",
  },
];

const ReviewCard = ({
  img,
  name,
  role,
  dates,
}: {
  img: string;
  name: string;
  role: string;
  dates: string;
}) => {
  return (
    <Card
      sx={{
        width: 256,
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "8px",
        transition: "all .3s",
        ":hover": {
          bgcolor: "lightgray",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar alt={name} src={img} sx={{ width: 48, height: 48 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="primary">
              {name}
            </Typography>
            <Typography variant="caption" fontWeight="medium">
              {role}
            </Typography>
            <Typography variant="caption" color="textDisabled">
              {dates}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function WorkView() {
  return (
    <Box sx={{ backgroundColor: "#1e2a38" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            position: "relative",
            overflow: "hidden",
            height: { xs: "120vh", md: "110vh" },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 0, sm: 1, md: 1.5 },
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              WORK EXPERIENCES 💼
            </Typography>
            <Safari
              url="http://www.3tex.io"
              src="images/screens/3tex.png"
              className="size-full"
            />
          </Box>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute bottom-0 left-0 w-1/6 h-[215px] bg-gradient-to-r from-[#1e2a38] dark:from-background"></div>
          <div className="pointer-events-none absolute bottom-0 right-0 w-1/6 h-[215px] bg-gradient-to-l from-[#1e2a38] dark:from-background"></div>
        </Box>
      </Container>
    </Box>
  );
}
