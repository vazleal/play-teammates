import { Box, Grid } from '@mui/material'
import '../fonts.css'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import TypoMain from '../components/TypoMain'

export function ShowInvite() {
    const { user } = useAuth();

    const classes = useStyles();

    async function getInvite(inviteId) {
        try {
            const invite = await api.get('/invites/show', { params: { inviteId: inviteId }});

            console.log('Convite recebido pela rota: ', invite); // TODO: Retirar após o fim da implementação

            return invite;
            
        } catch (err) {
            toast.error('Não foi possível buscar o convite');
        }
    };

    const { invite } = getInvite(inviteId);

    return (
        <Box sx={{ width: '100%' }}>
            <TypoMain
                sx={{
                    fontSize: '32px',
                    paddingTop: '24px',
                    paddingBottom: '24px',
                    textAlign: 'right'
                }}
            >
                Esses são todos os convites de Valorant e de Counter Strike.
            </TypoMain>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <InviteCard />
                </Grid>
                <Grid item xs={4}>
                    <InviteCard />
                </Grid>
                <Grid item xs={4}>
                    <InviteCard />
                </Grid>
                <Grid item xs={4}>
                    <InviteCard />
                </Grid>
            </Grid>
        </Box>
    )
}
