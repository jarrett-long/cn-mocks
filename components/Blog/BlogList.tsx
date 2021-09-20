import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Link from "../Link/Link";

export const BlogList = () => {
  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={{ gap: 2, mt: 2, mb: 2, pr: { xs: 0, md: 4 } }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Blog
      </Typography>
      <Stack spacing={2}>
        <Card>
          <Link href="/">
            <CardContent>
              <Typography>
                10 Highly Rated Charities Relying on Private Contributions
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/">
            <CardContent>
              <Typography>
                Avoiding Charity Scams: Questions to ask and ways to give
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/">
            <CardContent>
              <Typography>
                Avoiding Charity Scams: Questions to ask and ways to give
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/">
            <CardContent>
              <Typography>
                Avoiding Charity Scams: Questions to ask and ways to give
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Stack>
    </Grid>
  );
};
