import { Card, Container, Divider } from "@mui/material";
import AboutMe from "./components/AboutMe";
import Preview from "./components/Preview";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container maxWidth="md" sx={{ minWidth: "960px" }}>
      <Card sx={{ backgroundColor: "#F8F9FA", p: "2rem" }}>
        <AboutMe />
        <div id="emptySpace" style={{ marginTop: "6rem" }}></div>
        <Divider />
        <Preview />
        <div id="emptySpace" style={{ marginTop: "6rem" }}></div>
        <Divider />
        <Detail />
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Footer />
      </Card>

      <div id="emptySpace" style={{ marginBottom: "6rem" }}></div>
    </Container>
  );
};
export default App;
