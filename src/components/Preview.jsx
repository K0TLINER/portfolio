import { CardContent, Stack, Typography } from "@mui/material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Preview = () => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        color={"primary"}
        sx={{ m: 0, p: "1.5rem 1.5rem 1.5rem 0" }}
      >
        PREVIEW
      </Typography>

      <Stack direction={"row"}>
        <CardContent sx={{ padding: "0 ", width: "100%" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#97BDE0" }}
            >
              <Typography variant="h5">
                <b>Backend</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ fontFamily: "MyFont" }}>
                자바와 코틀린을 통해 API 서버를 Spring Framework로 개발
                <br />
                Spring Security를 통한 OAuth 사용, JWT를 이용해 인가및 인증 처리
                <br />
                django를 통해서 빠르게 서버를 구성, bs4와 같은 크롤링 도구를
                통해서 웹 크롤링을 경험
                <br />
                open API 사용시 frontend CORS 문제 해결을 위한 API 서버 개발
                <br />
                node의 express를 통해서 socket 채팅 서버와 webRTC 화상 통화 서버
                개발
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#97BDE0" }}
            >
              <Typography variant="h5">
                <b>Frontend</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ fontFamily: "MyFont" }}>
                JSP를 이용해서 하나의 WAS에서 코드 개발
                <br />
                React를 통한 SPA 웹 페이지 개발
                <br />
                MUI를 사용해서 웹 페이지 디자인
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#97BDE0" }}
            >
              <Typography variant="h5">
                <b>DevOps</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ fontFamily: "MyFont" }}>
                Docker를 통한 애플리케이션 컨테이너 구축
                <br />
                Docker Hub에 Dockerfile로 만든 이미지를 보관
                <br />
                Jenkins와 Github webhooks로 Tomcat, Nginx 서버 CI/CD 처리
                <br />
                nCloud SaaS를 이용해 다양한 서비스 이용(Auto Scaling, Load
                Balancing, Object Storage, Docker Registry...)
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Stack>
    </>
  );
};

export default Preview;
