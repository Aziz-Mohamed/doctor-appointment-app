import { Button } from "@/_components/Button";
import { signout } from "@/_lib/actions";

function Signout({...props}) {
  return (
    <form>
      <Button formAction={signout} variant="outline" {...props}>
        Signout
      </Button>
    </form>
  );
}

export default Signout;
