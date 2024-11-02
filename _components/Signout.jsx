import { Button } from "./Button";
import { signout } from "../_lib/actions";

function Signout() {
  return (
    <form>
      <Button formAction={signout} variant="outline">
        Signout
      </Button>
    </form>
  );
}

export default Signout;
