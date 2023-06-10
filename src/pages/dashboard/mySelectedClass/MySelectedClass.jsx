import useAllSelectedClass from "../../../hooks/useAllSelectedClass";

const MySelectedClass = () => {
    const [selectedClasses]  = useAllSelectedClass();
    return (
        <>
            this is my selected class {selectedClasses?.length}
        </>
    );
};

export default MySelectedClass;