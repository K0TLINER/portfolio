import {
  CardContent,
  CardMedia,
  Chip,
  Link,
  Stack,
  Tooltip,
  Typography,
  tooltipClasses,
} from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        color={"primary"}
        sx={{ m: 0, p: "1.5rem 1.5rem 1.5rem 0" }}
      >
        ABOUT ME
      </Typography>
      <Stack direction={"row"}>
        <CardMedia
          sx={{ width: "30%", height: 340 }}
          image="TH.jpg"
          title="김태현"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            KIM TAE HYUN
          </Typography>
          <Typography variant="body1" color="text.secondary">
            trends.kts@gmail.com
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Tooltip
              title="Github"
              arrow
              slotProps={{
                popper: {
                  sx: {
                    [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: "5px",
                      },
                  },
                },
              }}
            >
              <Link href="https://github.com/K0TLINER" target="_blank">
                K0TLINER
              </Link>
            </Tooltip>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bachelor’s Degree in Computer Science(Software)
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: "1rem" }}>
            <Chip sx={{ width: "6rem" }} label="JAVA" color="primary" />
            <Chip sx={{ width: "6rem" }} label="Kotlin" color="success" />
            <Chip sx={{ width: "6rem" }} label="Spring" />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: "1rem" }}>
            <Chip sx={{ width: "6rem" }} label="Python" color="primary" />
            <Chip sx={{ width: "6rem" }} label="Django" />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: "1rem" }}>
            <Chip sx={{ width: "6rem" }} label="JS" color="primary" />
            <Chip sx={{ width: "6rem" }} label="Node" />
            <Chip sx={{ width: "6rem" }} label="React" />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: "1rem" }}>
            <Chip sx={{ width: "6rem" }} label="Docker" color="primary" />
            <Chip sx={{ width: "6rem" }} label="Jenkins" />
            <Chip sx={{ width: "6rem" }} label="K8S" />
          </Stack>
        </CardContent>
      </Stack>
      <b style={{ fontSize: "25px" }}>개발자</b>는{" "}
      <span style={{ fontSize: "18px" }}>코드 관리</span>와{" "}
      <span style={{ fontSize: "18px" }}>서비스 확장성</span>을 고려해야하고{" "}
      <span style={{ fontSize: "18px" }}>문서화</span>하는 습관을 가져야한다.
    </>
  );
};

export default AboutMe;
