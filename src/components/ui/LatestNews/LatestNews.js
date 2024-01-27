import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import topNews from "@/assets/download2.jpg";
// import topNews2 from "@/assets/download1.jpg";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
  const { data } = await getAllNews();
  console.log(data[0]);
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              width={800}
              height={800}
              alt="top news"
            />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
              {data[0].category}
            </p>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography className="my-3" gutterBottom>
              By {data[0].author.name} - {data[0].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
              ...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 6).map((news) => (
          <Grid item xs={6} key={news.id}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={news.thumbnail_url}
                    height={500}
                    width={800}
                    alt="top news"
                  />
                </CardMedia>
                <CardContent>
                  <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                    {news.category}
                  </p>
                  <Typography>{news.title}</Typography>
                  <Typography className="my-3" gutterBottom>
                    By {data[0].author.name} - {data[0].author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data[0].details.length > 200
                      ? data[0].details.slice(0, 200) + "..."
                      : data[0].details}
                    ...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
