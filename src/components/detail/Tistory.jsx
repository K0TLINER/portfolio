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

const PngTitle = ({ children }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: "center" }}
    >
      {children}
    </Typography>
  );
};

const Tistory = () => {
  const imageRef = React.useRef();
  const [expanded, setExpanded] = React.useState(false);

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
          title="Tistory Tech Blog"
          subheader="나만의 알고리즘과 기술 스터디"
        />
        <CardMedia
          component="img"
          image="tistory/blog-manage.png"
          alt="블로그 매니저 사진"
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
          나의 tistory 매니저 홈
        </Typography>
        <CardContent>
          <Typography variant="h6">
            경험을 공유하고 피드백 받을 수 있는 성장 블로그
          </Typography>
          <Typography variant="body2" color="text.secondary">
            알고리즘을 단순히 해결 방법이 아닌 해결 방법을 찾는 방법에 대한
            블로그
          </Typography>
          <Typography variant="body2" color="text.secondary">
            환경 세팅에 대해서 놓친 부분을 기록하는 블로그
          </Typography>
          <Typography variant="body2" color="text.secondary">
            어떤 요구 사항을 코딩하기 전 논리적인 로직을 기록한 뒤 구현 후
            문제가 있었던 로직을 체크하는 블로그
          </Typography>
          <Typography variant="body2" color="text.secondary">
            블로그를 작성하기 전 작성하는 Obsidian 노트 앱 활용
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="https://aeye.tistory.com" target="_blank">
              Aeye tistory
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
              - 문서화하면 과거의 나에게 고마워한다 -
            </Typography>
            <Typography paragraph>
              어떤 상황에서 에러나 설정 오류, 맞는데 왜 안되지 이런 경우를
              경험해 보지 않은 개발자는 없을 것이다.
              <br />
              검색해서 비슷하거나 동일한 경우를 찾더라도 나는 왜 안되지 이런
              경우가 꽤 있다. 이 경험을 겪은 뒤 생각을 해봤는데 검색해서 모든
              것을 해결한다면 chatGPT가 모두 학습해서 다 해결하면 되지
              않을까라는 생각이 들었습니다.
              <br />
              그런데 그렇게는 되지 않을 것 같습니다. 왜냐하면 사람마다
              하드웨어가 다르고 운영체제가 다르고 버전이 다르고 사용하는 국가도
              다르고 어떤 툴의 버전 및 설정값이 동일하지 않습니다.
              <br />
              사실상 완벽히 동일한 환경일 수 없으니 해결되는 문제도 있고 안되는
              문제도 있습니다. 그렇기 때문에 본인이 문제를 일으켰을 때 원인을
              찾고 해결한 뒤 문서화했을 경우 다음에도 그 문제가 일어났을 때
              본인의 문서를 가장 먼저 보는 것이 효율적이라고 느꼈습니다.
              <br />
              문서화하는 과정이 쉽지는 않지만, 해야겠다고 느꼈고 그렇게 해서
              블로그를 시작하게 되었습니다. 블로그에 핵심 컨텐츠는 알고리즘
              문제에 대한 아이디어, 어떤 환경 세팅과 설정의 흐름, 오류에 대한
              길잡이가 있습니다.
            </Typography>
            <Typography paragraph>
              1. 알고리즘
              <br />
              알고리즘은 문제에 대한 해결 능력을 키움으로써 비지니스에 필요한
              로직을 해결할 수 있는 사람이 될 수 있다고 생각합니다. "이 문제를
              왜 풀어야 하는가?"라고 생각하는 것보단 "이런 문제가 언젠간
              비지니스에 필요하다면 어떻게 하드웨어 자원을 최소한으로 쓰며
              효율적으로 풀 수 있을까?"라는 질문으로 바꾸면서 동기부여가
              되었습니다.
            </Typography>
            <Typography paragraph>
              제가 알고리즘을 풀면서 느낀 점이 일단 시간복잡도 및 공간복잡도를
              논리적으로 분석한 뒤 실현이 가능하다고 증명 및 판단되면 그때 특정
              언어(python3)로 구현합니다. 바로 코드로 구현하는 행위를 했다가 안
              풀리는 풀이라고 뒤늦게 깨달아서 다시 구현한다면 시간이라는 추가
              비용이 들어가기 때문에 비효율적이라고 생각했습니다.
            </Typography>
            <Typography paragraph>
              개발은 거의 자바나 코틀린쪽으로 하는데 파이썬으로 알고리즘을 푸는
              이유를 묻는 사람이 적지 않았습니다. 그 이유는 어차피 논리적인
              풀이만 생각하고 그 생각을 코드로만 옮기는 것인데 언어는 중요하지
              않다고 생각했습니다. 그런데 대부분 코딩 테스트는 시간이라는 조건이
              있기 때문에 옮길 때 더 쉬운 모듈과 간결한 문법이 필요하다고
              생각했고 그중 파이썬이 가장 좋다고 판단했기 때문에 선택했습니다.
            </Typography>
            <Typography paragraph>
              논리적인 생각을 할 때 머릿속으로 해결하는 것은 정말 천재의 영역인
              것 같습니다. 저는 똑똑하지 못해서 종이나 태블릿에 쓰면서 합니다.
              그래서 태블릿 필기 앱에 많은 알고리즘에 대한 생각을 정리한 자료가
              정리되어 있습니다. 그중 하나만 업로드했습니다. <br />
              <Link href="tistory/alg-preview.pdf" target="_blank">
                알고리즘 PDF
              </Link>
            </Typography>
            <CardMedia
              component="img"
              image={"tistory/blog-alg.png"}
              alt="Algorithm"
              style={{
                width: "100%",
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <PngTitle>알고리즘 블로그 중 한 페이지</PngTitle>
            <Typography paragraph>
              알고리즘 문제를 검색하면 정답에 대한 코드들이 많이 있습니다.
              그러나 그 코드를 생각하는 과정은 드물다. 아이디어라는 것이
              번뜩하고 떠오르기도 하지만 거의 어떤 절차와 흐름에 의해
              얻어집니다. 문제를 분석하고 그 분석에 대한 논리를 생각해 보고 시간
              복잡도와 공간 복잡도를 생각하고 실현 가능성을 판단하는 과정을
              기술했습니다.
            </Typography>
            <br />
            <Typography paragraph>
              2. 기술및 논리
              <br />
              제가 기록하고 싶었던 기술과 논리를 정리해서 글을 썼습니다.
            </Typography>
            <CardMedia
              component="img"
              image={"tistory/blog-oop.png"}
              alt="Algorithm"
              style={{
                width: "100%",
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <PngTitle>객체지향에 대한 설명</PngTitle>
            <br />
            <CardMedia
              component="img"
              image={"tistory/blog-req.png"}
              alt="Algorithm"
              style={{
                width: "100%",
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <PngTitle>채팅 시스템 요구사항에 대한 논리</PngTitle>
            <br />
            <Typography paragraph>
              3. 옵시디언 노트 앱
              <br />
              옵시디언이라는 노트 앱을 이용해서 저의 아이디어와 경험을 정리하고
              블로그에 쓸만한 글을 골라서 블로그에 글을 작성합니다.
            </Typography>
            <CardMedia
              component="img"
              image={"tistory/obsidian-jenkins.png"}
              alt="Algorithm"
              style={{
                width: "100%",
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <PngTitle>Jenkins 적용 문서화</PngTitle>
            <br />
            <CardMedia
              component="img"
              image={"tistory/obsidian-draw.png"}
              alt="Algorithm"
              style={{
                width: "100%",
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <PngTitle>문서 작업 시 필요한 그림을 그리는 도구</PngTitle>
          </CardContent>
        </Collapse>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <CardMedia
            component="img"
            height="auto"
            image={imageRef.current}
            alt="Dialog"
            style={{ width: "100%" }}
          />
        </Dialog>
      </Card>
    </>
  );
};

export default Tistory;
