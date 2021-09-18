import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "../Link/Link";
import { Article } from "./types";

export const NewsHero = ({}) => {
  const hover = {"&:hover": { boxShadow: 6 } };
  const stories: Article[] = [
    {
      heading: "Crisis in Afghanistan",
      subheading:
        "Highly-rated international aid and relief charities responding to the needs of Afghans in crisis",
      link: "https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=8993",
      image:
        "https://cn-web-site.s3.amazonaws.com/Hot+Topics+2021/Afghanistan+HT+(8-2021).png",
    },
    {
      heading: "Providing Relief to Louisiana",
      subheading:
        "Charities involved in relief and recovery efforts, providing food, shelter, medical services/supplies, and debris management",
      link: "https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=8993",
      image:
        "https://cn-web-site.s3.amazonaws.com/Hot+Topics+2021/Hurricane+Ida+HT+(8-2021)+(1).png",
    },
    {
      heading: "Eathquake in Haiti",
      subheading:
        "Highly-rated charities providing relief and recovery efforts in the aftermath of the devastating 7.2 magnitude earthquake",
      link: "/",
      image:
        "https://cn-web-site.s3.amazonaws.com/Hot+Topics+2021/Haiti+Earthquake+HT+2021.png",
    },
    {
      heading: "Eathquake in Haiti",
      subheading:
        "Highly-rated charities providing relief and recovery efforts in the aftermath of the devastating 7.2 magnitude earthquake",
      link: "/",
      image:
        "https://cn-web-site.s3.amazonaws.com/Hot+Topics+2021/Haiti+Earthquake+HT+2021.png",
    },
    {
      heading: "Eathquake in Haiti",
      subheading:
        "Highly-rated charities providing relief and recovery efforts in the aftermath of the devastating 7.2 magnitude earthquake",
      link: "/",
      image:
        "https://cn-web-site.s3.amazonaws.com/Hot+Topics+2021/Haiti+Earthquake+HT+2021.png",
    },
    {
      heading: "",
      subheading: "",
      link: "/",
      image: "/",
    },
  ];
  return (
    <>
      <Grid container sx={{ py: 2 }}>
        <Grid
          item
          md={7}
          xs={12}
          sx={{ pr: { xs: 0, md: 1 }, mb: { xs: 2, md: 0 } }}
        >
          <Card
            elevation={1}
            variant="elevation"
            sx={{ height: 1, p: 4, ...hover }}
          >
            <Link href={stories[0].link}>
              <Image
                src="https://cn-web-site.s3.amazonaws.com/Hot+Topics+2021/Afghanistan+HT+(8-2021).png"
                width={800}
                height={500}
              />
              <Typography component="h1" variant="h2">
                {stories[0].heading}
              </Typography>
              <Typography variant="body1">{stories[0].subheading}</Typography>
            </Link>
          </Card>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          container
          direction="column"
          wrap="nowrap"
          sx={{
            height: "auto",
            p: {
              xs: 0,
              md: 1,
            },
            // pr: {
            //   xs: 0,
            //   md: 1,
            // },
            maxHeight: '90vh',
            overflowY: "scroll",
          }}
        >
          <Stack sx={{ gap: 2 }}>
            {stories.map((story, index) => (
              <Card
                key={index}
                elevation={1}
                variant="elevation"
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  ...hover,
                }}
              >
                <Image src={story.image} width={160} height={120} />
                <Box sx={{ ml: 2 }}>
                  <Link href={story.link}>
                    <Typography variant="h6">{story.heading}</Typography>
                  </Link>
                  <Typography variant="body1">{story.subheading}</Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
