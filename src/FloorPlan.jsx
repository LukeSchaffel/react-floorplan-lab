import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <>
     <Kitchen />
     <LivingRoom />
     <Bedroom bednum={1}/>
     <Bedroom bednum={2}/>
     <Bedroom bednum={3}/>
     <Bath size="half" />
     <Bath size="full" />
    </>
   );
}
 
export default FloorPlan;