import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Dialog, IconButton, Link } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const imageThumbnalList = [
  "nCloud/Team1.jpg",
  "nCloud/Team2.jpg",
  "nCloud/Team3.jpg",
];

const Ncloud = () => {
  const [expanded, setExpanded] = React.useState(false);
  const imageRef = React.useRef();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    imageRef.current = e.target.src;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card>
        <CardHeader
          title="Naver Cloud DevOps 2기"
          subheader="2023.06.30 ~ 2024.01.08"
        />
        <Carousel>
          {imageThumbnalList.map((image, key) => (
            <CardMedia
              component="img"
              key={key}
              image={image}
              height={"700px"}
              alt="Paella dish"
              style={{
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
          ))}
        </Carousel>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            fiveguys 팀원 단체 사진
          </Typography>
          <br />
          <Typography variant="h6">
            강남에 위치한 비트캠프에서의 6개월 여정
          </Typography>
          <Typography variant="body2" color="text.secondary">
            JAVA SE, Servlet & JSP, Spring
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Linux, nCloud Skill
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Git, Docker, Jenkins
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Code Refactoring, Self Project (Shopping System), Team Project
            (Daangn Bench Marking)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="https://github.com/K0TLINER" target="_blank">
              Presentation Youtube Link
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="https://github.com/songchan0321/koguma" target="_blank">
              Github Repository Link
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link
              href="https://hub.docker.com/search?q=kotliner"
              target="_blank"
            >
              Docker Hub Link
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="/nCloud/presentation.pdf" target="_blank">
              Presentation PDF
            </Link>
          </Typography>
          <Typography id="portfolio" variant="body2" color="text.secondary">
            <Link href="/nCloud/portfolio.pdf" target="_blank">
              Portfolio PDF
            </Link>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon color="primary" sx={{ fontSize: "2.3rem" }} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" paragraph>
              - 가장 시간이 빨리간 6개월 -
            </Typography>
            <Typography paragraph>
              대학교 졸업에 마지막 학기를 앞두고 이미 전공 수업을 모두 들어서
              나의 경험에 도움이 될만한 것이 무엇이 있을까 찾는 중에 Naver
              Cloud에서 지원하는 과정인 DevOps 2기를 지원했습니다. 비전공자도
              많이 하는 과정이라고 들었지만 저한테 가장 메리트가 있다고 생각든
              점은 바로 Naver Cloud 크레딧 300만원 지원이였습니다.
              <br />
              AWS ec2 free 플랜으로 사용해봤던 저는 학생으로써 돈이 없어서 유료
              제품군을 써보지 못했습니다. 하지만 이번 기회에 잘 사용되는
              플랫폼은 아니지만 어차피 클라우드라는 큰 틀은 벗어나는 것 같지는
              않아서 좋은 기회라고 생각했습니다.
            </Typography>
            <Typography paragraph>
              첫 12주 동안 JAVA SE, JAVA Servlet & JSP, Spring에 대해서
              배웠습니다. 이미 다 배우고 능숙하게 사용하고 있었는데 제가 놓치고
              있던 부분이 생각보다 많았다는 것을 알았습니다.
              <br />
              크게 느낀 부분은 Spring 파트였습니다. 저는 Spring boot를
              사용해왔었는데 JAVA의 Servlet파트와 Spring을 배우고 나니 Spring
              boot가 좀 더 친근하게 다가오게 되었습니다. Servlet과 WAS로 웹
              환경이 구성되었을 때와 비교하여, Spring 이라는 Framework를
              사용한다면 코드에 대부분을 메타데이터인 xml로 처리하는 것과 IOC에
              필요성에 대해 경험하였고 xml도 많아지므로 Spring boot 또한 더
              메타데이터를 줄이는 이 흐름자체가 어느 곳에서도 경험해볼 수
              없었지만 이 과정에서 경험을 할 수 있어서 저는 너무 좋았습니다.
              <br />
              저는 흐름이 있어야지 이해하기도 편하고 기억도 잘하는 편이라서 이
              경험으로 인해 문제해결능력이 많이 향상된 것 같습니다.
            </Typography>
            <Typography paragraph>
              이 과정에서 개인 프로젝트를 진행했는데 그 때 12번의 리펙터링을
              진행했습니다.
            </Typography>
            <CardMedia
              component="img"
              image={"nCloud/Mini_pjt.jpg"}
              height={"1200px"}
              alt="미니 프로젝트 사진"
              style={{
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              리펙터링 과제표
            </Typography>

            <Typography paragraph>
              이로인해 자바 기술의 초창기 웹으로 시작해서 현재 많이 사용되는
              스프링 부트까지 어떤 점이 보완되었으며 어떤 이유로 인해 새로운
              기술이 탄생하는지 피부로 직접 느낄수 있었습니다.
              <br />
              대학 과정에서는 수강신청을 통해 과목을 배우기 때문에 필요에 의해
              또는 어떤 이유로 이 과목을 수강해야하는지 배울 수 없었는데 배울 수
              있어서 좋았습니다.
            </Typography>
            <Typography paragraph>
              그 이후 6주정도 Linux와 nCloud 제품들을 배웠습니다. 또 Docker,
              Jenkins, React를 배웠는데 이 기술 같은 경우는 깊게 하진않았고
              스프링처럼 왜 이 기술들이 사용되었는지와 사용법에 대해서
              배웠습니다.
            </Typography>
            <Typography paragraph>
              마지막 9주간은 팀 프로젝트를 진행했습니다. 4주 분석설계단계, 4주
              구현단계, 1주 포트폴리오 작성에 단계를 거쳤습니다.
              분석설계단계에서는 팀에서 이전부터 생각해놓고 있던 구현 주제를
              명확히합니다. 그 이후 현업요구사항정의서, Usecase 정의서, Usecase
              Diagram, Usecase 추적표, Class Diagram, ERD Diagram 등을 작성하는
              단계입니다. 구현에만 신경썼던 학생 시절에는 이 단계를 오랫동안
              생각하지 않았습니다. 그러다 보니 서로 말이 안맞아서 시간이
              지체되는 경우가 있었는데 이 과정에서 많은 커뮤니케이션을 한다면
              그런상황은 적어질거라고 느꼈습니다.
              <br /> 여기서 작성한 내용은 모두 PDF로 모아서 정리했습니다.&nbsp;
              <Link href="/nCloud/portfolio.pdf" target="_blank">
                Portfolio PDF
              </Link>
            </Typography>
            <Typography paragraph>
              제가 부서에 새로 들어간다면 Usecase와 같은 자료를 가지고
              사전학습을 할 수 있는 능력을 키웠습니다.
            </Typography>
            <Typography paragraph>
              팀 프로젝트에서 당근 플랫폼을 밴치 마킹한 고구마(고민말고 구하세요
              마을에서) 프로젝트를 진행했습니다. 제가 담당한 파트는 결제파트,
              채팅파트, DevOps를 담당했습니다. 먼저 결제 파트에서 결제 금융원
              API로 예금주 확인을 통한 계좌 인증, 자체 비밀번호 설정, 카카오
              페이를 연동한 포인트 시스템을 구축했습니다.
              <br />
              채팅 시스템에서는 MSA 연습을 위해서 메인 서비스와 채팅 서비스를
              분리했고 채팅은 Node와 Socket IO를 이용했고 MongoDB로 메시지를
              관리했고, 알림은 Redis로 관리했습니다.
              <br />
              상대방에 읽음 여부, 채팅을 치고있다면 채팅을 치고있다고 표시를
              하고, 실시간 알림, 채팅방 이미지 업로드, 약속 잡기, 위치 공유,
              송금 및 송금 요청하기 기능을 개발했습니다. 모바일 웹에서 현재
              위치를 얻어야하므로 https환경으로 배포환경을 구축했습니다. 그리고
              실시간 영상 통화 기능, 채팅방 나가기 및 차단 기능으로 채팅방을
              관리했습니다. 채팅방은 MySQL로 관리하기 때문에 다른 서비스간 REST
              API요청을 통해서 데이터를 주고 받았습니다. 구현한 내용은 Youtube에
              업로드했습니다. 발표 자료였기 때문에 모든 내용이 들어가지는
              못했지만 핵심 기능은 어느 정도 들어갔습니다. 하지만 아쉬운 점은
              채팅방과 메시지가 다른 서비스의 DB로 구성되어있기 때문에
              트랜잭션에 관한 문제는 해결하지 못했습니다. MSA를 공부하면서
              해결해야할 과제중 하나입니다.
            </Typography>
            <Typography paragraph>
              DevOps를 구성했는데 Jenkins와 Dockerfile를 이용하니 수월하게 자동
              배포가 이루어졌습니다. 그림으로 구성하여 저희의 시스템을 보기
              편하게 구성해봤습니다.
            </Typography>
            <Carousel>
              <CardMedia
                component="img"
                image={"nCloud/cloud_architecture.png"}
                alt="Architecture"
                style={{
                  width: "100%",
                  borderTop: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              />
              <CardMedia
                component="img"
                image={"nCloud/server_architecture.png"}
                alt="Architecture"
                style={{
                  width: "100%",
                  borderTop: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              />
            </Carousel>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              아키텍쳐 구성 사진
            </Typography>
            <Typography paragraph>
              여기서 사용된 도커 이미지및 코드는 Docker Hub와 Github에
              업로드해서 보관했습니다.
            </Typography>
            <Typography paragraph>
              이 과정을 통해서 Docker와 Jenkins를 사용에 많이 익숙해졌지만 아직
              많이 부족합니다. MSA에 대해서 확실하게 가닥을 잡으려고 노력하고
              K8S도 필요성을 느끼고 깊게 공부해보고 싶습니다. kafka도 마찬가지로
              필요성을 느낄 수 있도록 많은 경험을 쌓도록 노력하겠다고
              생각했습니다.
            </Typography>
          </CardContent>
        </Collapse>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <CardMedia
            component="img"
            height="auto"
            image={imageRef.current}
            alt="사진 상세보기"
            style={{ width: "100%" }}
          />
        </Dialog>
      </Card>
    </>
  );
};

export default Ncloud;
