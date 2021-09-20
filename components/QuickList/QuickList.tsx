import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Link from "../Link/Link";

type QuickListProps = {
  title: string;
  cards: CtaProps[];
};

export type CtaProps = {
  title: string;
  highlight?: string;
  link?: string;
}

export const QuickList = (props: QuickListProps) => {
  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={{ gap: 2, mt: 2, mb: 2, pr: { xs: 0, md: 4 } }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        {props.title}
      </Typography>
      <Stack spacing={2}>
        {props.cards.map((card, idx) => (
          <Card key={idx} sx={{ "&:hover": { boxShadow: 6 } }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              {card.highlight && (
                <Typography variant="h4" sx={{ mr: 2 }}>
                  {card.highlight}
                </Typography>
              )}
              <Link href={card.link ?? "/"}>
                <Typography>{card.title}</Typography>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Grid>
  );
};
