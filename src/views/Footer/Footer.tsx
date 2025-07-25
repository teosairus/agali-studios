import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { Container, Divider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-baise.png';

function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: 'grey.300',
          py: 4,
          px: { xs: 2, md: 10 },
          textAlign: 'left',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, sm: 12, md: 3 }}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img src={logo} alt="agali-studios-logo" height={150} />
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="h5" gutterBottom>
                {t('footer.contact')}
              </Typography>
              <Divider sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }} />
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306987045409"
                  underline="hover"
                  color="inherit"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 698 704 5409
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306943756551"
                  underline="hover"
                  color="inherit"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 694 375 6551
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="mailto:agkali.studios.1@gmail.com"
                  underline="hover"
                  color="inherit"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <EmailIcon />
                  agkali.studios.1@gmail.com
                </Link>
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="h5" gutterBottom>
                {t('footer.additionalInfo')}
              </Typography>
              <Divider sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://maps.app.goo.gl/Yjh4kmKJ8LYDGVyy5"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LocationPinIcon sx={{ color: theme.palette.error.main }} />
                  <Typography variant="body2">{t('footer.howToCome')}</Typography>
                </Link>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="h5" gutterBottom>
                {t('footer.followUs')}
              </Typography>
              <Divider sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }} />
              {/* <Box sx={{ mb: 2 }}>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <FacebookIcon sx={{ color: '#1877F2' }} />
                  <Typography variant="body2">Facebook</Typography>
                </Link>
              </Box> */}
              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://www.instagram.com/agali__studios/"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <InstagramIcon sx={{ color: theme.palette.text.secondary }} />
                  <Typography variant="body2">Instagram</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 2,
          px: 3,
          backgroundColor: theme.palette.grey[900],
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary">
            © 2025 {t('footer.title')}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
