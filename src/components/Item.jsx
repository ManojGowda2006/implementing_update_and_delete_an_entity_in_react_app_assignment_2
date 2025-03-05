const Item = ({ item, api ,setItem}) => {

    // Render a single item
    // Add a Delete and Edit button

    const handleClick = async() => {
            try{
               await fetch(`${api}${item.id}`,{
                method : "delete",
                header : "Content-Type : application/json",
               })
               setItem((prevItems) => prevItems.filter((i) => i.id !== item.id));
               console.log("deleted successfully")
            }catch(err){
              console.log(err)
            }
        }

    return (
        <>
        <h1>{item.name}</h1>
        <h2>{item.status}</h2>
        <button >edit</button>
        <button onClick={handleClick}>delete</button>
        </>
    );
};

export default Item;
