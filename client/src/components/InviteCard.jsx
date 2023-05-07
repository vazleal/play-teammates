import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import individual from '../assets/images/vectors/individual.svg';
import CardTag from './CardTag.jsx'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    position: 'relative !important',
    borderRadius: '0 !important',
    background: 'linear-gradient(180deg, #FD5F6D 0%, #141C27 100%)',
    mixBlendMode: 'luminosity',
    opacity: '0.7',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  media: {
    width: '22px',
    height: '25px',
    left: '800%',
    top: '-1px',
    objectFit: 'contain',
    position: 'relative !important',
  },
});

function InviteCard({ title, number, engagement, communication }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div style={{ borderLeft: '6px', padding: '20px' }}>
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Typography sx={{
                position: 'absolute',
                width: '130px',
                height: '72px',
                left: '8%',
                top: '8%',
                fontFamily: 'Post No Bills Jaffna Light',
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '48px',
                lineHeight: '72px',
                textAlign: 'center',
                color: '#FFFFFF',
              }}>
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs="auto">
                  <CardMedia className={classes.media} image={individual} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
            <Grid item xs="auto">
                  <Typography sx={{
                    fontFamily: 'Advent Pro',
                    fontSize: '32px',
                    fontWeight: 300,
                    lineHeight: '1px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    marginLeft: '162px'                    
                  }}>
                    {number}
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
          <CardContent>
            <CardTag text={communication} />
            <CardTag text={engagement} />
          </CardContent>
        </CardContent>
      </div>
    </Card>
  );
};

export default InviteCard;