import Form from "./Form";

export default function ItemList({ data, setData }) {
  const { products } = data;
  const addHandler = () => {
    setData({
      ...data,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setData({ ...data, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setData({ ...data, products: newProducts });
  };
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products?.map((item, index) => (
          <ProductItem key={index} item={item} changeHandler={(e) => changeHandler(e, index)} deleteHandler={() => deleteHandler(index)} />
      ))}
      <button className="addBtn" onClick={addHandler}>Add Item</button>
    </div>
  );
}

const ProductItem =({item,changeHandler,deleteHandler})=>{
  return(
    <div className="addItem">
    <Form
      name="name"
      type="text"
      label="Name"
      value={item.name}
      onChange={changeHandler}
    />
    <div className="addItem-detial">
      <Form
        name="price"
        type="text"
        label="Price"
        value={item.price}
        onChange={changeHandler}
      />
      <Form
        name="qty"
        type="number"
        label="Qty"
        value={item.qty}
        onChange={changeHandler}
      />
    </div>
    <button className="removeBtn" onClick={deleteHandler}>Remove</button>
  </div>
  )
}