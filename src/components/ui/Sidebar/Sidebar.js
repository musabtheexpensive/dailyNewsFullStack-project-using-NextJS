import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/download3.jpg";
const Sidebar = () => {
  return (
    <Box className="mt-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography className="my-3" gutterBottom>
              By Musab Al Mahi -Mar 18 2024{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It IS A Long Established Fact That a Reader Will Be Distracted By
              The Readable Content Of A Page when Looking At Its Layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Sidebar;
