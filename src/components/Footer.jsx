import { Alert, AlertTitle, Link } from "@mui/material";

const Footer = () => {
  return (
    <Alert severity="info" variant="outlined">
      <AlertTitle>
        이 페이지는 포트폴리오를 위한 페이지이며 react로 작성했습니다.
      </AlertTitle>
      시간이 지나면서 지속적으로 포트폴리오가 변경될 수 있으므로 CI/CD를
      적용했습니다.
      <br />
      코드를 보고 싶은 경우{" "}
      <Link href="https://github.com/K0TLINER/portfolio" target="_blank">
        여기
      </Link>
      를 클릭해주세요.
    </Alert>
  );
};

export default Footer;
