import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div className="container">
      <div className="Kitchen">
        <Kitchen />
      </div>
     <div className="LivingRoom">
      <LivingRoom />
     </div>
     <div className="Bedroom-1">
      <Bedroom bednum={1}/>
     </div>
     <div className="Bedroom-2">
      <Bedroom bednum={2}/>
     </div>
     <div className="Bedroom-3">
      <Bedroom bednum={3}/>
     </div>
     <div className="Half-bath">
      <Bath size="half" />
     </div>
     <div className="Full-bath">
      <Bath size="full" />
     </div>
    </div>
   );
}
 
export default FloorPlan;