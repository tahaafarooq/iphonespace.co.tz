import Spinner from "../elements/Spinner";
import Center from "../tags/Center";

const OverlyLoader = ({className}) => {
    return (
        <Center className="h-full" style={{display:"flex"}}>
            <Spinner className='w-4 h-4 m-auto text-primary border-3' />
        </Center>
    );
}

export default OverlyLoader;