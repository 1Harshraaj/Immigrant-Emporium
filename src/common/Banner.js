import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Banner = ({ images, speed = 35000 }) => {
    return (
        // <div className="slider">
        //     <div className="slider-track">
        <div className="inner">
            <div className="wrapper">
                <section style={{ "--speed": `${speed}ms` }} >
                    {images.concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).concat(images).map(({ id, image }) => (
                        <div className="card-img">
                            <Grid item xs={2} sm={4} md={4} key={id}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: 'auto',
                                            height: 128,
                                        },
                                    }}
                                >
                                    <Paper>

                                        <div className="card">
                                            <div className="card-content">
                                                <CardContent>
                                                    <div className="image" key={id}>
                                                        <img className="our-services" src={image} alt={id} />
                                                    </div>
                                                </CardContent>
                                            </div>
                                        </div>

                                    </Paper>
                                </Box>
                            </Grid>
                        </div>
                    )
                    )}
                </section>
            </div>
        </div>
        //     </div>
        // </div>
    );
};

export { Banner };
