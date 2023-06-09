import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";

const MyClasses = () => {
  const[classes] = useClasses()
  return (
    <>
      <Helmet>
        <title>EliteSports Academy | My Classes</title>
      </Helmet>
      <h1>My Classes {classes.length}</h1>
    </>
  );
};

export default MyClasses;
