import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import LocationCards from '../../widgets/LocationCards';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: 'flex',
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: 'center', textTransform: 'uppercase' }}
            >
              {t('home.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('home.text1')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('home.text2')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('home.text3')}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <LocationCards />
        </Grid>
      </Grid>
    </Container>
  );
}
