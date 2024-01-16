import { faExpand, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState,useEffect } from "react";
import Navbar from "../items/Navbar";
import Footer from "../items/Footer";
import axios from "axios";
import { Link,  useNavigate, useParams } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import Lineanimation from "../items/Lineanimation";
import { Box } from "@mui/material";
import { Spinner } from "react-bootstrap";
import ScrollTop from "./ScrollTop";


function ProductDetails() {

  const [activeImage, setActiveImage] = useState(0); 
  const [metal,setMetal]=useState("");
  const [stone,setStone]=useState("");
  const [size,setSize]=useState("");
  const [message,setMessage]=useState("");
  const [errorMessage,setErrorMessage]=useState("");
  const [successMessage,setSuccessMessage]=useState("");
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [item,setItem]=useState([]);
  const [loading,setLoading]=useState(true)
  const [shuffledItems, setShuffledItems] = useState([]);

  const navigate=useNavigate();
  const category=products.category;
  
  const placeOrder=async()=>{
    try{

      const cookies=document.cookie;
      const token= cookies.split(";").find((cookie) => cookie.trim().startsWith("jwt="));
      
      if(token){
       const Object=jwtDecode(token);
       const firstName=Object.user.firstName;
       const lastName=Object.user.lastName;
       
       const userName=firstName + " " + lastName;
       const product=products.product;
       const category=products.category;
        const order=({
          metal,
          stone,
          size,
          userName,
          product,
          category,
          message
        });
    
        const response=await axios.post('http://63.250.47.54:5003/createorder',order);
        if(response.status===201){
          console.log("order success")
          setSuccessMessage("Your order placed.We will contact you soon");
          setMessage("")
          setTimeout(()=>{
            setSuccessMessage("");
          
          },5000)
        }else{
          console.log("failed to place order")
          setErrorMessage("Order can not place.Please try again or Contact us")
        }
      }else{
        navigate('/register')
      }
     
    }catch(error){
      setErrorMessage("Order can not place.Please try again or Contact us")
    }
  }

  

 useEffect(()=>{
  const SliceProduct = [...item].sort(()=>Math.random()- 0.5);
  const LimitProduct=SliceProduct.slice(0,8);
  setShuffledItems(LimitProduct);

 },[item]);



  useEffect(()=>{
    const getProductData=async ()=>{
      try{
        const response=await axios.get("http://63.250.47.54:5003/getproduct");
        if(response.status===200){
         const formattedData=response.data;

         const productArray=formattedData.formattedProduct.map((product)=>({
          id:product.id,
          image:product.image,
          product:product.name,
          description:product.description,
          category:product.category

        }));

        setItem(productArray)
        }else{
          setErrorMessage("Can not find products.Please refresh page again");
        }
        
      }catch(err){
        console.error(err);
        setErrorMessage("Can not find products.Please refresh page again");
      }
    }
    getProductData();
  },[]);


  useEffect(() => {
    const getProductData = async () => {
      
      setLoading(true);
      
      try {
        const response = await axios.get(`http://63.250.47.54:5003/getproductbyid/${id}`);
        console.log(response.data)
        if (response.status === 200) {
          const formattedData = response.data;

          const productData = formattedData.formattedProduct; // Assuming there is only one product with the given ID
          
          setProducts({
            id: productData.id,
            image: productData.image,
            product: productData.name,
            description: productData.description,
            category:productData.category,
          });

         
        } else {
          setErrorMessage("Can not find products. Please refresh the page again");
        }
      } catch (err) {
        console.error(err);
        setErrorMessage("Can not find products. Please refresh the page again");
      }finally{
        setLoading(false);
      }
    };

    getProductData();
  }, [id]);
 

  
  return (
    <div>
       <ScrollTop/>
       <div
        
      >
        {/* <Box sx={{ textAlign: 'center', pt:0, }}>
          <img src="/images/lo.png"  style={{ height: '200px', width: '200px',margin:"-3rem 0 -3rem 0" }} />
        </Box> */}
        <Navbar />
       
      </div>
      <div className="py-5 mt-5">
        <div className="container">
          <div className="row">
       
          {loading ? 
          
          <div className="mb-5">
            <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
          </Spinner>
            <span>Loading...</span>
          </div>:(
            <div className=" col-lg-6">
              
            
            <div className=" mb-3 d-flex justify-content-center">
              <a  target="_blank" data-type="image">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    margin: "auto",
                  }}
                 
                  src={`http://63.250.47.54:5003/${products.image[0]}`}
                />
              </a>
            </div>
            {products.image.length > 1 && (
  <div className="d-flex justify-content-center m-hover">
    {products.image.slice(1).map((image, index) => (
      <div key={index} className="mb-3">
        <a target="_blank" data-type="image">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "15vh",
              margin: "auto",
            }}
            src={`http://63.250.47.54:5003/${image}`}
           
          />
        </a>
      </div>
    ))}
  </div>
)}

            
            
           
          </div>
          )}
            

            <div className="col-lg-6">
     
              <div className="ps-lg-3">
                <h3 className="title text-dark">
                  {" "}
                  {products.product}
                </h3>

                <p className="mt-3">
                {products.description}
                </p>
                
              <div className="mt-3">
                <details >
                  <summary>Size & Fit</summary>
                  <p>To determine your ring size, kindly contact our team, and we will provide you with guidance on how to accurately measure it from the comfort of your own home.

If you don't find the size you're seeking listed, we provide inclusive sizing at no extra charge.
</p>
                </details>
                <details>
                  <summary>Sourcing</summary>
                  <p>​​All of our pieces are meticulously crafted by hand in Sri Lanka, and we take pride in utilizing ethically sourced metals and gemstones in their creation.</p>
                </details>
                <details>
                  <summary>Shipping and Delivery</summary>
                  <p>All shipments are dispatched fully insured and include tracking information for your convenience. Please note that shipping times may vary depending on the type of jewelry, ensuring that each piece receives the attention and care it deserves during transit. Rest assured, our commitment to secure and efficient shipping ensures your handcrafted treasures reach you in perfect condition.</p>
                </details>
              </div>
              {successMessage && 
      
      <div className="alert alert-info mb-3" style={{width:'100%'}} role="alert">
        {successMessage}
      
      </div>  
    
      }
              <h3 className="justify-content-center mt-3">
                  Customize your design
                </h3>
                
                <div className="mt-3">
                  <form>
                  <div className="d-flex text-b ">
                    <h5 className="mt-2">Metal</h5>
                  
                    <select
                    value={metal}
                    onChange={(e)=>setMetal(e.target.value)}
                      class="form-select mx-3 "
                      aria-label="Default select example"
                    >
                      <option selected>Select a metal</option>
                      <option value="Yellow gold">Yellow gold</option>
                      <option value="White gold">White gold</option>
                      <option value="Rose gold">Rose gold</option>
                    </select>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 className="mt-2">Stone</h5>
                    <select
                    value={stone}
                    onChange={(e) => setStone(e.target.value)}
                      class="form-select mx-3 "
                      aria-label="Default select example"
                    >
                      <option selected>Select a stone</option>
                      <option value="Amethyst">Amethyst</option>
                      <option value="Aquamarine">Aquamarine</option>
                      <option value="Blue Sapphire">Blue Sapphire</option>
                      <option value="Chrysoberyl">Chrysoberyl</option>
                      <option value="Citrine">Citrine</option>
                      <option value="Diamond">Diamond</option>
                      <option value="Emerald">Emerald</option>
                      <option value="Garnet">Garnet</option>
                      <option value="Moonstone">Moonstone</option>
                      <option value="Onyx">Onyx</option>
                      <option value="Opal">Opal</option>
                      <option value="Padparadscha">Padparadscha</option>
                      <option value="Peridot">Peridot</option>
                      <option value="Pink Sapphire">Pink Sapphire</option>
                      <option value="Rose Quartz">Rose Quartz</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Smoky Quartz">Smoky Quartz</option>
                      <option value="Spinel">Spinel</option>
                      <option value="Topaz">Topaz</option>
                      <option value="Tourmaline">Tourmaline</option>
                      <option value="Turquoise">Turquoise</option>
                      <option value="Yellow Sapphire">Yellow Sapphire</option>
                      <option value="Zircon">Zircon</option>
                      <option value="Sterling Silver">Sterling Silver</option>
                    </select>
                  </div>
                  {category && 
                  <div className="d-flex mt-2">
                  <h5 className="mt-2"> Size</h5>

                  <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                    class="form-select mx-3 "
                    aria-label="Default select example"
                  >
                    <option selected>Select a size</option>
                    <option value="4: 14.86 mm">4: 14.86 mm</option>
                    <option value=" 4.5: 15.27 mm"> 4.5: 15.27 mm</option>
                    <option value="5: 15.7 mm">5: 15.7 mm</option>
                    <option value="5.5: 16.1 mm">5.5: 16.1 mm</option>
                    <option value="6: 16.51 mm">6: 16.51 mm</option>
                    <option value="6.5: 16.92 mm">6.5: 16.92 mm</option>
                    <option value="7: 17.35 mm">7: 17.35 mm</option>
                    <option value="7.5: 17.75 mm">7.5: 17.75 mm</option>
                    <option value="8: 18.19 mm">8: 18.19 mm</option>
                    <option value="8.5: 18.53 mm">8.5: 18.53 mm</option>
                    <option value="9: 18.89 mm">9: 18.89 mm</option>
                    <option value="9.5: 19.41 mm">9.5: 19.41 mm</option>
                    <option value="10: 19.84 mm">10: 19.84 mm</option>
                    <option value="10.5: 20.2 mm">10.5: 20.2 mm</option>
                    <option value="11: 20.68 mm">11: 20.68 mm</option>
                    <option value="11.5: 21.08 mm">11.5: 21.08 mm</option>
                    <option value="12: 21.49 mm">12: 21.49 mm</option>
                  </select>
                </div>
               
                  }
                  
                 <label htmlFor="message" className="custom-label mt-2">
              Message
            </label>
            <textarea
              id="message"
              className="custom-textarea"
          
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
                  
                
                 
                
                <div className="d-grid mt-2">
                <button onClick={placeOrder}class="btn-primary custom-btn" type="button">Place Order Now</button>
                </div>
                  </form>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-products" id="section">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 col-lg-12 d-flex justify-content-center">
              <div className="  header ">
                <h2>You may also like</h2>
              
              </div>
              
            </div>
          </div>

         
          {shuffledItems.length > 0 ? (
          <div className="row">
            {shuffledItems.map((product) => (
                
              <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                <div  className="single-product">
                <Link to={`/productdetails/${product.id}`}>
                  <div className="part-1">
                 <img src={`http://63.250.47.54:5003/${product.image[0]}`} alt="product-image" />
                    <ul>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faHeart} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faExpand} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  </Link>
                  <div className="part-2">
                    <h3 className="product-title">{product.product}</h3>
                  </div>
                </div>
              </div>
             
            ))}
            
          </div>
          
        ) : (
          <div className="mb-5">
            <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
        </Spinner>
       <span>Loading...</span>
          </div>
        )}

         
      
        </div>
      </section>
      <Footer/>
      </div>
    </div>
  );
}

export default ProductDetails;
