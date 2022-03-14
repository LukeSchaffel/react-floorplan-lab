import Oven from "./Oven";
import Sink from "./Sink.jsx";

const Kitchen = (props) => {
  return ( 
    <div>
    <h2>Kitchen</h2>
    <Oven />
    <Sink />
    </div>
   );
}
 
export default Kitchen;