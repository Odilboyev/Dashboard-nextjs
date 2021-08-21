import Dashboard from "./Dashboard"
import HomeContainer from "./Home";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  // const router = useRouter()
  // const { pid } = router.query
  // console.log(pid)
  return (
    <Dashboard menu={"Home"}>
      <HomeContainer />
    </Dashboard>
  );
}
