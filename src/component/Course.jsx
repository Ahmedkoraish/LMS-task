import { Box, Typography } from "@mui/material";

export default function Topic() {


    return (
        <>
            {/* container */}
            <Box sx={{
                bgcolor: "red",
                px: { xs: 2, md: 5 },
                mt: { xs: 2 }

            }}>
                {/* title and arrow  */}
                <Box sx={{
                    bgcolor: "blue"
                }}>
                    <Typography variant="h3" color="secondary">
                        Latest Courses
                    </Typography>

                </Box>
                {/* images card */}
                <Box sx={{
                    bgcolor: "green",
                    my: 3,
                    display: "flex",
                    gap: 3
                }}>
                </Box>


            </Box>
        </>
    )
}