import Item from "./Item";

const ItemList = ({ items,api,setItem }) => {
    // your code here
    if(!items){
        return <h1>Loading!</h1>
    }
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} api = {api} setItem = {setItem}/>
            ))}
        </>
    );
};

export default ItemList;
