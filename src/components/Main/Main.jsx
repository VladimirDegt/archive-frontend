import {Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';

export const Main = ({isOpenContacts, allContacts}) => {
  return (
    <main>
    <Paper sx={{
      backgroundImage:  "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(https://source.unsplash.com/random)", 
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat", 
      backgroundPosition: "center", 
      marginTop: 8,
      minHeight: 300
      }}>
      <Container maxWidth="xl" sx={{paddingTop: 5}}>
        <Grid container>
          <Grid item xl={6}>
            <div>
              <Typography variant='h1' gutterBottom color={"#FAFAFA"}>Web Developer</Typography>
              <Typography variant='h5' paragraph color={"#FAFAFA"}>This application demonstrates the connection between the frontend and backend, illustrating their interplay in a seamless manner</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    {isOpenContacts && (
      <>
      <Container maxWidth="md" sx={{paddingTop: 2}}>
      <Typography variant='h4' align='center' gutterBottom >Contacts</Typography>
      </Container>
        <Container maxWidth="lg" spacing={4}>
          <Grid container spacing={2} justifyContent="center">
            {allContacts && allContacts.map(item => {
              return (
                  <Grid item key={item.id} xs={12} sm={6} md={3}>
                    <Card>
                      <CardMedia 
                        sx={{width: "100%", height: 200}}
                        image='https://source.unsplash.com/random'
                        title='Image title'
                      />
                      <CardContent>
                        <Typography variant="h5">Name:</Typography>
                        <Typography mb={2}> {item.name}</Typography>
                        <Typography variant="h5">Email:</Typography>
                        <Typography mb={2}> {item.email}</Typography>
                        <Typography variant="h5">Phone:</Typography>
                        <Typography mb={2}> {item.phone}</Typography>
                        <Typography variant="h5">Favorite:</Typography>
                        <Typography mb={2}> {String(item.favorite)}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
              )
            })}
          </Grid>
        </Container>
        </>
    )}
    </main>
  );
};
