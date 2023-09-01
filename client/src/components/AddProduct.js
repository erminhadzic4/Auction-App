import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { createProduct, getCategories } from "../services/utils";
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
import "../styles/AddProduct.css";

const AddProduct = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [currentStep, setCurrentStep] = useState(1);
  const [progress] = useState(3);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const arr = [];
  let stepClassName = "";
  if (currentStep === 1) {
    stepClassName = "progress-0";
  } else if (currentStep === 2) {
    stepClassName = "progress-50";
  } else if (currentStep === 3) {
    stepClassName = "progress-100";
  }
  for (let i = 0; i < progress; i++) {
    arr.push(
      <Circle classname={i <= active ? "circle active" : "circle"} key={i}>
        {i}
      </Circle>
    );
  }

  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);

  const [formData, setFormData] = useState({
    imageUrl: "",
    item: "",
    category: "",
    categories: [],
    subcategory: "",
    description: "",
    selectedImages: [],
    selectedCategoryId: "",
    startPrice: "",
    startingDate: "",
    endingDate: "",
    address: "",
    email: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const imageFiles = Array.from(event.target.files);
    setFormData((prevData) => ({
      ...prevData,
      selectedImages: [...prevData.selectedImages, ...imageFiles],
    }));
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const imageFiles = Array.from(event.dataTransfer.files);
    setFormData((prevData) => ({
      ...prevData,
      selectedImages: [...prevData.selectedImages, ...imageFiles],
    }));
  };

  const handleClickInsideDropzone = () => {
    document.getElementById("image").click();
  };

  const handleRemoveImage = (index, event) => {
    event.stopPropagation();
    setFormData((prevData) => {
      const updatedImages = [...prevData.selectedImages];
      updatedImages.splice(index, 1);
      return {
        ...prevData,
        selectedImages: updatedImages,
      };
    });
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

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const selectedCategoryObject = formData.categories.find(
      (cat) => cat.category_id === selectedCategory
    );

    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory,
      selectedCategoryId: selectedCategory,
      categoryId: selectedCategoryObject
        ? selectedCategoryObject.categoryId
        : "",
    }));
  };

  const handleNextStep = async () => {
    if (currentStep === 1) {
      if (
        !formData.item ||
        !formData.category ||
        !formData.description ||
        formData.selectedImages.length < 1
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all required fields and add at least 1 image.",
        });
        return;
      }
    } else if (currentStep === 2) {
      if (
        !formData.startPrice ||
        !formData.startingDate ||
        !formData.endingDate
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all required fields and add at least 1 image.",
        });
        return;
      }
    } else if (currentStep === 3) {
      try {
        if (
          !formData.address ||
          !formData.email ||
          !formData.city ||
          !formData.zip ||
          !formData.country ||
          !formData.phone
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all required fields and add at least 1 image.",
          });
          return;
        }
        setLoading(true);

        if (formData.selectedImages.length === 0) {
          Swal.fire({
            icon: "error",
            title: "No Image Selected",
            text: "Please select an image before proceeding.",
          });
          setLoading(false);
          return;
        }

        const storage = getStorage();
        const imageFile = formData.selectedImages[0];
        const imageName = `${Date.now()}_${imageFile.name}`;
        const storageRef = ref(storage, `images/${imageName}`);

        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        handleFieldChange("imageUrl", downloadURL);

        const response = await createProduct({
          name: formData.item,
          description: formData.description,
          starting_price: formData.startPrice,
          current_price: formData.startPrice,
          ending_time: formData.endingDate,
          seller_id: id,
          category_id: formData.selectedCategoryId,
          image: downloadURL,
        });

        setLoading(false);

        let timerInterval;
        Swal.fire({
          title: "Item successfully added!",
          html: "I will close in <b></b> milliseconds.",
          timer: 5000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            navigate("/home");
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            navigate("/home");
          }
        });
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
      }

      return;
    }
    setCurrentStep(currentStep + 1);
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
          handleFieldChange("categories", response.data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return loading ? (
    <Layout>
      <div className="loading-div">
        <h1>Loading ...</h1>
      </div>
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
            <div className={`progress ${stepClassName}`}></div>
            {arr}
          </div>
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
                value={formData.item}
                onChange={(e) => handleFieldChange("item", e.target.value)}
              />
              <div className="categories">
                <select
                  id="category"
                  name="category"
                  className="drop-down"
                  value={formData.category}
                  onChange={(e) => handleCategoryChange(e)}
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {formData.categories.map((cat) => (
                    <option key={cat.category_id} value={cat.category_id}>
                      {cat.category_id}. {cat.name}
                    </option>
                  ))}
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
                  value={formData.description}
                  required
                  onChange={(e) =>
                    handleFieldChange("description", e.target.value)
                  }
                />
              </div>
              <div
                className="image-dropzone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleImageDrop}
                onClick={handleClickInsideDropzone}
              >
                <div className="dashed-border">
                  {formData.selectedImages.length > 0 ? (
                    <div className="image-icons">
                      {formData.selectedImages.map((image, index) => (
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
                    value={
                      formData.startPrice !== "" ? formData.startPrice : ""
                    }
                    onChange={(e) =>
                      handleFieldChange("startPrice", e.target.value)
                    }
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
                  value={formData.startingDate}
                  placeholder="01/01/2001"
                  onChange={(e) =>
                    handleFieldChange("startingDate", e.target.value)
                  }
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
                  value={formData.endingDate}
                  placeholder="15/01/2001"
                  onChange={(e) =>
                    handleFieldChange("endingDate", e.target.value)
                  }
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
                value={formData.address}
                onChange={(e) => handleFieldChange("address", e.target.value)}
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
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
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
                  value={formData.city}
                  onChange={(e) => handleFieldChange("city", e.target.value)}
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
                  value={formData.zip}
                  onChange={(e) => handleFieldChange("zip", e.target.value)}
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
                value={formData.country}
                onChange={(e) => handleFieldChange("country", e.target.value)}
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
                  value={formData.phone}
                  onChange={(e) => handleFieldChange("phone", e.target.value)}
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

export default AddProduct;
