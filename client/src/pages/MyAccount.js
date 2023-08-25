import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FaArrowRight, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fetchProtectedInfo, onLogout } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Circle from "../components/Circle";
import "../styles/ProgressBar.css";
import "../styles/Styles.css";
import "../styles/MyAccount.css";
import { createProduct, getCategories } from "../services/utils";

const MyAccount = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [currentStep, setCurrentStep] = useState(1);
  const [progress] = useState(3);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const arr = [];
  for (let i = 0; i < progress; i++) {
    arr.push(
      <Circle classname={i <= active ? "circle active" : "circle"} key={i}>
        {i}
      </Circle>
    );
  }

  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const [startPrice, setStartPrice] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleImageUpload = (event) => {
    const imageFiles = Array.from(event.target.files);
    setSelectedImages([...selectedImages, ...imageFiles]);
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const imageFiles = Array.from(event.dataTransfer.files);
    setSelectedImages([...selectedImages, ...imageFiles]);
  };

  const handleClickInsideDropzone = () => {
    document.getElementById("image").click();
  };

  const handleRemoveImage = (index, event) => {
    event.stopPropagation();
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleStartPriceChange = (e) => {
    setStartPrice(parseFloat(e.target.value));
  };

  const handleStartingDateChange = (e) => {
    setStartingDate(e.target.value);
  };

  const handleEndingDateChange = (e) => {
    setEndingDate(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const logout = async () => {
    try {
      await onLogout();
      auth.logout();
      navigate("/login");
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();
      setProtectedData(data.info);
      console.log(data.info);
      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSelectedCategoryId(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNextStep = async () => {
    if (currentStep === 1) {
      // if (
      //   !item ||
      //   !category ||
      //   !subcategory ||
      //   !description ||
      //   selectedImages.length < 1
      // ) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Please fill in all required fields and add at least 1 image.",
      //   });
      //   return;
      // }
    } else if (currentStep === 2) {
    } else if (currentStep === 3) {
      try {
        setLoading(true);

        if (selectedImages.length === 0) {
          Swal.fire({
            icon: "error",
            title: "No Image Selected",
            text: "Please select an image before proceeding.",
          });
          setLoading(false);
          return;
        }

        const storage = getStorage();
        const imageFile = selectedImages[0];
        const imageName = `${Date.now()}_${imageFile.name}`;
        const storageRef = ref(storage, `images/${imageName}`);

        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);

        const response = await createProduct({
          name: item,
          description: description,
          starting_price: startPrice,
          current_price: startPrice,
          ending_time: endingDate,
          seller_id: id,
          category_id: selectedCategoryId,
          image: downloadURL,
        });

        setLoading(false);
        setCurrentStep(currentStep + 1);
        console.log("Image uploaded to Firebase:", imageUrl);

        // console.log({
        //   name: item,
        //     description: description,
        //     starting_price: startPrice,
        //     current_price: startPrice,
        //     ending_time: endingDate,
        //     seller_id: id,
        //     category_id: selectedCategoryId,
        //     image: imageUrl,
        // })
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
      }

      return;
    }
    setCurrentStep(currentStep + 1);
    console.log("Step 1 info:", {
      item,
      category,
      subcategory,
      description,
      selectedImages,
    });
    console.log("Step 2 info:", {
      startPrice,
      startingDate,
      endingDate,
    });
    console.log("Step 3 info:", {
      address,
      email,
      city,
      zip,
      country,
      phone,
    });
    active >= progress ? setActive(progress) : setActive(active + 1);
  };

  useEffect(() => {
    protectedInfo();
  }, []);

  useEffect(() => {
    setWidth((100 / (progress - 1)) * active);
  }, [progress, active]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getCategories();
        if (response.data.success) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return loading ? (
    <Layout>
      <h1>Loading ...</h1>
    </Layout>
  ) : (
    <Layout>
      <div className="container-title">
        <p className="title-left">Seller</p>
        <span>
          <Link to="/my-account" className="title-right-home">
            My Account
          </Link>
          <span className="title-right-icon">
            <FaArrowRight />
          </span>
          <span className="title-right-link">Add Item</span>
        </span>
      </div>
      <div className="progress-container">
        <div className="content">
          <div className="progressbar">
            <div className="progress" style={{ width: width + "%" }}></div>
            {arr}
          </div>
          {/* <div className="buttons">
            <button
              className="btn-prev"
              disabled={active > 0 ? false : true}
              onClick={() => {
                active <= 0 ? setActive(0) : setActive(active - 1);
              }}
            >
              Prev
            </button>
            <button
              className="btn-next"
              disabled={active >= progress - 1 ? true : false}
              onClick={() => {
                active >= progress
                  ? setActive(progress)
                  : setActive(active + 1);
              }}
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
      {currentStep === 1 && (
        <div className="item-form">
          <h2 className="form-title">ADD ITEM</h2>
          <form>
            <div className="input-group">
              <label htmlFor="item" className="label-typography">
                What do you sell?
              </label>
              <input
                type="text"
                id="item"
                name="item"
                className="input-field"
                placeholder="eg. HyperX Cloud Flight - Wireless Gaming Headset"
                autoComplete="off"
                required
                value={item}
                onChange={(e) => handleItemChange(e)}
              />
              <div className="categories">
                <select
                  id="category"
                  name="category"
                  className="drop-down"
                  value={selectedCategoryId}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.category_id} value={cat.category_id}>
                      {cat.category_id}. {cat.name}
                    </option>
                  ))}
                </select>
                <select
                  id="subcategory"
                  name="subcategory"
                  className="drop-down"
                  value={subcategory}
                  placeholder="Choose subcategory"
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="subcategory1">Subcategory 1</option>
                  <option value="subcategory2">Subcategory 2</option>
                  <option value="subcategory3">Subcategory 3</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="description" className="label-typography">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="input-field"
                  placeholder="100 words (700 characters)"
                  value={description}
                  required
                  onChange={handleDescriptionChange}
                />
              </div>
              <div
                className="image-dropzone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleImageDrop}
                onClick={handleClickInsideDropzone}
              >
                <div className="dashed-border">
                  {selectedImages.length > 0 ? (
                    <div className="image-icons">
                      {selectedImages.map((image, index) => (
                        <div className="image-icon" key={index}>
                          <FaTimesCircle
                            className="remove-icon"
                            onClick={(event) => handleRemoveImage(index, event)}
                          />
                          <p className="image-name">{image.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="image-tooltip">
                      <p className="upload-text">Upload Photos</p>
                      <p className="dnd-text">or just drag and drop</p>
                      <p className="minimum-text">(Add at least 3 photos)</p>
                    </span>
                  )}
                </div>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  hidden
                  multiple
                  required
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="categories">
              <button className="cancel-button">Cancel</button>
              <button className="next-button" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {currentStep === 2 && (
        <div className="item-form">
          <h2 className="form-title">SET PRICES</h2>
          <form>
            <div className="input-group">
              <div className="input-group">
                <label htmlFor="item" className="label-typography">
                  Your start Price
                </label>
                <div className="price-input-group">
                  <div className="price-icon">$</div>
                  <input
                    type="text"
                    id="startPrice"
                    name="startPrice"
                    className="input-field"
                    placeholder="Enter your price"
                    autoComplete="off"
                    required
                    value={startPrice !== "" ? startPrice : ""}
                    onChange={handleStartPriceChange}
                  />
                </div>
              </div>
            </div>
            <div className="date-input-row">
              <div className="date-input-group">
                <div className="date-label">Starting Date</div>
                <input
                  type="date"
                  id="startingDate"
                  name="startingDate"
                  className="input-field"
                  autoComplete="off"
                  required
                  value={startingDate}
                  placeholder="01/01/2001"
                  onChange={handleStartingDateChange}
                />
              </div>
              <div className="date-input-group">
                <div className="date-label">Ending Date</div>
                <input
                  type="date"
                  id="endingDate"
                  name="endingDate"
                  className="input-field"
                  autoComplete="off"
                  required
                  value={endingDate}
                  placeholder="15/01/2001"
                  onChange={handleEndingDateChange}
                />
              </div>
            </div>
            <span className="caution-text">
              The auction will be automatically closed when the end time comes.
              The highest bid will win the auction.
            </span>
            <div className="categories">
              <div className="left-section">
                <button className="cancel-button">Cancel</button>
              </div>
              <div className="right-section">
                <button
                  className="back-button"
                  onClick={() => {
                    active <= 0 ? setActive(0) : setActive(active - 1);
                    setCurrentStep(currentStep - 1);
                  }}
                >
                  BACK
                </button>
                <button className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {currentStep === 3 && (
        <div className="item-form">
          <h2 className="form-title">LOCATION & SHIPPING</h2>
          <form>
            <div className="input-group">
              <label htmlFor="address" className="label-typography">
                Address
              </label>
              <input
                type="text"
                id="adress"
                name="adress"
                className="input-field"
                placeholder="5331 Rexford Court, Montgomery AL 36116"
                autoComplete="off"
                required
                value={address}
                onChange={(e) => handleAddressChange(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label-typography">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="input-field"
                placeholder="user@domain.com"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
            </div>

            <div className="date-input-row">
              <div className="date-input-group">
                <div className="date-label">City</div>
                <input
                  type="text"
                  id="startingDate"
                  name="startingDate"
                  className="input-field"
                  placeholder="Birmingham"
                  autoComplete="off"
                  required
                  value={city}
                  onChange={(e) => handleCityChange(e)}
                />
              </div>
              <div className="date-input-group">
                <div className="date-label">Zip Code</div>
                <input
                  type="text"
                  id="endingDate"
                  name="endingDate"
                  className="input-field"
                  placeholder="XXXXXXX"
                  autoComplete="off"
                  required
                  value={zip}
                  onChange={(e) => handleZipChange(e)}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="country" className="label-typography">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="input-field"
                placeholder="England"
                autoComplete="off"
                required
                value={country}
                onChange={(e) => handleCountryChange(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="item" className="label-typography">
                Phone Number
              </label>
              <div className="number-input-group">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="input-field"
                  placeholder="+3812312371"
                  autoComplete="off"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                />
                <div className="number-text">Not verified</div>
              </div>
            </div>
            <div className="categories">
              <div className="left-section">
                <button className="cancel-button">Cancel</button>
              </div>
              <div className="right-section">
                <button
                  className="back-button"
                  onClick={() => {
                    active <= 0 ? setActive(0) : setActive(active - 1);
                    setCurrentStep(currentStep - 1);
                  }}
                >
                  BACK
                </button>
                <button className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default MyAccount;
