import React, {useState} from "react";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    //제품 사진을 Cloudinary 에 업로드하고 URL 을 획득
    //Firebase 에 새로운 제품을 추가
  };
  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({...product, [name]: value}));
    
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt='local file'/>}
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="file" required onChange={handleChange}/>
        <input type="text" name="title" value={product.title ?? ""} placeholder='제품명' required onChange={handleChange}/>
        <input type="number" name='price' value={product.price??''} required onChange={handleChange}/>
        <input type="text" name='description' value={product.category??''} required placeholder='제품 설명' onChange={handleChange}/>
        <input type="text" name='options' value={product.options??''} required placeholder='옵션들은 콤마(,)로 구분' onChange={handleChange}/>
        <Button text={'제품 등록하기'}></Button>
      </form>
    </section>
  );
}
