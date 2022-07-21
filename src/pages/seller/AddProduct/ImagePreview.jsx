import React, { useState } from "react";

function ImagePreview({ file }) {
  const [preview, setPreview] = useState();
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
    return (
      <div>
        <img src={preview} alt="" style={{ maxWidth: "200px", maxHeight:'200px', objectFit: 'cover' }} />
      </div>
    );
  }
}

export default ImagePreview;